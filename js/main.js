const reviewItems = document.querySelectorAll('.reviews__slider-item')
const sliderLine = document.querySelector('.reviews__slider-line')
const reviewItemWidth = reviewItems[0].offsetWidth

sliderLine.style.transform = `translateX(-${reviewItemWidth}px)`
sliderLine.style.width = `${reviewItemWidth}px`

const sliderBtns = document.querySelectorAll('.slider-btn')

sliderBtns.forEach(btn => {
	btn.addEventListener('click', moveSliderLine)
})

function moveSliderLine(e) {
	const direction = e.target.value

	const currentSlide = document.querySelector('.reviews__slider-item--active')
	const currentSlideData = Number(currentSlide.dataset.review.substr(-1))
	const NextSlide = document.querySelectorAll(`[data-review=review-${currentSlideData + (1 * direction)}]`)[0]

	if (typeof NextSlide === 'undefined') {
		return
	}

	reviewItems.forEach(item => {
		item.classList.remove('reviews__slider-item--active')
	})

	NextSlide.classList.add('reviews__slider-item--active')

	const currentPosition = Number(sliderLine.style.transform.match(/\d/g).join(""));
	sliderLine.style.transform = `translateX(-${currentPosition + (reviewItemWidth * direction)}px)`
}
