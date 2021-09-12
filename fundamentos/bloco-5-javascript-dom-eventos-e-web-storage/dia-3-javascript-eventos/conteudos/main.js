const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function techClassAdd(event) {
 const techClass = document.querySelector('.tech');
 event.target.classList.add('tech');
 techClass.classList.remove('tech');
 input.vallue = '';
}

firstLi.addEventListener('click', techClassAdd);
secondLi.addEventListener('click', techClassAdd);
thirdLi.addEventListener('click', techClassAdd);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', function(event){
const techClass = document.querySelector('.tech');
techClass.innerText = event.target.value;
input.vallue = ''
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
myWebpage.addEventListener('dblclick', function() {
window.location.replace('https://github.com/hlremanuel16')
})
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', function(event) {
event.target.style.color = 'red' 
})

myWebpage.addEventListener('mouseleave', function(event) {
event.target.style.color  = ''
})