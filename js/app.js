"use strict";

var Board = {
	cell1: '',
	cell2: '',
	cell3: '',
	cell4: '',
	cell5: '',
	cell6: '',
	cell7: '',
	cell8: '',
	cell9: ''
}

var Method = {
	// Assign cell# a value if x or o based on click
}

var View = {
	renderBoard: function() {
	$('.board').empty();
	$('.board').html(
		"<div id='1' class="+Board.cell1+"></div>"+
		"<div id='2' class="+Board.cell2+"></div>"+
		"<div id='3' class="+Board.cell3+"></div>"+
		"<div id='4' class="+Board.cell4+"></div>"+
		"<div id='5' class="+Board.cell5+"></div>"+
		"<div id='6' class="+Board.cell5+"></div>"+
		"<div id='7' class="+Board.cell5+"></div>"+
		"<div id='8' class="+Board.cell5+"></div>"+
		"<div id='9' class="+Board.cell5+"></div>"
		);
	},
	clearBoard: function() {
		// loop through Board and clear all cells(1-9)
		View.renderBoard();
	}
}
$(function()	{
	$('.board').on('click', 'div', function() {
		console.log(event.target);
	});
})
