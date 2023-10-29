
const fild = document.getElementById('one')
const image = document.getElementById('nlo')

fild.addEventListener('click',function(event){
    const fildRect = fild.getBoundingClientRect();
    let x = event.clientX - fildRect.left - image.clientWidth / 2;
    let y = event.clientY - fildRect.top - image.clientHeight / 2;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if(x + image.clientWidth > fild.clientWidth) x =    fild.clientWidth - image.clientWidth;
    if(y + image.clientHeight > fild.clientHeight) y = fild.clientHeight - image.clientHeight;
    
    image.style.transform = `translate(${x}px, ${y}px)`
    console.log(x)
    console.log(y)
})