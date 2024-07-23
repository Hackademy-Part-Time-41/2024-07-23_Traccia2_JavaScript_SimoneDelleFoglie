let paragrafo1= document.getElementById('paragrafo1');
let paragrafo2= document.getElementById('paragrafo2');
let paragrafo3= document.getElementById('paragrafo3');
let bottone1= document.getElementById('bottone1');
let bottone2= document.getElementById('bottone2');
let bottone3= document.getElementById('bottone3');

function generateRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


bottone1.addEventListener('click', function (event) {
    event.preventDefault();
    let r = generateRandomNum(0, 255);
    let g = generateRandomNum(0, 255);
    let b = generateRandomNum(0, 255);
    paragrafo1.style.color= `rgb(${r}, ${g}, ${b})`;
    let r1 = generateRandomNum(0, 255);
    let g1 = generateRandomNum(0, 255);
    let b1 = generateRandomNum(0, 255);
    paragrafo2.style.color= `rgb(${r1}, ${g1}, ${b1})`;
    let r2 = generateRandomNum(0, 255);
    let g2 = generateRandomNum(0, 255);
    let b2 = generateRandomNum(0, 255);
    paragrafo3.style.color= `rgb(${r2}, ${g2}, ${b2})`;
});

bottone2.addEventListener('click', function(event1) {
    event1.preventDefault();
    paragrafo1.style.fontWeight= '800';
    paragrafo2.style.fontWeight= '800';
    paragrafo3.style.fontWeight= '800';
})


bottone3.addEventListener('click', function(event2) {
    event2.preventDefault();
    paragrafo1.style.display= 'none';
    paragrafo2.style.display= 'none';
    paragrafo3.style.display= 'none';
    bottone3.addEventListener('click', function (event3) {
        event3.preventDefault();
        paragrafo1.style.display= 'block'
        paragrafo2.style.display= 'block'
        paragrafo3.style.display= 'block'
    })

})


