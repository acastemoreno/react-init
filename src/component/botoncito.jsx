"use strict";

var Botoncito = React.createClass({
    render: function(){
        return (
            <input type="submit" onClick={this.props.action}/>
        );
    }
});

module.exports = Botoncito;
