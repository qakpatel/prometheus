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
                'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY5ZDlkYWUwN2E2MDFjYjk0ZmIyMjcyMmExMDFiMjFjOWEyMDdkOWQzZmQzYzlhOTc5NTAxYWQxMmExOTM4YTM0ZTdhOTM5NjBiMGJjMmQ3In0.eyJhdWQiOiIyIiwianRpIjoiNjlkOWRhZTA3YTYwMWNiOTRmYjIyNzIyYTEwMWIyMWM5YTIwN2Q5ZDNmZDNjOWE5Nzk1MDFhZDEyYTE5MzhhMzRlN2E5Mzk2MGIwYmMyZDciLCJpYXQiOjE1Njg2MzgzODAsIm5iZiI6MTU2ODYzODM4MCwiZXhwIjoxNjAwMjYwNzgwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.qm9-cxBbdAcr9JjbeGnDaOsK9cxCLw71CMkeOSJPRZwC2iZL-3lNZ66Lkai4OcylstFGphjVs7_qV_DhNRTv-CTJQLjDGtL2yxLMFEXzL1CCTe8tnk7TDBusrLYJOPg3XpoB_XisEjRJ3SXCY2YOcocKqp39m_Z_qFfssEGS9teQ6us0JIf7U56mTNKBwmyAFOAG8NqW4XmtFjcwaE4b0W1dvRSF1p0Qh2IpvxkIfn30-fjNzE8el-B_qD3bS9xWX-C4hEFmkZs-KK15PzsparMIs8JUX6UIb6KPj0NiTStLCQ4PEzeftt8S7h8nQboPmmNrRQ9_flYUby8N0VEjXnORQSe6nQd4GE44suhN1e7LwCagRxdAXq0koT8SAyqE3zSjaARIZkSfHnseG7VFx6ygZguI4LKi3CRFBxfxUsG1NUL5qzxxyT2kT5aSgNjO29GKV6pGOaRfBqCR-NBYmFxCVU8nVVzaS9TXxYiLzHFCmE1InHJ1e_2V7-qR8A3BJs2MEp91q3w_WmGJnLQJIhHpRVdyzeIGjYLbWkrCcWRObUwFzXjwVRQXRc81Boh23nJE7E5aD5euS7IJslv7VefLVUOkjqdIcjVLzG83w5WR_alZR1Gxo7P7q21aGMo-wu-bCt7WkKFAR2BVGVDnucdNTxCSGbg5c41h2gKo0mI',
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
                'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY5ZDlkYWUwN2E2MDFjYjk0ZmIyMjcyMmExMDFiMjFjOWEyMDdkOWQzZmQzYzlhOTc5NTAxYWQxMmExOTM4YTM0ZTdhOTM5NjBiMGJjMmQ3In0.eyJhdWQiOiIyIiwianRpIjoiNjlkOWRhZTA3YTYwMWNiOTRmYjIyNzIyYTEwMWIyMWM5YTIwN2Q5ZDNmZDNjOWE5Nzk1MDFhZDEyYTE5MzhhMzRlN2E5Mzk2MGIwYmMyZDciLCJpYXQiOjE1Njg2MzgzODAsIm5iZiI6MTU2ODYzODM4MCwiZXhwIjoxNjAwMjYwNzgwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.qm9-cxBbdAcr9JjbeGnDaOsK9cxCLw71CMkeOSJPRZwC2iZL-3lNZ66Lkai4OcylstFGphjVs7_qV_DhNRTv-CTJQLjDGtL2yxLMFEXzL1CCTe8tnk7TDBusrLYJOPg3XpoB_XisEjRJ3SXCY2YOcocKqp39m_Z_qFfssEGS9teQ6us0JIf7U56mTNKBwmyAFOAG8NqW4XmtFjcwaE4b0W1dvRSF1p0Qh2IpvxkIfn30-fjNzE8el-B_qD3bS9xWX-C4hEFmkZs-KK15PzsparMIs8JUX6UIb6KPj0NiTStLCQ4PEzeftt8S7h8nQboPmmNrRQ9_flYUby8N0VEjXnORQSe6nQd4GE44suhN1e7LwCagRxdAXq0koT8SAyqE3zSjaARIZkSfHnseG7VFx6ygZguI4LKi3CRFBxfxUsG1NUL5qzxxyT2kT5aSgNjO29GKV6pGOaRfBqCR-NBYmFxCVU8nVVzaS9TXxYiLzHFCmE1InHJ1e_2V7-qR8A3BJs2MEp91q3w_WmGJnLQJIhHpRVdyzeIGjYLbWkrCcWRObUwFzXjwVRQXRc81Boh23nJE7E5aD5euS7IJslv7VefLVUOkjqdIcjVLzG83w5WR_alZR1Gxo7P7q21aGMo-wu-bCt7WkKFAR2BVGVDnucdNTxCSGbg5c41h2gKo0mI',
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
                'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY5ZDlkYWUwN2E2MDFjYjk0ZmIyMjcyMmExMDFiMjFjOWEyMDdkOWQzZmQzYzlhOTc5NTAxYWQxMmExOTM4YTM0ZTdhOTM5NjBiMGJjMmQ3In0.eyJhdWQiOiIyIiwianRpIjoiNjlkOWRhZTA3YTYwMWNiOTRmYjIyNzIyYTEwMWIyMWM5YTIwN2Q5ZDNmZDNjOWE5Nzk1MDFhZDEyYTE5MzhhMzRlN2E5Mzk2MGIwYmMyZDciLCJpYXQiOjE1Njg2MzgzODAsIm5iZiI6MTU2ODYzODM4MCwiZXhwIjoxNjAwMjYwNzgwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.qm9-cxBbdAcr9JjbeGnDaOsK9cxCLw71CMkeOSJPRZwC2iZL-3lNZ66Lkai4OcylstFGphjVs7_qV_DhNRTv-CTJQLjDGtL2yxLMFEXzL1CCTe8tnk7TDBusrLYJOPg3XpoB_XisEjRJ3SXCY2YOcocKqp39m_Z_qFfssEGS9teQ6us0JIf7U56mTNKBwmyAFOAG8NqW4XmtFjcwaE4b0W1dvRSF1p0Qh2IpvxkIfn30-fjNzE8el-B_qD3bS9xWX-C4hEFmkZs-KK15PzsparMIs8JUX6UIb6KPj0NiTStLCQ4PEzeftt8S7h8nQboPmmNrRQ9_flYUby8N0VEjXnORQSe6nQd4GE44suhN1e7LwCagRxdAXq0koT8SAyqE3zSjaARIZkSfHnseG7VFx6ygZguI4LKi3CRFBxfxUsG1NUL5qzxxyT2kT5aSgNjO29GKV6pGOaRfBqCR-NBYmFxCVU8nVVzaS9TXxYiLzHFCmE1InHJ1e_2V7-qR8A3BJs2MEp91q3w_WmGJnLQJIhHpRVdyzeIGjYLbWkrCcWRObUwFzXjwVRQXRc81Boh23nJE7E5aD5euS7IJslv7VefLVUOkjqdIcjVLzG83w5WR_alZR1Gxo7P7q21aGMo-wu-bCt7WkKFAR2BVGVDnucdNTxCSGbg5c41h2gKo0mI',
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