/**
 * description : 模块加载器
 * date : 2014/8/31 14:48
 * author : StarZou
 */
var path = require('path');
var generatePath = function (dir) {
    return (__dirname + path.sep + dir + path.sep );
};

module.exports = {
    version: '1.0.0',
    name: 'blossom-loader',
    loadDate: new Date().getTime(),
    path: __dirname,

    // 默认配置
    config: {
        routePath: generatePath('routes'),
        middlewarePath: generatePath('middleware'),
        modulesPath: generatePath('modules')

    },

    // 设置模块路径, 示例:loader.setConfig({routePath : 'routes'});
    setConfig: function (config) {
        for (var p in config) {
            if (config.hasOwnProperty(p)) {
                config[p] = generatePath(config[p]);
            }
        }
        if (config) {
            this.config = config;
        }
    },

    // 加载route中间件
    loadRoute: function (routeName) {
        return require(this.config.routePath + routeName);
    },

    // 加载中间件
    loadMiddleware: function (middlewareName) {
        return require(this.config.middlewarePath + middlewareName);
    },

    // 加载模块
    loadModule: function (moduleName) {
        return require(this.config.modulesPath + moduleName);
    }
};
