window.onload= function()//дожидаемся полной загрузки всех элеиентов html/
{
let canvas= document.querySelector('canvas');//находим елемент по id/
let  ctx = canvas.getContext("2d");//метод рисования 2d/


//левая дуга
ctx.beginPath();
let grd1= ctx.createLinearGradient(80,0,0,160);
grd1.addColorStop(0, '#FFE39C');
grd1.addColorStop(1, '#FFBA9C');
ctx.strokeStyle = grd1;
ctx.lineWidth = 4;
ctx.arc(75,77,68,1.5,(Math.PI/180)*270); 
ctx.stroke();
//правая нижняя дуга
ctx.beginPath();
let grd2= ctx.createLinearGradient(80,0,0,160);
grd2.addColorStop(0, '#6FCF97');
grd2.addColorStop(1, '#66D2EA');
ctx.strokeStyle = grd2;
ctx.lineWidth = 4;
ctx.arc(83,77,68,0.07,(Math.PI/180)*90); 
ctx.stroke();
//правая верхняя дуга
ctx.beginPath();
let grd3= ctx.createLinearGradient(80,0,0,160);
grd3.addColorStop(0, '#BC9CFF');
grd3.addColorStop(1, '#8BA4F9');
ctx.strokeStyle = grd3;
ctx.lineWidth = 4;
ctx.arc(80,79,71,4.7,(Math.PI/180)*360); 
ctx.stroke();
console.log(Math.PI/180*360)
}