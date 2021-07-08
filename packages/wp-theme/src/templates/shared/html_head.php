<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover">
  <meta name="format-detection" content="telephone=no">

  <link rel="icon" type="image/png" href="<?= helper_webpack_get_static_path('favicon.png') ?>">
  <link rel="apple-touch-icon" href="<?= helper_webpack_get_static_path('icon.png') ?>">
  <meta name="thumbnail" content="<?= helper_webpack_get_static_path('icon.png') ?>">
  <meta name="theme-color" content="#fff">

  <title><?= wp_title('') ?></title>
  <meta name="description" content="" >
  <meta property="og:title" content="<?= wp_title('') ?>">
  <meta property="og:description" content="" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.example.com/" />
  <meta property="og:image" content="<?= helper_webpack_get_static_path('ogp.png') ?>" />
  <meta property="og:site_name" content="website">
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="https://www.example.com/" />

  <?php pj_head(); ?>

  <script>
  (function() {
    var img = new Image();
    img.onload = img.onerror = function() {
      document.documentElement.classList.add((img.width > 0) && (img.height > 0) ? 'js-webp' : 'js-no-webp')
    };
    img.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
  })()
  </script>

  <?php wp_head(); ?>
</head>
<body data-namespace="<%= htmlWebpackPlugin.options.namespace %>">
  <?php pj_body_prepend();
