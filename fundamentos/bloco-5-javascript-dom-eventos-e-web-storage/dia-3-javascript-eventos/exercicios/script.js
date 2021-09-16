
function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

//1
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');

    if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  };
};
createDaysOfTheMonth();

//2
function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
};

createHolidayButton('Feriados');

//3
function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

displayHolidays();

//4
function createFridayButton (ButtonName){
  let getButtonHome = document.querySelector('.buttons-container')
  setFridayButton = document.createElement('button')
  fridayButtonID = 'btn-friday'

  setFridayButton.id = fridayButtonID
  setFridayButton.innerHTML = ButtonName
  getButtonHome.appendChild(setFridayButton)
}

createFridayButton('Mufasa, we\'re here.' )

//5
function changeFridays() {
  let getfridayButton = document.querySelector('#btn-friday');
  let getfridays = document.querySelectorAll('.friday')
  let fridayText = 'its Fridayyy theeeeennnn'

  getfridayButton.addEventListener('click', function() {
    for (let index = 0; index < getfridays.length; index += 1) {
      if (getfridays[index].innerHTML !== fridayText  ) {
        getfridays[index].innerHTML = fridayText;
      } else {
        getfridays[index].innerHTML = getfridaysArray[index] ;
      }
    }
  })
};
let getfridaysArray = [4,11,18,25]
changeFridays()

//6
function zoomMouseIn() {
  let getDays = document.querySelector('#days');

  getDays.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
    
  })
}

function zoomMouseOut() {
  let getDays = document.querySelector('#days');

  getDays.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '';
    event.target.style.fontWeight = '';
  })
}

zoomMouseIn();
zoomMouseOut();

