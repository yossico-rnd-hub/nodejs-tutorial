/* md5.js */
/* a simple module that exports an asynchronous md5() function for computing the MD5 hash of a string. */

var crypto = require('crypto');

module.exports = function (string, callback) {
    if (typeof callback != 'function')
        throw new Error('callback is not a function!');

    try {
        var hash = crypto.createHash('md5')
            .update(string)
            .digest('hex');

        callback(null, hash);
    } catch (e) {
        callback(e);
    }
}
