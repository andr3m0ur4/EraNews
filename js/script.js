let slide_item = 0

window.onload = () => {
    document.getElementsByClassName('bolinha')[0].style.backgroundColor = '#f80000'

    setInterval(passarSlide, 4000)

    let slide_width = document.getElementById('slideshow').offsetWidth
    let objs = document.getElementsByClassName('slide')

    for (let item of objs) {
        item.style.width = slide_width + 'px'
    }

    document.getElementById('toggle-menu').onclick = () => {
        toggleMenu()
    }

    objs = document.getElementsByClassName('bolinha')

    for (let i = 0; i < objs.length; i++) {
        objs[i].onclick = () => {
            mudarSlide(i)
        }
    }
}

function passarSlide() {
    let slide_width = document.getElementById('slideshow').offsetWidth

    if (slide_item >= 8) {
        slide_item = 0
    } else {
        slide_item++
    }

    document.getElementsByClassName('slideshow-area')[0].style.marginLeft = '-' + (slide_width * slide_item) + 'px'
    let objs = document.getElementsByClassName('bolinha')

    for (let item of objs) {
        item.style.backgroundColor = '#ebebeb'
    }

    document.getElementsByClassName('bolinha')[slide_item].style.backgroundColor = '#f80000'
}

function mudarSlide(pos) {
    slide_item = pos
    let slide_width = document.getElementById('slideshow').offsetWidth
    document.getElementsByClassName('slideshow-area')[0].style.marginLeft = '-' + (slide_width * slide_item) + 'px'
    let objs = document.getElementsByClassName('bolinha')

    for (let item of objs) {
        item.style.backgroundColor = '#ebebeb'
    }

    document.getElementsByClassName('bolinha')[pos].style.backgroundColor = '#f80000'
}

function toggleMenu() {
    let menu = document.getElementById('menu')

    if (menu.style.display == 'none' || menu.style.display == '') {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
}