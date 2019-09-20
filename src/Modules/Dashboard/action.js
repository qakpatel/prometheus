export const USER = {
    LEADS_DATA : "LEADS_DATA",
    NOTIFICATION : "NOTIFICATION",
    POST_NOTIFICATION : "POST_NOTIFICATION"
}
    
export  const getAllLeads = () => {
    var url = 'http://10.0.17.180/api/v1/dashboard'
    return dispatch => {
        return fetch(url,{
            method:'GET',
            headers:{
                'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVmN2IwYmZmZjkxNTIxNjk4ODZkYjUyOWQ4NzNjOWU5ZmU2NWU3NDQzZmNhN2UyMzAzZjlmODZkODg0MjU1OWMwODZmMWU3OTExMGM3MGJhIn0.eyJhdWQiOiIyIiwianRpIjoiZWY3YjBiZmZmOTE1MjE2OTg4NmRiNTI5ZDg3M2M5ZTlmZTY1ZTc0NDNmY2E3ZTIzMDNmOWY4NmQ4ODQyNTU5YzA4NmYxZTc5MTEwYzcwYmEiLCJpYXQiOjE1Njg4ODgzNDIsIm5iZiI6MTU2ODg4ODM0MiwiZXhwIjoxNjAwNTEwNzQyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.KZbNwd9-vxgG7TPKO5YArFlIkS_eyhjRUr0ThT_j-ei0n3ujf1-ImErdCOLXFnYT0NCMf0LWDFFaASAzLyvx9vjSEWMq_tkkmTGkrEs9A64LpH-PjmgE1FlYfl45St-F23KDRTT3qEEsPNtuZXcovuq6ncJkRWk2UaNNSmN09drfOG8FeixZu1Rx1_bRwHsCepIyclOZERuR7h-RJBC09QSvw6af6nSm8E3nCt9mIK2KuhWSBT4puWn5HsmmZoXQKgaDNSLmktVU0HopmHA25TwddfRLisrTRoGTUqWU_zvLR1xNHlCBUX68NLa6d23XucAUPr0OTzI5pzM84IR3kMaoZa223VhsrYO4qaHhzYpxGh2c7DacFI5F2y8LBezP23n-mVptvrQf-q1QrBYfnAYDBwccpA_fSYJO7ryoiBJSUsSb6zH95r_Zub7kAnS9RKT2lkD6TE3O2mn3C66QWVW3XdV7AkC_JSxk6NN4MCXOW6Liw6tAcEzh9YbXMUFj1v-oT28m4ZKqWexIvyapo9MKgcizo5vbEW10bt3vAtjNTmViUY41hutq9RMrhiQf_VZcMmQ4BtN86REU3pzZFZFG241Kd_edW-ghd_nVeykllHLdf8U5KqPCj4XoPNMezfruHMF1HMvoOPClKda1VydTTSrNV8N9cbu9RsB9hAw',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            dispatch({
                type : USER.LEADS_DATA,
                payload : {data}
            }) 
        })
        
    }
}

export const getAllNotification = () => {
    var url = 'http://10.0.17.180/api/v1/notifications'
    return dispatch => {
        return fetch(url,{
            method:'GET',
            headers:{
                'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVmN2IwYmZmZjkxNTIxNjk4ODZkYjUyOWQ4NzNjOWU5ZmU2NWU3NDQzZmNhN2UyMzAzZjlmODZkODg0MjU1OWMwODZmMWU3OTExMGM3MGJhIn0.eyJhdWQiOiIyIiwianRpIjoiZWY3YjBiZmZmOTE1MjE2OTg4NmRiNTI5ZDg3M2M5ZTlmZTY1ZTc0NDNmY2E3ZTIzMDNmOWY4NmQ4ODQyNTU5YzA4NmYxZTc5MTEwYzcwYmEiLCJpYXQiOjE1Njg4ODgzNDIsIm5iZiI6MTU2ODg4ODM0MiwiZXhwIjoxNjAwNTEwNzQyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.KZbNwd9-vxgG7TPKO5YArFlIkS_eyhjRUr0ThT_j-ei0n3ujf1-ImErdCOLXFnYT0NCMf0LWDFFaASAzLyvx9vjSEWMq_tkkmTGkrEs9A64LpH-PjmgE1FlYfl45St-F23KDRTT3qEEsPNtuZXcovuq6ncJkRWk2UaNNSmN09drfOG8FeixZu1Rx1_bRwHsCepIyclOZERuR7h-RJBC09QSvw6af6nSm8E3nCt9mIK2KuhWSBT4puWn5HsmmZoXQKgaDNSLmktVU0HopmHA25TwddfRLisrTRoGTUqWU_zvLR1xNHlCBUX68NLa6d23XucAUPr0OTzI5pzM84IR3kMaoZa223VhsrYO4qaHhzYpxGh2c7DacFI5F2y8LBezP23n-mVptvrQf-q1QrBYfnAYDBwccpA_fSYJO7ryoiBJSUsSb6zH95r_Zub7kAnS9RKT2lkD6TE3O2mn3C66QWVW3XdV7AkC_JSxk6NN4MCXOW6Liw6tAcEzh9YbXMUFj1v-oT28m4ZKqWexIvyapo9MKgcizo5vbEW10bt3vAtjNTmViUY41hutq9RMrhiQf_VZcMmQ4BtN86REU3pzZFZFG241Kd_edW-ghd_nVeykllHLdf8U5KqPCj4XoPNMezfruHMF1HMvoOPClKda1VydTTSrNV8N9cbu9RsB9hAw',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            dispatch({
                type : USER.NOTIFICATION,
                payload : {data}
            })
        })
    }
}

export const postAllNotification = () => {
    var url = 'http://10.0.17.180/api/v1/notifications'
    return dispatch => {
        return fetch(url,{
            method:'POST',
            headers:{
                'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVmN2IwYmZmZjkxNTIxNjk4ODZkYjUyOWQ4NzNjOWU5ZmU2NWU3NDQzZmNhN2UyMzAzZjlmODZkODg0MjU1OWMwODZmMWU3OTExMGM3MGJhIn0.eyJhdWQiOiIyIiwianRpIjoiZWY3YjBiZmZmOTE1MjE2OTg4NmRiNTI5ZDg3M2M5ZTlmZTY1ZTc0NDNmY2E3ZTIzMDNmOWY4NmQ4ODQyNTU5YzA4NmYxZTc5MTEwYzcwYmEiLCJpYXQiOjE1Njg4ODgzNDIsIm5iZiI6MTU2ODg4ODM0MiwiZXhwIjoxNjAwNTEwNzQyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.KZbNwd9-vxgG7TPKO5YArFlIkS_eyhjRUr0ThT_j-ei0n3ujf1-ImErdCOLXFnYT0NCMf0LWDFFaASAzLyvx9vjSEWMq_tkkmTGkrEs9A64LpH-PjmgE1FlYfl45St-F23KDRTT3qEEsPNtuZXcovuq6ncJkRWk2UaNNSmN09drfOG8FeixZu1Rx1_bRwHsCepIyclOZERuR7h-RJBC09QSvw6af6nSm8E3nCt9mIK2KuhWSBT4puWn5HsmmZoXQKgaDNSLmktVU0HopmHA25TwddfRLisrTRoGTUqWU_zvLR1xNHlCBUX68NLa6d23XucAUPr0OTzI5pzM84IR3kMaoZa223VhsrYO4qaHhzYpxGh2c7DacFI5F2y8LBezP23n-mVptvrQf-q1QrBYfnAYDBwccpA_fSYJO7ryoiBJSUsSb6zH95r_Zub7kAnS9RKT2lkD6TE3O2mn3C66QWVW3XdV7AkC_JSxk6NN4MCXOW6Liw6tAcEzh9YbXMUFj1v-oT28m4ZKqWexIvyapo9MKgcizo5vbEW10bt3vAtjNTmViUY41hutq9RMrhiQf_VZcMmQ4BtN86REU3pzZFZFG241Kd_edW-ghd_nVeykllHLdf8U5KqPCj4XoPNMezfruHMF1HMvoOPClKda1VydTTSrNV8N9cbu9RsB9hAw',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            dispatch({
                type : USER.POST_NOTIFICATION,
                payload : {data}
            })
        })
    }
}