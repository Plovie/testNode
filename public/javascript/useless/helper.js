function parseJSON(response) {
    return response.json()
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        return parseJSON(response).then(function (data) {
            let error = '------ Error Node --------------- ' + data.message;
            throw error
        });
    }
}



function getAllPromise(...arg){
    Promise.all(arg)
        .then(values => {
            console.log(values);
        })
        .catch(errors => {
            return console.log('request failed', errors)
        });
}