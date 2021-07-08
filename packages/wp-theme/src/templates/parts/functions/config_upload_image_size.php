<?php

/**
 * テーマ有効時にメディアサイズの初期値を設定する
 */

function pj_upload_image_size() {
  update_option('thumbnail_size_w', 640);
  update_option('thumbnail_size_h', 640);
  update_option('thumbnail_crop', 0);
  update_option('medium_size_w', 1280);
  update_option('medium_size_h', 1280);
  update_option('medium_crop', 0);
  update_option('large_size_w', 1920);
  update_option('large_size_h', 1920);
  update_option('large_crop', 0);
}

add_action('after_setup_theme', 'pj_upload_image_size');
