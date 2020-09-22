const listA = ['a', 'b', 'c'];
const listB = [1, 2, 3];

function zipList(lista, listb) {
  const zip = [];
  for (let i = 0; i < lista.length; i++) {
    zip.push(lista[i], listb[i]);
  }
  return zip;
}

console.log(zipList(listA, listB));

function zipListTheSimpleWay(lista, listb) {
  return _.flatten(_.zip(lista, listb));
}

console.log(zipListTheSimpleWay(listA, listB));
