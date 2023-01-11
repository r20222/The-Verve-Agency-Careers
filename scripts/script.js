const cursor = document.querySelector('.cursor');
const designHistory = document.querySelector('.design-history');

designHistory.addEventListener('mousemove', e=> {
console.log(e);
cursor.setAttribute('style', 'top: '+(e.pageY - 30.5)+"px; left: "+(e.pageX - 29)+"px;")
})

// https://www.youtube.com/watch?v=rfpRZ2t_BrQ
// 10:14