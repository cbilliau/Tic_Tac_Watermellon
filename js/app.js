"use strict";

var Board = {
	cell1: '1',
	cell2: '',
	cell3: '',
	cell4: '',
	cell5: '',
	cell6: '',
	cell7: '',
	cell8: '',
	cell9: ''
}

var Counter = 0;

var Method = {
	determineIfTaken: function(value)	{
		var square = eval("Board.cell" + value);
		console.log(square);
		if (square !== '') {
			alert("Square Taken");
		}
	},

	determineXO: function() {
		Counter += 1;
		if (Counter % 2 == 0) {
			return 'x';
		} else {
			return 'o';
		}
	},

	assignCellVal: function(squareClicked, xOrO) {
		var 
		Board.cell(squareClicked) = xOrO;
		console.log(Board.cell(squareClicked));
	}
};

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
		Counter = 0;
		View.renderBoard();
	}
}
$(function()	{
	// Board listener
	$('.board').on('click', 'div', function() {
		var squareClicked = event.target.id;
		// Method.determineIfTaken(squareClicked);
		var xOrO = Method.determineXO();
		console.log(squareClicked, xOrO);
		Method.assignCellVal(squareClicked, xOrO)
	});
})
