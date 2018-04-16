console.log('js');

let clickCount = 0;

$(document).ready(readyNow);

function readyNow() {
	console.log('JQ');
	$('#main-content').append('<button id="generateButton">Generate</button>');
	$('#generateButton').on('click', generateDivTag);
	$('#main-content').on('click', '.swap', function() {
		let parent = $(this).parent();
		if ($(this).data('color') == 'red') {
			$(this).data('color', 'yellow');
			parent.css('background-color', 'yellow');
		} else {
			$(this).data('color', 'red');
			parent.css('background-color', 'red');
		}
	});
	$('#main-content').on('click', '.delete', function() {
		$(this).parent().remove();
	});
}

function generateDivTag() {
	clickCount++;
	$('#main-content').append(`<div id="div${clickCount}" class="generated-div"></div>`);
	$('.generated-div:last').append(`<p id="p${clickCount}" class="generated-p">${clickCount}</p>`);
	$('.generated-div:last').append(`<button id="btn-swap-${clickCount}" class="swap">Swap</button>`);
	$('.generated-div:last').append(`<button id="btn-delete-${clickCount}" class="delete">Delete</buton>`);
	$(`#btn-swap-${clickCount}`).data('color', 'red');
}