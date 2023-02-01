let i = 0;
let j = 4;

const dots = document.querySelectorAll('.dot-container button'); 
const images = document.querySelectorAll('.image-container img');

function next(){
    document.getElementById('content' + (i + 1)).classList.remove('active');
    i = (j + i + 1) % j;
    document.getElementById('content' + (i + 1)).classList.add('active');
    indicator(i + 1);
};

function prev(){
    document.getElementById('content' + (i + 1)).classList.remove('active');
    i = (j + i - 1) % j;
    document.getElementById('content' + (i + 1)).classList.add('active');
    indicator(i + 1);

};

function indicator(num){
   dots.forEach(function(dot){
      dot.style.backgroudColor = 'transparent';
   });
   document.querySelector(
      '.dot-container button:nth-child('+ num +')'
   ).style.backgroudColor = 'rgb(95, 34, 145)';
};