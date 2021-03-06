
const baseUrl=process.env.REACT_APP_API_URL;

export const fetchWithToken=async(endpoint,method="GET",data) => {

    const url=`${baseUrl}/${endpoint}`;
    const token=localStorage.getItem('songbook-token') || "";
    

    if(method==='GET'){
        return fetch(url,{
            method: method,
            headers:{
            'x-token':token
            }
        });

    }else{
        return fetch(url,{
                method: method,
                headers:{
                'Content-type':'application/json',
                'x-token':token
                },
                body:JSON.stringify(data)
            });

    }
  }


export const fetchWithoutToken=async(endpoint,method="GET",data) => {

    const url=`${baseUrl}/${endpoint}`;

    if(method==='GET'){
        return fetch(url);
    }else{
        return fetch(url,{
                method: method,
                headers:{
                'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            });

    }
  }