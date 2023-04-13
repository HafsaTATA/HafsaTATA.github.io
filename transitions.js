let section= document.querySelector('#content section');
let text=document.querySelector(' .innerText ');
window.addEventListener('scroll',function(){
    let value=window.scrollY; 
    console.log(value);
    section.style.clipPath="circle("+value+"px at center center)";
    text.style.left=100-value/5+'%';
})