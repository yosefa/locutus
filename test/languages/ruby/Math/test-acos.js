// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var acos = require('../../../../src/ruby/Math/acos.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/ruby/Math/acos.js (tested in test/languages/ruby/Math/test-acos.js)', function () {
  it('should pass example 1', function (done) {
    var expected = "1.266103672779499"
    var result = (acos(0.3) + '').substr(0, 17)
    expect(result).to.deep.equal(expected)
    done()
  })
})
