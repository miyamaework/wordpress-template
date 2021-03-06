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
    // ð« è¨±å¯ããªãã«ã¼ã«
    'at-rule-disallowed-list': ['extend'],
    // ð« ã·ã³ã°ã«ã¯ã©ã¼ãã¼ã·ã§ã³ã®ã¿è¨±å¯
    // â­ p: 'small' â p: "small"
    'string-quotes': 'single',
    // ð« å°æå­:ã¦ããã
    // â­ p: 10px â p: 10PX
    'unit-case': 'lower',
    // ð« å°æå­:ãã­ããã£ã¼
    // â­ p: foo â P: foo
    'property-case': 'lower',
    // ð« å°æå­:ã«ã¼ã«å
    // â­ @charset 'UTF-8'; â @Charset 'UTF-8';
    'at-rule-name-case': 'lower',
    // ð² mixinã®å¼æ°ããªãå ´åã¯`()`ä¸è¦
    // â­ @include foo; â @include foo();
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    // ð² ã¤ã³ã©ã¤ã³ãã­ãã¯åã§ã®ç©ºæ¹è¡ãç¦æ­¢
    'declaration-empty-line-before': 'never',
    // ð² ã¤ã³ã©ã¤ã³ãã­ãã¯åã§ã®ç©ºæ¹è¡ãç¦æ­¢
    'rule-empty-line-before': ['always', { except: ['inside-block'] }],
    // ð² ã«ã¼ã«ã®ç©ºæ¹è¡ç¦æ­¢
    'at-rule-empty-line-before': 'never',
    // ð² ã³ã¡ã³ãã®è¤æ°æ¹è¡ç¦æ­¢
    'comment-empty-line-before': 'never',
    // ð² è¨±å¯ããã¦ããããªã¹ã
    'declaration-property-unit-allowed-list': {
      'font-size': ['rem', 'em', 'px', '%', 'vw'],
      '/^padding/': ['rem', 'em', 'px', 'vw'],
      '/^margin/': ['rem', 'em', 'px', 'vw'],
      '/^border/': ['px', '%'],
      '/^animation/': ['s', 'ms'],
      'line-height': ['px'],
    },
    // ð ã³ã¡ã³ãã«ã¼ã«
    'comment-word-disallowed-list': ['/(?!^={43}$)(^[*-/:-@/\\/]{2,})/'],
    // ð å½å:ID
    // â­ #js_foo â #foo, #jsFoo
    'selector-id-pattern': '^js_[A-Z]([a-z]|[A-Z0-9])*$',
    // ð å½å:ã¯ã©ã¹
    // â­ .foo, .fooBar, .foo__bar, .foo-bar .Foo
    'selector-class-pattern':
      '(^[a-z]{1,3}-?([a-zA-Z0-9]+)?(_[a-z]([a-zA-Z0-9]+?)+)?(--[a-z0-9]([a-zA-Z0-9]+?)+){0,1})$|^[a-z]([a-z]|[A-Z0-9])*$',
    // ð å½å:ã«ã¹ã¿ã ãã­ããã£
    // â­ --cp-foo â --foo
    'custom-property-pattern': '^(cpa-|local-)(?!.*_).+$',
    // ð ã¹ãã¼ã¯ã±ã¼ã¹ãæå¦
    'keyframes-name-pattern': '^[a-z][a-zA-Z0-9-]+$',
    // ð ã¹ãã¼ã¯ã±ã¼ã¹ãæå¦
    'scss/at-function-pattern': '^[a-z][a-zA-Z0-9-]+$',
    // ð ã¹ãã¼ã¯ã±ã¼ã¹ãæå¦
    'scss/at-mixin-pattern': '^[a-z][a-zA-Z0-9-]+$',
    // ð ã¹ãã¼ã¯ã±ã¼ã¹ãæå¦
    'scss/dollar-variable-pattern': '^[a-z-][a-zA-Z0-9-]+$',
    // ð² ãã³ãã¼ãã¬ãã£ãã¯ã¹ç¦æ­¢
    'value-no-vendor-prefix': true,
    // ð² `!important`ã®ä½¿ç¨ç¦æ­¢
    'declaration-no-important': true,
    // ð² ãã¹ãã®æ·±ãã¯2ã¤ã¾ã§
    'max-nesting-depth': [2, { ignore: ['pseudo-classes'], ignoreAtRules: ['supports'] }],
    // ð² åãã»ã¬ã¯ã¿ã¼åæå®ç¦æ­¢
    'no-duplicate-selectors': true,
    // ð² %æ¡
    'number-max-precision': 3,
    // ð² å¤æ°å®£è¨ããã­ãã¯(ã«ã¼ãã¾ãã¯ã«ã¼ã«)ã®æåã«éç½®ããå¿è¦ãããã¾ãã
    'scss/dollar-variable-first-in-block': [true, { ignore: ['comments', 'imports'], except: ['root'] }],
    // ð² ã³ã¡ã³ãã«ã¼ã« - Disallow /*-comments.
    'scss/comment-no-loud': true,
    // ð² ã³ã¡ã³ãã«ã¼ã« - ç©ºã³ã¡ã³ã
    'scss/comment-no-empty': true,
    // ð² åé·ãªãã¹ãã»ã¬ã¯ã¿ã¼ãç¦æ­¢ãã¾ã
    'scss/selector-no-redundant-nesting-selector': true,
    // ð² è¦ªã»ã¬ã¯ã¿ã¼ï¼&ï¼ã§å±ç¨ä½ã¯ã©ã¹åãç¦æ­¢ãã¾ãã
    'scss/selector-no-union-class-name': true,
    // ð² https://sass-lang.com/documentation/modules/color#scale-color
    'scss/function-color-relative': true,
  },
};
