<?php
require_once ABSPATH . 'wp-admin/includes/file.php';

/**
 * webpackで生成したmanifestファイルを取得する
 */
$webpack_manifest = [];
$webpack_manifest_chunkfiles = [];
if (WP_Filesystem()) {
  global $wp_filesystem;
  $webpack_manifest_path = get_template_directory() . '/manifest.json';
  $webpack_manifest_content = $wp_filesystem->get_contents($webpack_manifest_path);
  $webpack_manifest_content = json_decode($webpack_manifest_content);
  $webpack_manifest = (array) $webpack_manifest_content->files;
  $webpack_manifest_chunkfiles = (array) $webpack_manifest_content->chunkFiles;
}

/**
 * webpackで出力したファイルを取得する
 *
 * @param {string} $filename - ex) 'main.js'
 * @return {string|null}
 *
 * @example
 * helper_webpack_get_asset_path('hero.png')
 * -> /wp-content/themes/pj-theme-dev/assets/hero.b0d2fc6246b740924f47.png
 *
 * helper_webpack_get_asset_path('style.css')
 * -> /wp-content/themes/pj-theme-dev/assets/style.e6f3ac9fd8d083e191d7.css
 */
function helper_webpack_get_asset_path($filename = '') {
  global $webpack_manifest;
  if (!array_key_exists($filename, $webpack_manifest)) {
    return null;
  }
  return $webpack_manifest[$filename];
}

/**
 * テーマ開発ディレクトリの静的ファイルを取得する
 *
 * @param {string} $filename - ex) 'favicon.png'
 * @return {string|null}
 *
 * @example
 * helper_webpack_get_static_path('favicon.png')
 * -> /wp-content/themes/pj-theme-dev/favicon.png
 */
function helper_webpack_get_static_path($filename = '') {
  return get_template_directory_uri() . '/' . $filename;
}

/**
 * `<head />`タグ内にスタイルシートタグを出力する
 *
 * @param {string} $filename - ex) 'main.css'
 * @return {void}
 *
 * @example
 * helper_webpack_add_style('main.css')
 * -> <link rel="stylesheet" href="/wp-content/themes/pj-theme-dev/assets/main.fd3dd32adf5d63ee3ace.css">
 */
function helper_webpack_add_style($filename = '') {
  $filepath = helper_webpack_get_asset_path($filename);
  if (!$filepath) {
    return;
  }
  add_action('pj_head', function () use ($filepath) {
    ob_start(); ?><link rel="stylesheet" href="<?= $filepath ?>"><?php echo ob_get_clean();
  });
}

/**
 * `<head />`タグ内にスクリプトタグを出力する
 *
 * @param {string} $filename - ex) 'main.js'
 * @return {void}
 *
 * @example
 * helper_webpack_add_script('main.js')
 * -> <link rel="stylesheet" href="/wp-content/themes/pj-theme-dev/assets/main.fd3dd32adf5d63ee3ace.js">
 */
function helper_webpack_add_script($filename = '') {
  $filepath = helper_webpack_get_asset_path($filename);
  if (!$filepath) {
    return;
  }
  add_action('pj_head', function () use ($filepath) {
    ob_start(); ?><script defer src="<?= $filepath ?>"></script><?php echo ob_get_clean();
  });
}

/**
 * `<head />`タグ内に対象ファイルの`preload`タグを出力する
 *
 * @param {string} $filename - ex) 'favicon.png'
 * @return {void}
 *
 * @example
 * helper_webpack_add_preload('assets/hero.jpg')
 * -> <link rel="preload" href="/wp-content/themes/pj-theme-dev/assets/fd3dd32adf5d63ee3ace.jpg" as="image" type="image/jpeg">
 */
function helper_webpack_add_preload($filename = '') {
  $filepath = helper_webpack_get_asset_path($filename);
  if (!$filepath) {
    return;
  }
  $filetype = __helper_webpack_get_file_type($filepath);
  $mimetype = __helper_webpack_get_mine_type($filepath);
  if (!$filetype || !$mimetype) {
    return;
  }
  add_action('pj_head', function () use ($filepath, $filetype, $mimetype) {
    ob_start(); ?><link rel="preload" href="<?= $filepath ?>" as="<?= $filetype ?>" type="<?= $mimetype ?>"><?php echo ob_get_clean();
  });
}

/**
 * `<head />`タグ内に依存するChunkすべての`preload`タグを出力する
 *
 * @param {string} $chunkName - ex) 'main'
 * @return {void}
 *
 * @example
 * helper_webpack_add_preload_chunks('main');
 * -> <link rel="preload" href="main.css" as="style" type="text/css">
 * -> <link rel="preload" href="main.js" as="script" type="application/javascript">
 */
function helper_webpack_add_preload_chunks($chunkName = '') {
  global $webpack_manifest_chunkfiles;
  if (!array_key_exists($chunkName, $webpack_manifest_chunkfiles)) {
    return null;
  }
  $chunks = $webpack_manifest_chunkfiles[$chunkName];
  add_action('pj_head', function () use ($chunks) {
    ob_start();
    foreach ($chunks as $chunk):
      $filetype = __helper_webpack_get_file_type($chunk);
      $mimetype = __helper_webpack_get_mine_type($chunk);
      if (
        !!$filetype &&
        !!$mimetype
      ): ?><link rel="preload" href="<?= $chunk ?>" as="<?= $filetype ?>" type="<?= $mimetype ?>"><?php endif;
    endforeach;
    echo ob_get_clean();
  });
}

/**
 * @param {string} $file - ex) '/pj-theme-dev/assets/main.js'
 * @return {string|null}
 *
 * @example
 * __helper_webpack_get_file_type(/pj-theme-dev/assets/main.js)
 * -> 'script'
 */
function __helper_webpack_get_file_type($file = '') {
  $ext = wp_check_filetype($file)['ext'];
  switch ($ext) {
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
    case 'webp':
      return 'image';
    case 'woff':
    case 'woff2':
    case 'ttf':
    case 'otf':
      return 'font';
    case 'css':
      return 'style';
    case 'js':
      return 'script';
    case 'json':
      return 'fetch';
    default:
      return null;
  }
}

/**
 * @param {string} $file - ex) '/pj-theme-dev/assets/main.js'
 * @return {string|null}
 *
 * @example
 * __helper_webpack_get_mine_type(/pj-theme-dev/assets/main.js)
 * -> 'application/javascript'
 */
function __helper_webpack_get_mine_type($file = '') {
  $ext = wp_check_filetype($file)['ext'];
  switch ($ext) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    case 'gif':
      return 'image/gif';
    case 'webp':
      return 'image/webp';
    case 'woff':
      return 'font/woff';
    case 'ttf':
      return 'font/ttf';
    case 'otf':
      return 'font/otf';
    case 'css':
      return 'text/css';
    case 'js':
      return 'application/javascript';
    case 'json':
      return 'application/json';
    default:
      return null;
  }
}
