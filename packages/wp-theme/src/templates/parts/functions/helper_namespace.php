<?php

function helper_get_namespace() {
  global $template;

  $namespace = basename($template);
  $namespace = str_replace('.php', '', $namespace);

  switch ($$namespace) {
    case 'front-page':
    case 'home':
      return 'home';
    default:
      return $namespace;
  }
}
