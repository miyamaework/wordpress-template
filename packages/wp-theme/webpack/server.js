/**
 * BrowserSync
 */

const path = require('path');

const bs = require('browser-sync');

const config = require('./config');

if (config.browserSync) {
  const options = {
    port: config.browserSync.port,
    open: false,
    ghostMode: false,
    reloadOnRestart: false,
    reloadDelay: 200,
    reloadDebounce: 200,
    injectChanges: true,
    logFileChanges: false,
    proxy: config.browserSync.proxy,
  };

  bs(options);

  if (config.browserSync.watch) {
    const watchDir = path.join(config.browserSync.server, '/**/*');
    bs.watch(watchDir).on('change', bs.reload);
  }
}
