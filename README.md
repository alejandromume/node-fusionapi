# FusionAPI for NodeJS

## <ins>Introduction 
* This is the original FusionAPI `C#` package bringed to `JavaScript`.
* Website: https://fusionapi.dev/
* Official repo: https://github.com/FusionAPI/FusionAPI-CSharp

## <ins>Issues
* Chat module is not available right now. I will update it soon

## <ins>Install
* To install FusionAPI `npm` package you just need to run the following command in your terminal:
```
npm i fusionapi
```

## <ins>Modules
* Here is a list of all the modules and code examples:
---

* `App.ValidateSession()` -> Check if a session is active.
* `App.Has2FA(username)` -> Checks if a user has 2FA enabled.
* `App.GetAppVars()` -> Fetches application variables.
* `App.SetUserVars(key, value)` -> Set user variables.
* `App.GetIP()` -> Get visitor IP
* `App.Login(username, password)` -> Login
* `App.Register(username, password, token)` -> Register users to your application.
* `App.ResetPassword(oldpassword, newpassword)` -> Reset your password
* `App.MyBlob()` -> Returns a blob of user data.
* `App.AppBlob()` -> Fetch all relevant data on an app.
* `App.MyVars()` -> Grabs user variables.
---
## Examples

### Login
```js
const { FusionApp } = require("fusionapi")
var  App = new  FusionApp("APPID")

App.Login("username", "Password123/").then(loginResponse => {
	if(loginResponse.error == false){
		console.log(loginResponse.message);
	}else{
		console.log(loginResponse.message);
	}
})
```

### Register
```js
const { FusionApp } = require("fusionapi")
var  App = new  FusionApp("APPID")

App.Register("username", "Password123/", "TOKEN").then(registerResponse => {
	if(registerResponse.error == false){
		console.log(registerResponse.message);
	}else{
		console.log(registerResponse.message);
	}
})
```

### Check 2FA
```js
const { FusionApp } = require("fusionapi")
var  App = new  FusionApp("APPID")

App.Has2FA("username").then(h2faResponse => {
	if(h2faResponse.error == false){
		console.log(h2faResponse.status);
	}else{
		console.log(h2faResponse.message);
	}
})
```

### Get App Vars
```js
const { FusionApp } = require("fusionapi")
var  App = new  FusionApp("APPID")

App.Login("username", "Password123/").then(loginResponse => {
	if(loginResponse.error == false){
	
		App.GetAppVars().then(appVars => {
			if(appVars.error == false){
				console.log(appVars.vars);
			}else{
				console.log(appVars.message);
			}
		})
		
	}else{
		console.log(loginResponse.message);
	}

})
```

### Set User Vars
```js
const { FusionApp } = require("fusionapi")
var  App = new  FusionApp("APPID")

App.Login("username", "Password123/").then(loginResponse => {
	if(loginResponse.error == false){
	
		App.GetAppVars().then(appVars => {
			if(appVars.error == false){
				App.SetUserVars("varName", "varValue").then(userVarResponse => {
			        console.log(userVarResponse);
		        })
			}else{
				console.log(appVars.message);
			}
		})
		
	}else{
		console.log(loginResponse.message);
	}
})
```

