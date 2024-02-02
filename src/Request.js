export const doPostRequest = (path,reqOptions,successfullCallback,failureCallback)=>{
    const url = path


    fetch(url,reqOptions)
    .then(response => response.json())
    .then (result => {
        if(successfullCallback){
            successfullCallback(result || '');
        }
        return result || ''
    })
    .catch(error =>{
        if(failureCallback){
            failureCallback(error);
        }
    })
};