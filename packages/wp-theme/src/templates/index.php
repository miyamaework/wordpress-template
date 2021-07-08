<?php
helper_webpack_add_preload_chunks('main');
helper_webpack_add_style('main.css');
helper_webpack_add_script('main.js');
include 'shared/html_head.php';
?>

<main>
  <h1>PJ Theme</h1>

  <section>
    <h2>webpackアセットファイル取得</h2>
    <img src="<?= helper_webpack_get_asset_path('assets/hero.jpg') ?>" width="100" height="100" />
  </section>

  <section>
    <h2>staticディレクトリのファイル取得</h2>
    <img src="<?= helper_webpack_get_static_path('favicon.png') ?>" width="100" height="100" />
  </section>
</main>

<?php include 'shared/html_end.php';
