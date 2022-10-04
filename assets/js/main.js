// Show and Hide Navigation Menu

window.addEventListener('DOMContentLoaded', event => {

	// Enhance modal/carousel functionality

	// https://stackoverflow.com/questions/67755844/modal-carousel-bootstrap-5-not-showing-right-image
	// https://www.codeply.com/p/nBRkzTzOCH

	const showClickedCarouselImage = () => {

		const myCarousel = document.querySelector('#carouselGalleryIndicators')
		const myModalEl = document.getElementById('galleryModal')

		if (myModalEl) {
			myModalEl.addEventListener('show.bs.modal', (event) => {
				const trigger = event.relatedTarget
				const bsCarousel = bootstrap.Carousel.getInstance(myCarousel)
				bsCarousel.to(trigger.dataset.bsSlideTo)
			})
		}
	}
	
	showClickedCarouselImage()


	
	// https://css-tricks.com/working-with-javascript-media-queries/
	
	const toggleNav = () => {

		const navToggle = document.querySelector('.nav-toggle')
		const navIcon = document.querySelector('.nav-icon')
		const hiddenNav = document.querySelector('.hidden-nav')		

		let visible = true

		// https://stackoverflow.com/questions/64800391/how-to-make-navigation-menu-disappear-when-clicking-anywhere-on-the-screen-with

		navToggle.addEventListener('click', function(e) {		
			
			//stop propagation of document click
			e.stopPropagation()
			
			if (visible) {
				navIcon.innerHTML = '<i class="fa-solid fa-x fa-xl"></i>'
				hiddenNav.style.transform = 'translateX(0%)'
				visible = true
			} else {
				navIcon.innerHTML = '<i class="fa-solid fa-bars fa-xl"></i>'
				hiddenNav.style.transform = 'translateX(200%)'
				visible = false
			}		

		})

	}

	toggleNav()


	// Hide menu when document / nav link is clicked
	
	const hideNavAfterSelection = () => {

		const hiddenNav = document.querySelector('.hidden-nav')
		const navIcon = document.querySelector('.nav-icon')

		document.onclick = function() {
			navIcon.innerHTML = '<i class="fa-solid fa-bars fa-xl"></i>'
				hiddenNav.style.transform = 'translateX(200%)'
		}

	}

	hideNavAfterSelection()

	

	const removeClass = () => {

		const mediaQuery = window.matchMedia('(max-width: 780px)')
		const logo = document.querySelector('.logo')

		if (mediaQuery.matches) {
			logo.classList.remove('mb-3')
		}

	}

	removeClass()

	
})
