var request = require("request");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var function_call = function (teamcity_url, username, password,projectid, callback_create_project) {

var teamcity_url=teamcity_url;
var url_link=teamcity_url + "httpAuth/app/rest/projects";
var username = username;
var password = password;


var options = {
	    auth: {
        'username': username,
        'password': password
    },
	method: 'POST',
  url: url_link,
  headers: 
   { 
     
     'content-type': 'application/json',
 },
 body:
 { 
	id: projectid,
	name: projectid
 },
 json: true };

function callback(error, response, body) {
    if (!error) {

	console.log(response.statusCode);
	if(JSON.stringify(response.statusCode) == '200')
	{
	
	callback_create_project("null","Created Successfully","null");
	
	}
	else
	{
		

	callback_create_project("not found","Statuscode is not 200","null");
	}
    }
	else
	{
		callback_create_project("ServiceDown","Status code is not 200. Service is down.","null");

	}
	
} 
 

request(options, callback);
}




module.exports = {
  create_project: function_call	// MAIN FUNCTION
  
}