/**
 * Created by StarZou on 2014/8/31.
 * 文件加载器
 */

var loader = {
    version: '1.0.0',
    name: 'blossom-loader',
    config: {
        routePath: './lib/routes/'
    },
    setConfig: function (config) {
        this.config = config;
    },
    loadRoute: function (routeName) {
        return require(this.config.routePath + routeName);
    }
};

module.exports = loader;