"use strict";

var Board = [];

var Counter = 0;

var Method = {

	determineIfTaken: function(value)	{
		var square = Board[value];
		if (square !== undefined) {
			alert('Choose another square');
			return false;
		} else {
			return true;
		}
	},

	determineXO: function() {
		Counter += 1;
		if (Counter % 2 == 0) {
			return 'o';
		} else {
			return 'x';
		}
	},

	assignCellVal: function(value, xOrO) {
		Board[value] = xOrO;
	},

	clearCellValue: function() {
		var i;
		for (i = 0; i <= 9; i++ ) {
			Board[i] = undefined;
		}
	}
};

var View = {
	renderBoard: function() {
	$('.board').empty();
	$('.board').html(
		"<div id='0' class="+Board[0]+"></div>"+
		"<div id='1' class="+Board[1]+"></div>"+
		"<div id='2' class="+Board[2]+"></div>"+
		"<div id='3' class="+Board[3]+"></div>"+
		"<div id='4' class="+Board[4]+"></div>"+
		"<div id='5' class="+Board[5]+"></div>"+
		"<div id='6' class="+Board[6]+"></div>"+
		"<div id='7' class="+Board[7]+"></div>"+
		"<div id='8' class="+Board[8]+"></div>"
		);
	},

	clearBoard: function() {
		Method.clearCellValue();
		Counter = 0;
		View.renderBoard();
	}
}

$(function()	{
	// Board listener
	$('.board').on('click', 'div', function() {
		var squareClicked = event.target.id;
		var openSquare = Method.determineIfTaken(squareClicked);
		if ( openSquare == true ) {
			var xOrO = Method.determineXO();
			Method.assignCellVal(squareClicked, xOrO);
			View.renderBoard();
		}
	});

	// Reset board
	$('button').on('click', function() {
		View.clearBoard();
	});
})
