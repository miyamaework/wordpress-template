const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SpritePlugin = require('svg-sprite-loader/plugin');
const WebpackPluginCopyWebpack = require('copy-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const buildConfig = require('./webpack/config');

const devMode = process.env.NODE_ENV !== 'production';

const themePath = {
  rootDir: '',
  assetsDir: 'assets',
};

let config = {
  mode: devMode ? 'development' : 'production',
  entry: {
    main: './src/entrypoints/main.ts',
    assets: './src/entrypoints/view-assets.ts',
  },
  output: {
    path: buildConfig.webpack.output,
    publicPath: buildConfig.webpack.publicPath,
    filename: path.join(themePath.assetsDir, `[name].[contenthash].js`),
    chunkFilename: path.join(themePath.assetsDir, devMode ? `[name].[contenthash].js` : `[id].[contenthash].js`),
    assetModuleFilename: `${themePath.assetsDir}/[contenthash][ext][query]`,
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: {
      '@': path.join(buildConfig.webpack.srcDir),
      templates: path.join(buildConfig.webpack.srcDir, 'templates'),
      images: path.join(buildConfig.webpack.srcDir, 'images'),
      svgsprite: path.join(buildConfig.webpack.srcDir, 'templates/svgsprite.js'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: path.join(themePath.assetsDir, '[name].[contenthash].css'),
      chunkFilename: path.join(themePath.assetsDir, '[name].[contenthash].css'),
    }),
    new SpritePlugin({
      spriteAttrs: {
        id: 'svgsprite',
        style: 'position: absolute; width: 0; height: 0; visibility: hidden;',
      },
    }),
    new WebpackPluginCopyWebpack({
      patterns: [
        { from: path.join(buildConfig.webpack.srcDir, 'static'), to: themePath.rootDir },
        { from: path.join(buildConfig.webpack.srcDir, 'templates'), to: themePath.rootDir },
      ],
    }),
    new WebpackManifestPlugin({
      filter: (file) => !file.path.endsWith('.php'),
      /**
       * https://github.com/shellscape/webpack-manifest-plugin/issues/181
       *
       * @return {
       *   files: {
       *     "a": [
       *       "a.css": "/app-packs/a.css",
       *       "a.js": "/app-packs/chunk.a.js",
       *     ],
       *   }
       *   chunkFiles: {
       *     "a": [
       *       "/app-packs/chunk.vendors~a.js",
       *       "/app-packs/chunk.a.js",
       *       "/app-packs/a.css",
       *     ],
       *   }
       * }
       */
      generate: (seed, files) => {
        const entrypoints = new Set();
        files.forEach((file) => ((file.chunk || {})._groups || []).forEach((group) => entrypoints.add(group)));

        const chunkFiles = [...entrypoints].reduce((acc, { name, chunks }) => {
          const files = [...chunks.map((chunk) => [...chunk.files]).flat()];
          return name ? { ...acc, [name]: files.map((file) => `${buildConfig.webpack.publicPath}${file}`) } : acc;
        }, seed);

        return {
          files: files.reduce((acc, { name, path }) => ({ ...acc, [name]: path }), seed),
          chunkFiles,
        };
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp|pdf|woff|woff2)$/,
        exclude: [/node_modules/, /svgsprite\/.+\.svg$/],
        type: 'asset/resource',
      },
      {
        test: /svgsprite\/[^/]+\.svg$/,
        exclude: /node_modules/,
        use: [{ loader: 'svg-sprite-loader' }, { loader: 'svgo-loader' }],
      },
    ],
  },
};

if (devMode) {
  config = {
    ...config,
    cache: true,
    plugins: [new CleanWebpackPlugin(), ...config.plugins],
    stats: {
      modules: false,
      children: false,
    },
  };
}

module.exports = config;
