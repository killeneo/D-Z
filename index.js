const pageX = document.querySelector(".pageX")
const pageY = document.querySelector(".pageY")
const clientX = document.querySelector(".clientX")
const clientY = document.querySelector(".clientY")
const block1 = document.querySelector(".block1")
const block2 = document.querySelector(".block2")
const block3 = document.querySelector(".block3")
const block4 = document.querySelector(".block4")
const cursor = document.querySelector(".cursor")

const mouseHandler = (event) => {
    pageX.innerHTML = `<b>pageX: <b> ${event.pageX} \n`
    pageY.innerHTML = `<b>pageY: <b> ${event.pageY} \n`
    clientX.innerHTML = `<b>clientX: <b> ${event.clientX} \n`
    clientY.innerHTML = `<b>clientY: <b> ${event.clientY} \n`
    block1.style.bottom = event.pageY+ 'px' 
    block2.style.top = event.pageY + 'px'
    block3.style.right = event.pageX + 'px' 
    block4.style.left = event.pageX + 'px'
}
const mouseCursor = (event) => {
    cursor.style.top = event.pageY + 'px'
    cursor.style.left = event.pageX + 'px'
}

window.addEventListener("mousemove", mouseCursor)
window.addEventListener("mousemove",mouseHandler)