/* test/async-await-md5.js */

var promiseMd5 = require('../promise-md5');
var expect = require('chai').expect;

describe('#promiseMd5()', function () {
    context('with string argument', function () {
        it('should compute MD5 hash', async function () {
            // use await to wait until the promise is fulfilled
            var hash = await promiseMd5('Glad Chinda');

            // add some assertions
            expect(hash)
                .to.be.a('string')
                .that.matches(/^[a-f0-9]{32}$/)
                .and.equal('877dbb93f50eb8a89012e15bd37ee7e4');
        })
    })

    context('with non-string argument', function () {
        it('should throw an error', async function () {
            await promiseMd5(12345).catch(function (err) {
                // add an assertion to check the error
                expect(function () { throw err })
                    .to.throw(TypeError, 'Data must be a string or a buffer');
            })
        })
    })
})
