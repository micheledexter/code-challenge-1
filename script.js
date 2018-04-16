console.log('js');

let clickCount = 0;

$(document).ready(readyNow);

function readyNow() {
	console.log('JQ');
	$('#main-content').append('<button id="generateButton">Generate</button>');
	$('#generateButton').on('click', generateDivTag);
}

function generateDivTag() {
	clickCount++;
	$('#main-content').append('<div class="generated-div"></div>');
	$('.generated-div:last').append(`<p>${clickCount}</p>`);
}