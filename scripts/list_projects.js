var request = require("request");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var function_call = function (teamcity_url, username, password, callback_list_projects) {

var teamcity_url=teamcity_url;
var url_link=teamcity_url + "httpAuth/app/rest/projects";
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
	callback_list_projects("Error","Error","Error");
  }
  else
  {
		console.log("inside");
		if(JSON.stringify(response.statusCode) == '200')
	{
			console.log("final");
			var id = [];
			var project_name = [];
			var description = [];
			
			
			
            datafinal = body.split("<project ");
			console.log(datafinal.length);
			console.log(datafinal);
			
			
			var final_answer = "No.\t\t\t*Project Id*\t\t\t*Name*\t\t\t*description*\n";
			
			
			console.log(final_answer);
			callback_list_projects("null",final_answer,"null");
			
			for(i=1; i<datafinal.length; i++)
			{
			id[i] = body.split("id=")[i].split(" ")[0];
			project_name[i] = body.split(" name=")[i].split(" ")[0];
			description[i] = body.split(" webUrl=")[i].split("/>")[0];
			
			
			final_answer =i+"\t\t\t"+id[i]+"\t\t\t"+project_name[i]+"\t\t\t"+description[i]+"\n";
  
			console.log(final_answer);
			callback_list_projects("null",final_answer,"null");
			
			
  
		
			}
	
			
				
			


	}
			

  }
});
request(options, callback);
}




module.exports = {
  list_projects: function_call	// MAIN FUNCTION
  
}