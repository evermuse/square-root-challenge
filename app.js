function squareRootSum( n ) {

  var numArray = [];

  for (var i = 1; i <= n; i++) {

    numArray.push(i);

  }

  return numArray.reduce(function(previous, current, index, array) {

    previous = parseFloat(previous) + Math.sqrt( parseFloat(current) );

    previous = parseFloat(previous).toFixed(2);

    return parseFloat(previous);

  }, 0 );

}

squareRootSum( 5 );