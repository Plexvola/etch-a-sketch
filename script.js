const grid = document.querySelector('#grid');

const slider = document.querySelector('#slider');

function pad(number, length) {
	let str = '' + number;
	while (str.length < length) {
		str = '0' + str;
	}
	return str;
}

function removeNodes(grid) {
	let nodes = document.querySelectorAll('#grid div');

	for(let i=0; i<nodes.length; i++){
		grid.removeChild(nodes[i]);
	}
}

function createGrid(grid, value) {
	let nodeside = 960 / value;

	for(let i=0; i<value; i++){
		for(let j=0; j<value; j++){
			let div = document.createElement('div');
			div.classList.add('cell')
			div.style.width = nodeside + 'px';
			div.style.height = nodeside + 'px';
			// div.textContent = i + ';' + j;
			grid.appendChild(div);
		}
	}
}

function addHoverListener() {
	let cells = document.querySelectorAll('.cell');

	for(let i=0; i<cells.length; i++) {
		cells[i].addEventListener('mouseenter', (e) => {
			console.log(e.target.style);
			e.target.style.backgroundColor = 'blue';
			console.log(e.target.style);
		});
	}
}

createGrid(grid, slider.value);
addHoverListener();

slider.addEventListener('input', () => {
	removeNodes(grid);
	createGrid(grid, slider.value);
	console.log(slider.value);
	addHoverListener();
});
