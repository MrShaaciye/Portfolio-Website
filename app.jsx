const sections = document.querySelectorAll(`.section`);
const secBtns = document.querySelectorAll(`.controls`);
const secBtn = document.querySelectorAll(`.control`);
const allSections = document.querySelector(`.main-content`);

const PageTransition = () => {
	// Button click active class
	for (let i = 0; i < secBtn.length; i++) {
		secBtn[i].addEventListener(`click`, function () {
			let currentBtn = document.querySelectorAll(`.active-btn`);
			currentBtn[0].className = currentBtn[0].className.replace(`active-btn`, ``);
			this.className += ` active-btn`;
		});
	}

	// Section active class
	allSections.addEventListener(`click`, (e) => {
		const id = e.target.dataset.id;
		if (id) {
			// remove selected from the other buttons
			secBtn.forEach((btn) => {
				btn.classList.remove(`active`);
			});
			e.target.classList.add(`active`);

			// hide all sections
			sections.forEach((section) => {
				section.classList.remove(`active`);
			});

			const element = document.getElementById(id);
			element.classList.add(`active`);
		}
	});

	// toggle theme
	const themeBtn = document.querySelector(`.theme-btn`);
	themeBtn.addEventListener(`click`, () => {
		document.body.classList.toggle(`light-mode`);
	});
};

PageTransition();
