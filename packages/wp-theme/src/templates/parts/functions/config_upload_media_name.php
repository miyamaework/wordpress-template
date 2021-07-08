<?php

/**
 * メディアファイルアップロード時に名前のタイムスタンプ形式にする
 * - http://blog.dododori.com/create/program/upload-rename/
 */

function pj_upload_media_filename($filename) {
  $info = pathinfo($filename);
  $ext = empty($info['extension']) ? '' : '.' . $info['extension'];
  if ($info['filename'] != 'sitemap') {
    $dateTimeNow = date('ymdHis');
    $filename = strtolower($dateTimeNow . $ext);
  }
  return $filename;
}

add_filter('sanitize_file_name', 'pj_upload_media_filename', 10);
