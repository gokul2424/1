var request = require("request");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var function_call = function (teamcity_url, username, password, callback_list_buildqueue) {

var teamcity_url=teamcity_url;
var url_link=teamcity_url + "httpAuth/app/rest/buildQueue";
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
	console.log("inside");
	
  if (error){
	console.log(error);
	callback_list_buildqueue("Error","Error","Error");
  }
  else
  {
		
		if(JSON.stringify(response.statusCode) == '200')
	{
			console.log("final");
			
			var buildtype_id = [];
			var state = [];
			var build_id = [];
			
			
			
            datafinal = body.split("<build ");
			console.log(datafinal.length);
			
			
			var final_answer = "No.\t\t\t*Id*\t\t\t*BuildTypeId*\t\t\t*State*\n";
			
			
			console.log(datafinal)
			console.log(final_answer);
			callback_list_buildqueue("null",final_answer,"null");
			
			for(i=1; i<datafinal.length; i++)
			{
			build_id[i] = body.split("id=")[i].split(" ")[0];
			buildtype_id[i] = body.split(" buildTypeId=")[i].split(" ")[0];
			state[i] = body.split(" state=")[i].split(" ")[0];
			
			
			
			final_answer =i+"\t\t\t"+build_id[i]+"\t\t\t"+buildtype_id[i]+"\t\t\t"+state[i]+"\n";
  
			console.log(final_answer);
			callback_list_buildqueue("null",final_answer,"null");
			
			
  
		
	}
	
			
				
			


	}		
			

  }
});
request(options, callback);
}




module.exports = {
  list_buildqueue: function_call	// MAIN FUNCTION
  
}