'use babel';

var React = require('react');
var $ = require('jquery');

var Main = React.createClass({
    getInitialState: function() {
        return {
            searchResults: [ ]
        }
    },
        
    search: function(URL){
        $.ajax({
            type: "GET",
            dataType: 'json',
            url: URL,
            success: function(response){
                this.setState({
                       searchResults: response
                    })
            }.bind(this)
        });
    }, 
    createAjax: function(query){
        var query    = this.refs.query.value;
        var URL      = 'https://api.github.com/users/' + query;
        console.log(URL)
        this.search(URL);
    },  
    
    render: function(){
       if (this.state.searchResults)
        {
             var temp =
                 <div>
                 <p>{this.state.searchResults.id}</p>
               <p>{this.state.searchResults.login}</p>
                 </div>
        }
        
        return (
            <div>
                <center>
                    <input type="text" ref="query" /><br/><br/>
                    <input type="submit" onClick={this.createAjax} /><br/>   
                    <ul>{temp}</ul>
                </center>
            </div>
        );
    }
});

module.exports=Main;
