// Design history section

const cursor = document.querySelector('.cursor');
const designHistory = document.querySelector('.design-history');

designHistory.addEventListener('mousemove', e=> {
console.log(e);
cursor.setAttribute('style', 'top: '+(e.pageY - 30.5)+"px; left: "+(e.pageX - 29)+"px;")
})

// https://www.youtube.com/watch?v=rfpRZ2t_BrQ
// 10:14


// skateboard dog section

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

const clickDog = document.querySelector('.body');
const completeDog = document.querySelector('.dog');

clickDog.addEventListener('click', skate);
clickDog.addEventListener('animationend', skate);

function skate(){
  completeDog.classList.toggle('skating');
}
