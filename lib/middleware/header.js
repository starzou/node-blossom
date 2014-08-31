/**
 * description : 请求头,响应头通用处理
 * date : 2014/8/31 16:28
 * author : StarZou
 */

module.exports = (function () {
    return function (req, res, next) {
        res.setHeader('Server', 'Eliteams Server 1.0.0');
        next();
    }
});