// SERVER SIDE CODE

var BeGlobal = require('node-beglobal');
// var request=require('request');

var beglobal = new BeGlobal.BeglobalAPI({
	api_token: 'P4rNc4%2BJ7UuKxbeSPGgdXA%3D%3D'
});


var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	translatePageLaunch: function(req,res){
		res.render('translate');
	},

	translate: function(req, res){

		beglobal.translations.translate(
		  {text: 'hello', from: 'eng', to: 'fra'},
		  function(err, results) {
		    if (err) {
		      return console.log(err);
		    }
		    console.log(results);
		    console.log('hello');
		  }
		);	
		res.redirect('translate');		
		//console.log(req.body);
	}






}; // indexController

module.exports = indexController;