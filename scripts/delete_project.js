var request = require("request");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var function_call = function (teamcity_url, username, password,projectid, callback_delete_project) {

var teamcity_url=teamcity_url;
var url_link=teamcity_url + "httpAuth/app/rest/projects/"+projectid;
var username = username;
var password = password;


var options = {
	    auth: {
        'username': username,
        'password': password
    },
	method: 'DELETE',
  url: url_link,
  headers: 
   { 
     
     'content-type': 'application/xml',
 }
 };

function callback(error, response, body) {
    if (!error) {

	console.log(response.statusCode);
	if(JSON.stringify(response.statusCode) == '204')
	{
	
	callback_delete_project("null","Deleted Successfully","null");
	
	}
	else
	{
		

	callback_delete_project("not200","Statuscode is not 200","null");
	}
    }
	else
	{
		callback_delete_project("ServiceDown","Status code is not 200. Service is down.","null");

	}
	
} 
 

request(options, callback);
}




module.exports = {
  delete_project: function_call	// MAIN FUNCTION
  
}