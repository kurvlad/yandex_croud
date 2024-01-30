function slider(counter, btnCarousel, cards, card, hasCarusel = false) {
    let l = 0;
    let movePer = 35;
    let maxMove = 203;
    let j = 0;
    let len = cards.length;
    function counterRefresh() {
        counter.textContent = `${j + 1}/${len}`
    }

    counterRefresh();
    //mobile View
    let mobileView = window.matchMedia('(max-width:768px)');
    if (mobileView.matches) {
        movePer = 50.36;
        maxMove = 504;
    }

    let rightMover = () => {
        l = l + movePer;
        j += 1;
        btnCarousel[0].classList.remove('player__btn_carousel-disabled')
        if (cards == 1) {
            i = 0;
            j = 0;
        }
        if (j >= len - 1) {
            j = len - 1;
        }
        for (const i of cards) {
            if (l > maxMove) {
                l = l - movePer;
                btnCarousel[1].classList.add('player__btn_carousel-disabled')
            }
            i.style.left = '-' + l + '%';
        }
        counterRefresh()
    }

    let leftMover = () => {
        btnCarousel[1].classList.remove('player__btn_carousel-disabled')

        l = l - movePer;
        j -= 1;
        if (l <= -1) {
            l = 0;

            btnCarousel[0].classList.add('player__btn_carousel-disabled')
        }
        if (j <= 0) {
            j = 0;
        }
        for (const i of cards) {
            if (card > 1) {
                i.style.left = '-' + l + '%';


            }
        }

        counterRefresh()
    }
    btnCarousel[1].onclick = () => {
        rightMover()
    }
    btnCarousel[0].onclick = () => {
        leftMover()
    }
    if (hasCarusel && !btnCarousel[1].classList.contains('player__btn_carousel-disabled')) {
        setInterval(rightMover, 2000);
    }
}


// slider players

const counter = document.querySelector('.player__counter');
const btnCarousel = document.querySelectorAll('.player__btn_carousel');
const cards = document.querySelectorAll('.player__card');
let card = Math.ceil(cards.length / 4);



slider(counter, btnCarousel, cards, card, false);


