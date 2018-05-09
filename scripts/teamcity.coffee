teamcity_url = process.env.TEAMCITY_URL
teamcity_user_id = process.env.TEAMCITY_USER_ID
teamcity_password =  process.env.TEAMCITY_PASSWORD
botname = process.env.HUBOT_NAME
#pod_ip = process.env.MY_POD_IP

request= require('request')
readjson = require './readjson.js'

list_users = require('./list_users.js');
list_projects = require('./list_projects.js');
list_buildtypes = require('./list_buildtypes.js');
list_buildqueue = require('./list_buildqueue.js');
delete_project = require('./delete_project.js');
create_project = require('./create_project.js');


uniqueId = (length=8) ->
  id = ""
  id += Math.random().toString(36).substr(2) while id.length < length
  id.substr 0, length

index = require('./index')
generate_id = require('./mongoConnt.coffee')

module.exports = (robot) ->
	robot.respond /help/i, (msg) ->

		msg.send 'list projects';
		msg.send 'list users';
		msg.send 'list builds';
		msg.send 'list buildqueues';
		msg.send 'delete project projectId';
		msg.send 'create project projectname';
		
		
	
	#list users/i
	robot.respond /list users/i, (msg) ->
		readjson.readworkflow_coffee (error,stdout,stderr) ->
			if stdout.teamcitylistusers.workflowflag == true
				json={botname:process.env.HUBOT_NAME,username:msg.message.user.name,userid:msg.message.room,approver:stdout.teamcitylistusers.admin,podIp:pod_ip,message:msg.message.text};
				data = {text: 'Approve Request for list teamcity components',attachments: [{text: '@',fallback: 'Yes or No?',callback_id: 'teamcity_users',color: '#3AA3E3',attachment_type: 'default',actions: [{ name: 'Approve', text: 'Approve', type: 'button', value: JSON.stringify(json) },{ name: 'Reject', text: 'Reject',  type: 'button',  value: JSON.stringify(json),confirm: {'title': 'Are you sure?','text': 'Do you want to Reject?','ok_text': 'Reject','dismiss_text': 'No'}}]}]}
				robot.messageRoom stdout.teamcitylistusers.adminid, data;
				msg.send 'Your approval request is waiting from '.concat(stdout.teamcitylistusers.admin);

					
			else
				list_users.list_users teamcity_url, teamcity_user_id, teamcity_password, (error, stdout, stderr) ->
					if error == "null"
						msg.send stdout;
						setTimeout (->index.passData stdout),1000
					else
						msg.send error;
						setTimeout (->index.passData error),1000
						
	#list projects/i
	robot.respond /list projects/i, (msg) ->
		readjson.readworkflow_coffee (error,stdout,stderr) ->
			if stdout.teamcitylistprojects.workflowflag == true
				json={botname:process.env.HUBOT_NAME,username:msg.message.user.name,userid:msg.message.room,approver:stdout.teamcitylistprojects.admin,podIp:pod_ip,message:msg.message.text};
				data = {text: 'Approve Request for list teamcity components',attachments: [{text: '@',fallback: 'Yes or No?',callback_id: 'teamcity_users',color: '#3AA3E3',attachment_type: 'default',actions: [{ name: 'Approve', text: 'Approve', type: 'button', value: JSON.stringify(json) },{ name: 'Reject', text: 'Reject',  type: 'button',  value: JSON.stringify(json),confirm: {'title': 'Are you sure?','text': 'Do you want to Reject?','ok_text': 'Reject','dismiss_text': 'No'}}]}]}
				robot.messageRoom stdout.teamcitylistprojects.adminid, data;
				msg.send 'Your approval request is waiting from '.concat(stdout.teamcitylistprojects.admin);

					
			else
				list_projects.list_projects teamcity_url, teamcity_user_id, teamcity_password, (error, stdout, stderr) ->
					if error == "null"
						msg.send stdout;
						setTimeout (->index.passData stdout),1000
					else
						msg.send error;
						setTimeout (->index.passData error),1000
						
						
	#list buildtypes/i
	robot.respond /list builds/i, (msg) ->
		readjson.readworkflow_coffee (error,stdout,stderr) ->
			if stdout.teamcitylistbuildtypes.workflowflag == true
				json={botname:process.env.HUBOT_NAME,username:msg.message.user.name,userid:msg.message.room,approver:stdout.teamcitylistbuildtypes.admin,podIp:pod_ip,message:msg.message.text};
				data = {text: 'Approve Request for list teamcity components',attachments: [{text: '@',fallback: 'Yes or No?',callback_id: 'teamcity_users',color: '#3AA3E3',attachment_type: 'default',actions: [{ name: 'Approve', text: 'Approve', type: 'button', value: JSON.stringify(json) },{ name: 'Reject', text: 'Reject',  type: 'button',  value: JSON.stringify(json),confirm: {'title': 'Are you sure?','text': 'Do you want to Reject?','ok_text': 'Reject','dismiss_text': 'No'}}]}]}
				robot.messageRoom stdout.teamcitylistbuildtypes.adminid, data;
				msg.send 'Your approval request is waiting from '.concat(stdout.teamcitylistbuildtypes.admin);

					
			else
				list_buildtypes.list_buildtypes teamcity_url, teamcity_user_id, teamcity_password, (error, stdout, stderr) ->
					if error == "null"
						msg.send stdout;
						setTimeout (->index.passData stdout),1000
					else
						msg.send error;
						setTimeout (->index.passData error),1000
						
	#list buildqueue/i
	robot.respond /list buildqueues/i, (msg) ->
		readjson.readworkflow_coffee (error,stdout,stderr) ->
			if stdout.teamcitylistbuildqueue.workflowflag == true
				json={botname:process.env.HUBOT_NAME,username:msg.message.user.name,userid:msg.message.room,approver:stdout.teamcitylistbuildqueue.admin,podIp:pod_ip,message:msg.message.text};
				data = {text: 'Approve Request for list teamcity components',attachments: [{text: '@',fallback: 'Yes or No?',callback_id: 'teamcity_users',color: '#3AA3E3',attachment_type: 'default',actions: [{ name: 'Approve', text: 'Approve', type: 'button', value: JSON.stringify(json) },{ name: 'Reject', text: 'Reject',  type: 'button',  value: JSON.stringify(json),confirm: {'title': 'Are you sure?','text': 'Do you want to Reject?','ok_text': 'Reject','dismiss_text': 'No'}}]}]}
				robot.messageRoom stdout.teamcitylistbuildqueue.adminid, data;
				msg.send 'Your approval request is waiting from '.concat(stdout.teamcitylistbuildqueue.admin);

					
			else
				
				list_buildqueue.list_buildqueue teamcity_url, teamcity_user_id, teamcity_password, (error, stdout, stderr) ->
					if error == "null"
						msg.send stdout;
						setTimeout (->index.passData stdout),1000
					else
						msg.send error;
						setTimeout (->index.passData error),1000
						
	#delete project	
	robot.respond /delete project (.*)/i, (msg) ->
		app_name = msg.match[1];
		
		readjson.readworkflow_coffee (error,stdout,stderr) ->
			if stdout.teamcitydeleteprojects.workflowflag == true
				generate_id.getNextSequence (err,id) ->
					tckid=id
					payload={callback_id: 'teamcitydeleteprojects',botname:process.env.HUBOT_NAME,username:msg.message.user.name,userid:msg.message.room,approver:stdout.teamcitydeleteprojects.admin,podIp:pod_ip,message:msg.message.text,tckid:tckid,app_name:app_name};
					data = {text: 'Approve Request for list teamcity application delete',attachments: [{text: '@'+payload.username+' requested to delete application '+payload.app_name+'\n',fallback: 'Yes or No?',callback_id: 'teamcitydeleteprojects',color: '#3AA3E3',attachment_type: 'default',actions: [{ name: 'Approve', text: 'Approve', type: 'button', value: tckid },{ name: 'Reject', text: 'Reject',  type: 'button', value: tckid,confirm: {'title': 'Are you sure?','text': 'Do you want to Reject?','ok_text': 'Reject','dismiss_text': 'No'}}]}]}
					robot.messageRoom stdout.teamcitydeleteprojects.adminid, data;
					msg.send 'Your approval request is waiting from '.concat(stdout.teamcitydeleteprojects.admin);

					
					dataToInsert = {ticketid: tckid, payload: payload, "status":"","approvedby":""}
					generate_id.add_in_mongo dataToInsert
					
			else
				
				delete_project.delete_project teamcity_url, teamcity_user_id, teamcity_password, app_name, (error, stdout, stderr) ->
					if error == "null"
						msg.send stdout;
						setTimeout (->index.passData stdout),1000;
						message=msg.match[0]
						actionmsg="Teamcity project deleted"
						statusmsg="Success"
						index.wallData botname, message, actionmsg, statusmsg;
					else
						msg.send error;
						setTimeout (->index.passData error),1000;
	
	robot.router.post '/teamcitydeleteprojects', (request, response) ->
		data_http = if request.body.payload? then JSON.parse request.body.payload else request.body
		if data_http.action == 'Approve'
			delete_project.delete_project teamcity_url, teamcity_user_id, teamcity_password, data_http.app_name, (error, stdout, stderr) ->
				if error == null
					actionmsg = 'Teamcity project deleted'
					statusmsg = 'Success';
					dt = 'Teamcity project deleted with ID : '.concat(data_http.app_name)
					index.wallData botname, data_http.message, actionmsg, statusmsg;
					robot.messageRoom data_http.userid, dt
					setTimeout (->index.passData dt),1000
				else
					setTimeout (->index.passData error),1000
					robot.messageRoom data_http.userid, error;
		else
			dt = 'You are not authorized.'
			robot.messageRoom data_http.userid, dt;
			setTimeout (->index.passData dt),1000
			
			
			
	#create project	
	robot.respond /create project (.*)/i, (msg) ->
		app_name = msg.match[1];
		
		readjson.readworkflow_coffee (error,stdout,stderr) ->
			if stdout.teamcitycreateprojects.workflowflag == true
				generate_id.getNextSequence (err,id) ->
					tckid=id
					payload={callback_id: 'teamcitycreateprojects',botname:process.env.HUBOT_NAME,username:msg.message.user.name,userid:msg.message.room,approver:stdout.teamcitycreateprojects.admin,podIp:pod_ip,message:msg.message.text,tckid:tckid,app_name:app_name};
					data = {text: 'Approve Request for list teamcity application delete',attachments: [{text: '@'+payload.username+' requested to delete application '+payload.app_name+'\n',fallback: 'Yes or No?',callback_id: 'teamcitycreateprojects',color: '#3AA3E3',attachment_type: 'default',actions: [{ name: 'Approve', text: 'Approve', type: 'button', value: tckid },{ name: 'Reject', text: 'Reject',  type: 'button', value: tckid,confirm: {'title': 'Are you sure?','text': 'Do you want to Reject?','ok_text': 'Reject','dismiss_text': 'No'}}]}]}
					robot.messageRoom stdout.teamcitycreateprojects.adminid, data;
					msg.send 'Your approval request is waiting from '.concat(stdout.teamcitycreateprojects.admin);

					
					dataToInsert = {ticketid: tckid, payload: payload, "status":"","approvedby":""}
					generate_id.add_in_mongo dataToInsert
					
			else
				console.log("inside");
				create_project.create_project teamcity_url, teamcity_user_id, teamcity_password, app_name, (error, stdout, stderr) ->
					if error == "null"
						msg.send stdout;
						setTimeout (->index.passData stdout),1000;
						message=msg.match[0]
						actionmsg="Teamcity project created"
						statusmsg="Success"
						index.wallData botname, message, actionmsg, statusmsg;
					else
						msg.send error;
						setTimeout (->index.passData error),1000;
	
	robot.router.post '/teamcitycreateprojects', (request, response) ->
		data_http = if request.body.payload? then JSON.parse request.body.payload else request.body
		if data_http.action == 'Approve'
			create_project.create_project teamcity_url, teamcity_user_id, teamcity_password, data_http.app_name, (error, stdout, stderr) ->
				if error == null
					actionmsg = 'Teamcity project created'
					statusmsg = 'Success';
					dt = 'Teamcity project created with ID : '.concat(data_http.app_name)
					index.wallData botname, data_http.message, actionmsg, statusmsg;
					robot.messageRoom data_http.userid, dt
					setTimeout (->index.passData dt),1000
				else
					setTimeout (->index.passData error),1000
					robot.messageRoom data_http.userid, error;
		else
			dt = 'You are not authorized.'
			robot.messageRoom data_http.userid, dt;
			setTimeout (->index.passData dt),1000
	