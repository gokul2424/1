var request = require("request");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var function_call = function (teamcity_url, username, password, callback_list_buildtypes) {

var teamcity_url=teamcity_url;
var url_link=teamcity_url + "httpAuth/app/rest/buildTypes";
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
	callback_list_buildtypes("Error","Error","Error");
  }
  else
  {
		
		if(JSON.stringify(response.statusCode) == '200')
	{
			console.log("final");
			var project_name = [];
			var project_id = [];
			var build_name = [];
			var build_id = [];
			
			
			
            datafinal = body.split("<buildType ");
			console.log(datafinal.length);
			
			
			var final_answer = "No.\t\t\t*Build Id*\t\t\t*Name*\t\t\t*Project Name*\t\t\t*Project Id*\n";
			
			
			console.log(datafinal)
			console.log(final_answer);
			callback_list_buildtypes("null",final_answer,"null");
			
			for(i=1; i<datafinal.length; i++)
			{
			build_id[i] = body.split("id=")[i].split(" ")[0];
			build_name[i] = body.split(" name=")[i].split(" ")[0];
			project_name[i] = body.split(" projectName=")[i].split(" ")[0];
			project_id[i] = body.split(" id=")[i].split(" ")[0];
			
			
			final_answer =i+"\t\t\t"+build_id[i]+"\t\t\t"+build_name[i]+"\t\t\t"+project_name[i]+"\t\t\t"+project_id[i]+"\n";
  
			console.log(final_answer);
			callback_list_buildtypes("null",final_answer,"null");
			
			
  
		
	}
	
			
				
			


	}		
			

  }
});
request(options, callback);
}




module.exports = {
  list_buildtypes: function_call	// MAIN FUNCTION
  
}