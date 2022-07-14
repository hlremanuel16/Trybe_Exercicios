const fs = require("fs").promises;

function readChar() {
  fs.readFile("./simpsons.json", 'utf-8')
    .then((fileContent) => {
      const simpsons = JSON.parse(fileContent)
      const strings = simpsons.map(({ id, name }) => `${id} - ${name}`)
      return strings.forEach((string) => console.log(string));
      })
    .catch((err) => console.log(`erro ${err.message}`))
  }

  //forma com async:
  
  // async function readAllComAsyncAwait() {
  //   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  //   const simpsons = JSON.parse(fileContent);
  //   const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  
  //   strings.forEach((string) => console.log(string));
  // }
  
  // // function main() {
  //   readAllComAsyncAwait();
  // }

async function findChar(charId) {
  const charList = await fs.readFile("simpsons.json", "utf-8")
    const list = JSON.parse(charList);
    const searchChar = list.find((char) => Number(char.id) === charId);
    if (!searchChar) {
      throw new Error("personagem com esse id não encontrado")
    };
    const formated = (`${searchChar.id} - ${searchChar.name}`) 
    return formated
};




function main() {
 readChar()
 findChar(1)
  .then((simpson) => console.log(simpson))
}

module.exports = {main};


