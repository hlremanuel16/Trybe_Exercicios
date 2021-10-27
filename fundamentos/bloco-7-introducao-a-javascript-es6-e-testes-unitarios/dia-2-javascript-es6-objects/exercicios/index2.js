const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
//1 
// const addNightShift = (lesson) => {
//   const en = Object.entries(lesson);
//   en.push(['turno', 'noite'])
//   return en
// }
const addNewKey = (obj, key, value) => {
  obj[key] = value;
};

addNewKey(lesson2, 'turno', 'noite');

// 2
const listkeys = (obj) => {
  const ke = Object.keys(obj);
  for(i in ke) {
    console.log(ke[i]);
  }
}

listkeys(lesson2)

//3

const objSize = (obj) => {
  console.log(Object.keys(obj).length);
}

objSize(lesson2)

//4

const listValues = (obj) => {
  const va = Object.values(obj);
  for(i in va) {
    console.log(va[i]);
  }
}

listValues(lesson3)

//5

const allLessons = Object.assign({},  {lesson1, lesson2, lesson3} );

console.log(allLessons)

//6 

const studentTotal = (obj) => {
  let total = 0;
  const va = Object.values(obj);
  for (i in va) {
     total += va[i].numeroEstudantes;
  }
  return total;
}

console.log(studentTotal(allLessons));

//7

const getvalueByIndex = (obj, index) => {
  const va = Object.values(obj)
  console.log(va[index])
}

getvalueByIndex(lesson1, 0)

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));
