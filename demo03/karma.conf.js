'use strict';

module.exports = function(config) {
  config.set({
    // 使用的测试框架
    frameworks: ['mocha', 'chai'],
    // 测试页面需要加载的资源
    files: [
      'add.js',
      'add.test.js',
    ],
    // 配置预处理器，在上面files载入对应的文件前，如果在这里配置了预处理器，会先对文件做处理，然后载入处理结果。
    preprocessors: {
      'add.js': ['coverage'],
    },
    // 安装的插件列表
    plugins: ['karma-mocha', 'karma-chai', 'karma-phantomjs-launcher', 'karma-coverage', 'karma-spec-reporter'],
    // 需要测试的浏览器
    browsers: ['PhantomJS'],
    // 需要生成哪些代码报告
    reporters: ['spec', 'coverage'],
    // 覆盖率报告要如何生成
    coverageReporter: {
      dir: 'coverage',
      reporters: [{
        type: 'json',
        subdir: '.',
        file: 'coverage.json',
      }, {
        type: 'lcov',
        subdir: '.'
      }, {
        type: 'text-summary'
      }]
    }
  });
};
