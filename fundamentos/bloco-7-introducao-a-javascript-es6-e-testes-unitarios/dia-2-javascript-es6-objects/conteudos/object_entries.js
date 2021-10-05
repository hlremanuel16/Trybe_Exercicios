const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(let index in pairKeyValue) {
  // console.log('--------');
  // console.log('País:', );
  // console.log('Capital:', );
  console.log(`${pairKeyValue[index][0]} - ${pairKeyValue[index][1]}`)
};  