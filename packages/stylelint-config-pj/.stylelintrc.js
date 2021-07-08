module.exports = {
  plugins: ['stylelint-scss', 'stylelint-order', 'stylelint-prettier'],
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order', 'stylelint-prettier/recommended'],
  rules: {
    'prettier/prettier': true,
    'no-descending-specificity': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'use',
          'forward',
          'for',
          'function',
          'if',
          'else',
          'each',
          'include',
          'mixin',
          'content',
          'return',
        ],
      },
    ],
    // 🔫 許可しないルール
    'at-rule-disallowed-list': ['extend'],
    // 🔫 シングルクォーテーションのみ許可
    // ⭕ p: 'small' ❌ p: "small"
    'string-quotes': 'single',
    // 🔫 小文字:ユニット
    // ⭕ p: 10px ❌ p: 10PX
    'unit-case': 'lower',
    // 🔫 小文字:プロパティー
    // ⭕ p: foo ❌ P: foo
    'property-case': 'lower',
    // 🔫 小文字:ルール名
    // ⭕ @charset 'UTF-8'; ❌ @Charset 'UTF-8';
    'at-rule-name-case': 'lower',
    // 🈲 mixinの引数がない場合は`()`不要
    // ⭕ @include foo; ❌ @include foo();
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    // 🈲 インラインブロック内での空改行を禁止
    'declaration-empty-line-before': 'never',
    // 🈲 インラインブロック内での空改行を禁止
    'rule-empty-line-before': ['always', { except: ['inside-block'] }],
    // 🈲 ルールの空改行禁止
    'at-rule-empty-line-before': 'never',
    // 🈲 コメントの複数改行禁止
    'comment-empty-line-before': 'never',
    // 🈲 許可するユニットリスト
    'declaration-property-unit-allowed-list': {
      'font-size': ['rem', 'em', 'px', '%', 'vw'],
      '/^padding/': ['rem', 'em', 'px', 'vw'],
      '/^margin/': ['rem', 'em', 'px', 'vw'],
      '/^border/': ['px', '%'],
      '/^animation/': ['s', 'ms'],
      'line-height': ['px'],
    },
    // 🆔 コメントルール
    'comment-word-disallowed-list': ['/(?!^={43}$)(^[*-/:-@/\\/]{2,})/'],
    // 🆔 命名:ID
    // ⭕ #js_foo ❌ #foo, #jsFoo
    'selector-id-pattern': '^js_[A-Z]([a-z]|[A-Z0-9])*$',
    // 🆔 命名:クラス
    // ⭕ .foo, .fooBar, .foo__bar, .foo-bar .Foo
    'selector-class-pattern':
      '(^[a-z]{1,3}-?([a-zA-Z0-9]+)?(_[a-z]([a-zA-Z0-9]+?)+)?(--[a-z0-9]([a-zA-Z0-9]+?)+){0,1})$|^[a-z]([a-z]|[A-Z0-9])*$',
    // 🆔 命名:カスタムプロパティ
    // ⭕ --cp-foo ❌ --foo
    'custom-property-pattern': '^(cpa-|local-)(?!.*_).+$',
    // 🆔 スネークケースを拒否
    'keyframes-name-pattern': '^[a-z][a-zA-Z0-9-]+$',
    // 🆔 スネークケースを拒否
    'scss/at-function-pattern': '^[a-z][a-zA-Z0-9-]+$',
    // 🆔 スネークケースを拒否
    'scss/at-mixin-pattern': '^[a-z][a-zA-Z0-9-]+$',
    // 🆔 スネークケースを拒否
    'scss/dollar-variable-pattern': '^[a-z-][a-zA-Z0-9-]+$',
    // 🈲 ベンダープレフィックス禁止
    'value-no-vendor-prefix': true,
    // 🈲 `!important`の使用禁止
    'declaration-no-important': true,
    // 🈲 ネストの深さは2つまで
    'max-nesting-depth': [2, { ignore: ['pseudo-classes'], ignoreAtRules: ['supports'] }],
    // 🈲 同じセレクター再指定禁止
    'no-duplicate-selectors': true,
    // 🈲 %桁
    'number-max-precision': 3,
    // 🈲 変数宣言をブロック(ルートまたはルール)の最初に配置する必要があります。
    'scss/dollar-variable-first-in-block': [true, { ignore: ['comments', 'imports'], except: ['root'] }],
    // 🈲 コメントルール - Disallow /*-comments.
    'scss/comment-no-loud': true,
    // 🈲 コメントルール - 空コメント
    'scss/comment-no-empty': true,
    // 🈲 冗長なネストセレクターを禁止します
    'scss/selector-no-redundant-nesting-selector': true,
    // 🈲 親セレクター（&）で共用体クラス名を禁止します。
    'scss/selector-no-union-class-name': true,
    // 🈲 https://sass-lang.com/documentation/modules/color#scale-color
    'scss/function-color-relative': true,
  },
};
