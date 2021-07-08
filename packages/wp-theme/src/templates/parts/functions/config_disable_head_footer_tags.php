<?php

/**
 * `wp_head()` で自動的に出力される余分なタグを削除する
 */

// remove generator name
remove_action('wp_head', 'wp_generator');

// EC2でブログを立ち上げた途端に来た、怪しい攻撃たち
// https://qiita.com/KMim/items/60c1ce893c09872acd15
remove_action('wp_head', 'wlwmanifest_link');

// remove rsd_link
remove_action('wp_head', 'rsd_link');

// remove post shortlink
remove_action('wp_head', 'wp_shortlink_wp_head');

// remove rest-api endpoint
remove_action('wp_head', 'rest_output_link_wp_head');

// remove emoji polyfill
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
