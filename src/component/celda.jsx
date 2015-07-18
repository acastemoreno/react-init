"use strict";

var Celda = React.createClass({
    changeHandler: function(event){
	var valor = parseInt(event.target.value) || undefined;
	if (valor>9 || valor <1)
	    valor = undefined;
	this.props.send(this.props.fil,this.props.col, valor);
    },
    render: function(){
	var props = this.props;
	return(
	    <input type="text" 
                   className="celda"
                   value={props.get(props.fil,props.col)}
                   onChange={this.changeHandler}/>
	);}
});

module.exports = Celda;
