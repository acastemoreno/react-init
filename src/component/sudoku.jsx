"use strict";

var Fila = require("./fila.jsx");

var Sudoku = React.createClass({
	dataHandler: function(x,y,val){
		this.setState({("" + x) + y: val});
	},
	getData: function(x,y){
		return this.state[(""+x)+y];
	},
        render: function(){
		var filas [];
		var i=0;
		while (i<9)
			filas.push(<Fila fila={i} send={this.dataHandler} get={this.getData}/>);	
		return(	<div>
				{filas}
			</div>
		);
        }
});

module.exports = Sudoku;
