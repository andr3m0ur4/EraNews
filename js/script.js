let slide_item = 0

window.onload = () => {
    setInterval(passarSlide, 2000)

    let slide_width = document.getElementById('slideshow').offsetWidth
    let objs = document.getElementsByClassName('slide')

    for (let i = 0; i < objs.length; i++) {
        objs[i].style.width = slide_width + 'px'
    }
}

function passarSlide() {
    let slide_width = document.getElementById('slideshow').offsetWidth

    if (slide_item >= 3) {
        slide_item = 0
    } else {
        slide_item++
    }

    document.getElementsByClassName('slideshow-area')[0].style.marginLeft = '-' + (slide_item * slide_width)
}

function mudarSlide(pos) {
    slide_item = pos
    let slide_width = document.getElementById('slideshow').offsetWidth
    document.getElementsByClassName('slideshow-area')[0].style.marginLeft = '-' + (slide_item * slide_width)
}

function toggleMenu() {
    let menu = document.getElementById('menu')

    if (menu.style.display == 'none' || menu.style.display == '') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}