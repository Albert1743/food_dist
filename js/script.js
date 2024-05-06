const open_btn = document.querySelectorAll('[data-modal]')
const close_btn = document.querySelectorAll('[data-close]')
const modal = document.querySelector('.modal')

function modalTrigger(arr, action) {
    arr.forEach(btn => {
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
    if (n > slides.length - 1) {
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


// Timer
const deadline = "2024-05-06 17:31"

function getRemainingTime(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date())
    const days = Math.floor((t / 1000) / 60 / 60 / 24)
    const hours = Math.floor((t / 1000) / 60 / 60 % 24)
    const minutes = Math.floor((t / 1000) / 60 % 60)
    const seconds = Math.floor((t / 1000) % 60)

    return {
        t,
        days,
        hours,
        minutes,
        seconds
    }
}

function setTimer(endTime, selector) {
    const t = document.querySelector(selector)
    const days = t.querySelector('#days')
    const hours = t.querySelector('#hours')
    const minutes = t.querySelector('#minutes')
    const seconds = t.querySelector('#seconds')
    const interval = setInterval(updateTimer, 1000)


    function updateTimer() {
        const t = getRemainingTime(endTime)

        if (t.t <= 0) {
            clearInterval(interval);
            days.innerHTML = '00';
            hours.innerHTML = '00';
            minutes.innerHTML = '00';
            seconds.innerHTML = '00';
            return;
        }

        days.innerHTML = setNulls(t.days);
        hours.innerHTML = setNulls(t.hours);
        minutes.innerHTML = setNulls(t.minutes);
        seconds.innerHTML = setNulls(t.seconds);

        function setNulls(num) {
            return num < 10 ? `0${num}` : num;
        }
    }
}

setTimer(deadline, '.timer')


