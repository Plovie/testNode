function checkSameKeys(obj, arr){

    return checkKeysInObj(obj, arr) && checkKeysInArr(obj, arr);
}


function checkKeysInObj(obj, arr) {
    let objKeys = Object.keys(obj);

    function keysInObj(elem){
        return objKeys.includes(elem);
    }
    return arr.every(keysInObj);
}



function checkKeysInArr(obj, arr) {
    let objKeys = Object.keys(obj);

    function keysInArr(elem) {
        return arr.includes(elem);
    }
    return objKeys.every(keysInArr);
}




module.exports = {

    checkSameKeys: checkSameKeys,
    checkKeysInArr: checkKeysInArr,

}
