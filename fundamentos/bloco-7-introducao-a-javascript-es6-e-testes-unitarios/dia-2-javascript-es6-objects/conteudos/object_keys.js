// Tente criar uma função que exiba as habilidades do objeto 
// student . Cada habilidade deve ser exibida no formato "Nome da 
// habilidade, Nível: valor da chave referente à habilidade"

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const specs = (obj) => {
  let ke = Object.keys(obj)
  for (i = 0; i < ke.length; i++){
    console.log(`${ke[i]} nivel: ${obj[ke[i]]}`)
  }
} 

specs(student1)