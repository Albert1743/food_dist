const open_btn = document.querySelectorAll('[data-modal]')
const close_btn = document.querySelectorAll('[data-close]')
const modal = document.querySelector('.modal')

function modalTrigger(arr, action) {
    arr.forEach((btn) => {
        btn.onclick = () => {
            modal.classList[action]('show', 'fade')
        }
    })
}

modalTrigger(open_btn, 'add')
modalTrigger(close_btn, 'remove')



// carusel
const slides = document.querySelectorAll('.offer__slide')
const prev_btn = document.querySelector('.offer__slider-prev')
const next_btn = document.querySelector('.offer__slider-next')
const current = document.querySelector('#current')
const total = document.querySelector('#total')

let slideIndex = 0
total.innerHTML = slides.length < 10 ? `0${slides.length}` : slides.length

showSlide()

function showSlide(n) {
    if (n >= slides.length - 1) {
        slideIndex = 0
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(slide => slide.classList.add('hide', 'fade'))
    slides[slideIndex].classList.remove('hide')

    current.innerHTML = slideIndex + 1 < 10 ? `0${slideIndex + 1}` : slideIndex + 1
}

next_btn.onclick = () => {
    slideIndex++
    showSlide(slideIndex)
}

prev_btn.onclick = () => {
    slideIndex--
    showSlide(slideIndex)
}


// Стиль питания
const tab_btns = document.querySelectorAll('.tabheader__item')
const tabcontent = document.querySelectorAll('.tabcontent')

function showTab(idx) {
    tabcontent.forEach(slide => slide.classList.add('hide', 'fade'))
    tabcontent[idx].classList.remove('hide')
}
showTab(0)

tab_btns.forEach((btn, idx) => {
    btn.onclick = () => {
        tab_btns.forEach(e => e.classList.remove('tabheader__item_active'))
        btn.classList.add('tabheader__item_active')
        showTab(idx)
    }
})

