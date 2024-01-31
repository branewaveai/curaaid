export const doPostRequest = (path,regOptions,successfullCallback,failureCallback)=>{
    const url = path


    fetch(url,regOptions)
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