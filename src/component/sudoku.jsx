"use strict";

var Fila = require("./fila.jsx");
var Botoncito = require("./botoncito.jsx");

var Sudoku = React.createClass({
    getInitialState: function(){
        return {};
    },
    submitHandler: function(event){
        if (this.request){
            this.request.abort();
        }
        this.request = new XMLHttpRequest();
        var data = [[],[],[],[],[],[],[],[],[]];
        for(var i=0; i<9; i++)
            for(var j=0; j<9; j++){
                data[i][j] = this.state[("" +i)+j] || "_";
            }
        var s = data.map(function(fila){
            return fila.join();
        }).join("/");
        var self = this;
        this.request.open('GET', "http://162.243.184.27/rest/" + s, true);
        this.request.onload = function() {
            if (this.status >= 200 && this.status < 400){
                var data = JSON.parse(this.response);
                var d = {};
                for(var i=0; i<9; i++)
                    for(var j=0; j<9; j++){
                        d[("" + i) + j] = data[i][j];
                    }
                self.setState(d);
            };
        };
        this.request.send();
    },
    dataHandler: function(x,y,val){
        var k = ("" + x) + y;
        var d = {};
        d[k]= val;
	this.setState(d);
    },
    getData: function(x,y){
	return this.state[(""+x)+y];
    },
    render: function(){
	var filas = [];
	var i=0;
	while (i<9){
	    filas.push(<Fila fila={i} send={this.dataHandler} get={this.getData}/>);
            i++;
        }
	return(
            <div>
                {filas}
                <Botoncito action={this.submitHandler}/>
	    </div>
	);
    }
});

module.exports = Sudoku;
