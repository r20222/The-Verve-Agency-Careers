// Design history section voor desktop

const cursor = document.querySelector('.cursor');
const designHistory = document.querySelector('.design-history');

designHistory.addEventListener('mousemove', e=> {
cursor.setAttribute('style', 'top: '+(e.pageY - 48.5)+"px; left: "+(e.pageX - 50)+"px;")
})

// I could make this cool flashlight with the help of this video: https://www.youtube.com/watch?v=rfpRZ2t_BrQ


// design history voor mobile first

designHistory.addEventListener('click', gradient);

function gradient(){
  designHistory.classList.toggle('cool-gradient');
}


// design history cursor click on/of

designHistory.addEventListener('click', yellowLight);

function yellowLight(){
    cursor.classList.toggle('light');
}

// skateboard dog eye section
// I could make these eyes following the cursor thanks to this codepen: https://codepen.io/natan-sitanggang/pen/YzpZXKR?editors=1010

document.querySelector('body').addEventListener('mousemove', eyeball);


function eyeball(){
  var eye = document.querySelector('.eye');
  
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = (radian * (180 / Math.PI) * -1) - 270;
    eye.style.transform = "rotate("+ rot +"deg)";
}

// skateboard dog animation

const clickDog = document.querySelector('.body')
const completeDog = document.querySelector('.dog')
const ear = document.querySelector('.ear')

clickDog.addEventListener('click', skate)
clickDog.addEventListener('animationend', skate)
clickDog.addEventListener('transitionend', skate)
ear.addEventListener('animationend', skate)
ear.addEventListener('transitionend', skate)

function skate() {
  completeDog.classList.toggle('skating')
  ear.classList.toggle('ear-animation')
}



// join us now!!! letter party

const allLetters = document.querySelectorAll('.letter-party h3');

allLetters.forEach(function(letter) {
  letter.addEventListener('click', ()=> {
    letter.classList.toggle('move-letter');
  });
});

allLetters.forEach(function(letter) {
  letter.addEventListener('animationend', again)
});

function again(letter){
  letter.classList.toggle('move-letter');
}


// application skateboard

const appBoard = document.querySelector('.join-us-first')
const appBoard2 = document.querySelector('.join-us-second')
const appBoard3 = document.querySelector('.join-us-third')
const appBoard4 = document.querySelector('.join-us-fourth')

const board = document.querySelector('.board')

appBoard.addEventListener('click', roll)
appBoard.addEventListener('animationend', roll)

appBoard2.addEventListener('click', roll2)
appBoard2.addEventListener('animationend', roll2)

appBoard3.addEventListener('click', roll3)
appBoard3.addEventListener('animationend', roll3)

appBoard4.addEventListener('click', roll4)
appBoard4.addEventListener('animationend', roll4)

function roll(){
  appBoard.classList.toggle('roll-board');
}

function roll2(){
  appBoard2.classList.toggle('roll-board');
}

function roll3(){
  appBoard3.classList.toggle('roll-board');
}

function roll4(){
  appBoard4.classList.toggle('roll-board');
}


// waarom werkt deze forEach niet??
// const app = document.querySelectorAll('.app');

// app.forEach((application) => {
//   application.addEventListener('click', roll);
// });

// function roll() {
//   app.classList.toggle('roll-board');
// }



// Scroll animation
// bron: https://www.youtube.com/watch?v=T33NN_pPeNI

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    } 
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));