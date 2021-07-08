const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';

const SRC_DIR = path.resolve(__dirname, '../src');
const DIST_DIR = path.resolve(__dirname, '../../../wordpress/volumes/app/wp-content/themes/');

const THEME_OUTPUT_DEVELOPMENT = path.join(DIST_DIR, 'pj-theme-dev');
const THEME_OUTPUT_PRODUCTION = path.join(DIST_DIR, 'pj-theme-prod');

module.exports = {
  browserSync: {
    proxy: 'http://localhost:9001/',
    server: THEME_OUTPUT_DEVELOPMENT,
    watch: true,
    port: 9000,
  },
  webpack: {
    srcDir: SRC_DIR,
    distDir: DIST_DIR,
    publicPath: !devMode ? `/wp-content/themes/pj-theme-prod/` : `/wp-content/themes/pj-theme-dev/`,
    output: !devMode ? THEME_OUTPUT_PRODUCTION : THEME_OUTPUT_DEVELOPMENT,
  },
};
