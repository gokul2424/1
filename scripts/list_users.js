var request = require("request");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var function_call = function (teamcity_url, username, password, callback_list_users) {

var teamcity_url=teamcity_url;
var url_link=teamcity_url + "httpAuth/app/rest/users";
var username = username;
var password = password;


var options = {
	    auth: {
        'username': username,
        'password': password
    },
	method: 'GET',
  url: url_link,
  headers: 
   { 
     
     'content-type': 'application/xml',
 }
 };


request(options, function (error, response, body) {
	console.log(body);
	
  if (error){
	console.log(error);
	callback_list_users("Error","Error","Error");
  }
  else
  {
		
		if(JSON.stringify(response.statusCode) == '200')
	{
			console.log("final");
			var username = [];
			var status_name = [];
			var id = [];
			
			
			
            datafinal = body.split("<user ");
			console.log(datafinal.length);
			
			
			var final_answer = "No.\t\t\t*User Name*\t\t\t*Name*\t\t\t*Id*\n";
			
			
			console.log(datafinal)
			console.log(final_answer);
			callback_list_users("null",final_answer,"null");
			
			for(i=1; i<datafinal.length; i++)
			{
			username[i] = body.split("username=")[i].split(" ")[0];
			status_name[i] = body.split(" name=")[i].split(" ")[0];
			id[i] = body.split(" id=")[i].split(" ")[0];
			
			
			final_answer =i+"\t\t\t"+username[i]+"\t\t\t"+status_name[i]+"\t\t\t"+id[i]+"\n";
  
			console.log(final_answer);
			callback_list_users("null",final_answer,"null");
			
			
  
		
	}
	
			
				
			


	}		
			

  }
});
request(options, callback);
}




module.exports = {
  list_users: function_call	// MAIN FUNCTION
  
}