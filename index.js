const fetch = require("node-fetch");

const url = "https://fusionapi.dev/";
var baseurl = null;
var session;

class FusionApp {
    constructor(appid){
        if(!appid) throw Error("You need to provide your APPID")
        baseurl = `${url}app/${appid}/api`
    }

    ValidateSession(){
        const params = new URLSearchParams();
        params.append("action", "validate-session")
        params.append("session", session)

        return new Promise((send, err) => {
            fetch(baseurl, {method: "POST", body: params, timeout: 10000})
            .then(res => res.json())
            .then((out) => {
                send(out);
            })
        })
    }

    Has2FA(username){
        const params = new URLSearchParams();
        params.append("action", "has2fa")
        params.append("username", username)

        return new Promise((send, err) => {
            fetch(baseurl, {method: "POST", body: params})
            .then(res => res.json())
            .then((out) => {
                send(out);
            })
        })
    }

    GetAppVars(){
        const params = new URLSearchParams();
        params.append("action", "get-app-vars")
        params.append("session", session)

        return new Promise((send, err) => {
            fetch(baseurl, {method: "POST", body: params, timeout: 10000})
            .then(res => res.json())
            .then((out) => {
                send(out);
            })
        })
    }

    MyBlob(){
        const params = new URLSearchParams();
        params.append("action", "myblob")
        params.append("session", session)

        return new Promise((send, err) => {
            fetch(baseurl, {method: "POST", body: params, timeout: 10000})
            .then(res => res.json())
            .then((out) => {
                send(out);
            })
        })
    }

    MyVars(){
        const params = new URLSearchParams();
        params.append("action", "myvars")
        params.append("session", session)

        return new Promise((send, err) => {
            fetch(baseurl, {method: "POST", body: params, timeout: 10000})
            .then(res => res.json())
            .then((out) => {
                send(out);
            })
        })
    }

    AppBlob(){
        const params = new URLSearchParams();
        params.append("action", "appblob")
        params.append("session", session)

        return new Promise((send, err) => {
            fetch(baseurl, {method: "POST", body: params, timeout: 10000})
            .then(res => res.json())
            .then((out) => {
                send(out);
            })
        })
    }

    SetUserVars(key, value){
        const params = new URLSearchParams();
        params.append("action", "set-user-vars")
        params.append("session", session)
        params.append("key", key)
        params.append("value", value)

        return new Promise((send, err) => {
            fetch(baseurl, {method: "POST", body: params, timeout: 10000})
            .then(res => res.json())
            .then((out) => {
                send(out);
            })
        })
    }

    GetIP(){
        return new Promise((send, err) => {
            fetch("https://api.ipify.org")
            .then(res => res.text())
            .then((out) => {
                send(out);
            })
        })
    }

    Login(username, password, g2fa = null){

        const params = new URLSearchParams();
        params.append("action", "login")
        params.append("username", username)
        params.append("password", password)

        return new Promise((send, err) => {
            fetch(baseurl, {method: "POST", body: params, timeout: 10000})
            .then(res => res.json())
            .then((out) => {
                
                if(out.error){
                    send(out)
                }
                session = out.session

                    /*const paramsBlobs = new URLSearchParams();
                    paramsBlobs.append("action", "myblob")
                    paramsBlobs.append("session", out.session)
                    
                    fetch(baseurl, {method: "POST", body: paramsBlobs, timeout: 10000})
                    .then(res => res.json())
                    .then((userblob) => {
                        send(userblob)
                    })*/  
                    

                send(out)

            })
        })
    }

    Register(username, password, token){

        var regex = /^(?=\S{8,150}$)(?=.*?\d)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[^A-Za-z\s0-9])/i;
        if(password.match(regex) == null){
            throw Error("Password requirements not met.")
        }else{
            const params = new URLSearchParams();
            params.append("action", "register")
            params.append("username", username)
            params.append("password", password)
            params.append("token", token)
    
            return new Promise((send, err) => {
                fetch(baseurl, {method: "POST", body: params, timeout: 10000})
                .then(res => res.json())
                .then((out) => {
                    
                    if(out.error){
                        send(out)
                    }
                    
                    send(out)
    
                })
            })
        }
    }

    ResetPassword(oldpassword, newpassword){
        const params = new URLSearchParams();
        params.append("action", "change-pass")
        params.append("session", session)
        params.append("oldpassword", oldpassword)
        params.append("newpassword", newpassword)

        return new Promise((send, err) => {
            fetch(baseurl, {method: "POST", body: params, timeout: 10000})
            .then(res => res.json())
            .then((out) => {
                send(out);
            })
        })
    }

}

module.exports.FusionApp = FusionApp;