var expect = chai.expect;
var should = chai.should();

describe('squareRootSum', function() {

  it('should be a function', function() {

    squareRootSum.should.be.a('function');

  });

  it('should return the sum of the square root of every number from 1 to the number that was passed in', function() {

    squareRootSum.should.equal(8.38);

    squareRootSum(5);

  });

});
