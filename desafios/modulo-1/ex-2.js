function pares(x, y) {
  var pares = [];
  for (var i = x; i <= y; i++) {
    if (i % 2 === 0) {
      pares.push(i);
    }
  }
  console.log(pares.join());
}

pares(32, 321);