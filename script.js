const next = document.querySelector('.box__page-next');
const pages = document.querySelector('.box__pages');
const txtInner = document.querySelector('.text-inner');


let offset = 0;
next.addEventListener('click',()=>{
    offset +=900;
    if (offset>2400) {
        offset = 0;
    }
    pages.style.transform = `translateX(-${offset}px)`;
    txtInner.style.transform = `translateX(-${offset}px)`;
})