const sections = document.querySelectorAll('section');
const bubbleEfect = document.querySelector('.bubble-effect');
const gradients = [
    'linear-gradient(to bottom, #e8b2b9, #0ABFBC)',
    'linear-gradient(to bottom, #0ABFBC, #49498e)',
    'linear-gradient(to bottom, #49498e, #8e44ad)'
];

// Intersection observer
const options = {
	// threshold 1 means 100% and it's the limit before execute a function or whatever
	threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

// navCheck is the function that will execute
function navCheck(entries) {
	// entry is the single section
	entries.forEach(entry => {
		// console.log(entry);
		// className of sections [home, gallery. projects]
		const className = entry.target.className;
		const activeAnchor = document.querySelector(`[data-page=${className}]`);
		const gradientIndex = entry.target.getAttribute('data-index');
		// getBoundingClientRect devuelve el tamaño de un elemento y su posición respecto a la ventana de visualización
		const coordinates = activeAnchor.getBoundingClientRect();
		const directions = {
			height: coordinates.height,
			width: coordinates.width,
			top: coordinates.top,
			left: coordinates.left
		};
		if(entry.isIntersecting) {
			bubbleEfect.style.setProperty('left', `${directions.left}px`);
			bubbleEfect.style.setProperty('top', `${directions.top}px`);
			bubbleEfect.style.setProperty('width', `${directions.width}px`);
			bubbleEfect.style.setProperty('height', `${directions.height}px`);
			bubbleEfect.style.background = gradients[gradientIndex];
		}
	});
}

// con este forEach estamos observando cada section de nuestra página
sections.forEach(section => {
	observer.observe(section);
});