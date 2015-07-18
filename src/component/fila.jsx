"use strict";

var Celda = require("./celda.jsx");

var Fila = React.createClass({
	render: function(){
		var celdas = [];
		var i = 0;
		while (i<9)
			celdas.push(<Celda fil={this.props.fila} col={i} send={this.props.send} get={this.props.get}/>);
		return(
		<div>
			{celdas}
		</div>
		);
	}
});

module.exports = Fila;
