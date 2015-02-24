var BeGlobal = require('node-beglobal');
// var request=require('request');

var beglobal = new BeGlobal.BeglobalAPI({
	api_token: 'P4rNc4%2BJ7UuKxbeSPGgdXA%3D%3D'
});


var indexController = {
	index: function(req, res) {
		res.render('index');
	}
	// request: function(req,res){
	// 	method: 'POST',
	// 	url: 'https://lc-api.sdl.com/translate',
	// 	headers:{
	// 		Content-type: 'application/json',
	// 		Accept: 'application/json',
	// 		// api key
	// 		Authorization: 'LC apiKey=P4rNc4%2BJ7UuKxbeSPGgdXA%3D%3D'
	// 	},
	// 	body: JSON.stringify({
	// 		to: 'fra',
	// 		from: 'eng',
	// 		text: 'hello how are you?'
	// 	}),
	// 	json: true
	// 	}, 
	// 	function(err,response, body){
	// 		console.log(body.translation);  // bonjour
	// 	});


}; // indexController

module.exports = indexController;