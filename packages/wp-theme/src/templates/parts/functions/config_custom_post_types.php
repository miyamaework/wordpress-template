<?php

/**
 * カスタム投稿タイプ - メンバー
 */
function my_cpt_register_member() {
  $labels = [
    'name' => 'メンバー - 投稿一覧',
    'singular_name' => 'cpt_member',
    'menu_name' => 'メンバー',
    'name_admin_bar' => 'cpt_member',
  ];
  $args = [
    'labels' => $labels,
    'public' => true,
    'show_ui' => true,
    'rewrite' => ['slug' => 'member'],
    'capability_type' => 'post',
    'has_archive' => false,
    'supports' => ['title'],
    'menu_icon' => 'dashicons-star-filled',
    'hierarchical' => false,
    'show_in_rest' => false,
    'cptp_permalink_structure' => '%post_id%',
  ];
  register_post_type('cpt_member', $args);
}
add_action('init', 'my_cpt_register_member');
