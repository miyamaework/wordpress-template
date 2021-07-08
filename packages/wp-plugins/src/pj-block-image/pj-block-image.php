<?php

/**
 * Plugin Name:     pj-block-image
 * Description:     ブロック開発サンプル
 * Version:         0.1.0
 * Author:          pj
 * Text Domain:     pj-block-image
 *
 * @package         pj-block-image
 */

require_once dirname(__FILE__) . '/_dynamic-render.php';

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function pj_block_image_block_init() {
  register_block_type_from_metadata(__DIR__, [
    'render_callback' => 'pj_block_image_dynamic_render',
  ]);
}
add_action('init', 'pj_block_image_block_init');
