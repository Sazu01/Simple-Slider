const images_wrapper = document.querySelector(".img-wrapper")
const images = document.getElementsByClassName("Images")
const btns = document.getElementById("nav")
const next_btn = document.querySelector(".next")
const previous_btn = document.querySelector(".previous")

let counter = 0
let position = 0

btns.addEventListener("click", (e)=>{
    if (e.target === next_btn){
        if (counter < images.length-1){
            counter++
            position--
            images_wrapper.style.transform = `translateX(${position}00%)`
        }
    }else if (e.target === previous_btn){
        if (position < 0){     
            counter--
            position++
            images_wrapper.style.transform = `translateX(${position}00%)`
        }
    }
})