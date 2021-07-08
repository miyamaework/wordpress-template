<?php

/**
 * `<body />`タグの最初に何かを追加する
 *
 * @example
 * add_action('pj_body_prepend', function () {
 *   echo ...
 * });
 */
function pj_body_prepend() {
  do_action('pj_body_prepend');
}

/**
 * `<body />`タグの最後に何かを追加する
 *
 * @example
 * add_action('pj_body_append', function () {
 *   echo ...
 * });
 */
function pj_body_append() {
  do_action('pj_body_append');
}

/**
 * `<head />`タグに何かを追加する
 *
 * @example
 * add_action('pj_head', function () {
 *   echo ...
 * });
 */
function pj_head() {
  do_action('pj_head');
}
