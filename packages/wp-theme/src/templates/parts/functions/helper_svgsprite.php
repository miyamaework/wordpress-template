<?php

function helper_svgsprite($iconName, $className = '') {
  if (!$iconName) {
    return '';
  }
  ob_start();
  ?>
<svg version="1.1" class="u-svgicon <?= $className ?>" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg">
  <use xlink:href="#<?= $iconName ?>"></use>
</svg>
<?php return ob_get_clean();
}
