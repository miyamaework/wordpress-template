<?php

/**
 * ブロックのサーバーサイドレンダー関数
 *
 * @param {String} $attr['mediaId'] - (default: 0) 画像ID
 * @param {String} $attr['preview'] - (default: false) プレビューモードであるか
 */

function pj_block_image_dynamic_render($attr) {
  $attachment_id = $attr['mediaId'];
  $is_preview = $attr['preview'];

  if ($is_preview):
    $preview_image = plugin_dir_url(__FILE__) . '/preview.jpg';
    return '<img
      className="js-cpaBlockImage"
      src="' .
      $preview_image .
      '"
      width="768"
      height="490"
      alt=""
    />';
  endif;

  if (!isset($attachment_id) || $attachment_id == 0):
    return '<span>Not Found</span>';
  endif;

  ob_start();

  $image = wp_get_attachment_image_src($attachment_id, 'full', false);

  if (isset($image)):

    $alt_text = get_post_meta($attachment_id, '_wp_attachment_image_alt', true);
    $metadata = wp_get_attachment_metadata($attachment_id);
    ?>
    <?= $image[0] ?>
    <?php
  endif;

  $output = ob_get_contents();
  ob_end_clean();

  return $output;
}
