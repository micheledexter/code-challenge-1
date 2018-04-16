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
	$('#main-content').append(`<div id="div${clickCount}" class="generated-div"></div>`);
	$('.generated-div:last').append(`<p id="p${clickCount}">${clickCount}</p>`);
	$('.generated-div:last').append(`<button id="btn-swap-${clickCount}" class="swap">Swap</button>`);
	$('.generated-div:last').append(`<button id="btn-delete-${clickCount}" class="delete">Delete</buton>`);
}