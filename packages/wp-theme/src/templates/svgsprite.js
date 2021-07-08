'use strict';

/**
 * 現状のejsコンパイル環境ではejsのinclude()関数が存在しないためjsでmixinを作成する
 *
 * @param {string} name svgアイコン名
 * @param {string} className 追加するクラス名
 * @param {boolean} override デフォルトのクラス名を削除する
 * @param {string} type - 'default' | 'full'
 * @return {string} svg sprite use html
 *
 * @example
 * # webpackのエイリアスを設定している場合
 * <%- require('svgsprite')({ name: 'iconArrowDown' }) %>
 *
 * # 直接参照する場合
 * <%- require('src/templates/svgsprite.js')({ name: 'iconMail' }) %>
 * <%- require('src/templates/svgsprite.js')({ name: 'iconTwitter', type: 'full' }) %>
 */

module.exports = ({ name = '', className = '', override = false, type = 'default' }) => {
  if (!name) {
    return '';
  }

  const defaultClass = !override ? 'p-svgicon' : '';

  return `<svg version="1.1" class="${defaultClass} ${className}" aria-hidden="true" role="img" data-type="${type}" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#${name}"></use></svg>`;
};
