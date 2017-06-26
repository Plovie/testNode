function checkSameKeys(obj: any, arr: string[]){
    console.log(checkKeysInObj(obj, arr), checkKeysInArr(obj, arr));
    return checkKeysInObj(obj, arr) && checkKeysInArr(obj, arr);
}


function checkKeysInObj(obj: any, arr: string[]): boolean {
    let objKeys: string[] = Object.keys(obj);
    let objKeysString = JSON.stringify(objKeys);


    function keysInObj(elem: string){
        return objKeysString.indexOf(elem) > 0 ;
    }
    return arr.every(keysInObj);
}



function checkKeysInArr(obj: any, arr: string[]): boolean {
    let objKeys = Object.keys(obj);
    let arrKeysString = JSON.stringify(arr);

    function keysInArr(elem: string) {
        return arrKeysString.indexOf(elem) > 0 ;
    }
    return objKeys.every(keysInArr);
}

export {
    checkSameKeys,
    checkKeysInArr,
}
