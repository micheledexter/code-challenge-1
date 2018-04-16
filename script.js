console.log('js');

$(document).ready(readyNow);

function readyNow() {
	console.log('JQ');
	$('#main-content').append('<button id="generateButton">Generate</button>');
	$('#generateButton').on('click', generateDivTag);
}

function generateDivTag() {
	
}