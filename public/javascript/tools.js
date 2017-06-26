function test() {

    let a = new Date().getTime();

    let p1 = function() {
       return new Promise((resolve, reject) => {
            setTimeout(function () {
                console.log('first');
                resolve(1);
            }, 3000)
        });
    }
    let p2 = function() {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                console.log('second');
                resolve(1);
            }, 1000)
        });
    }
    // let p3 = new Promise((resolve, reject) => {
    //     setTimeout(function () {
    //         console.log('third');
    //         resolve(3);
    //     }, 1000)
    // });

    // Promise.all([p1, p2, p3])
    //     .then(values => {
    //         let b = new Date().getTime();
    //         console.log(values, b - a);
    //     })
    //     .catch(err => {
    //         let b = new Date().getTime();
    //         console.log(err, a - b);
    //     });

    p1().then((result) => {
        console.log(result);
        return p2();
    }).then((result2) => {
        console.log(result2);
    }).catch((err) => {
        console.log(err);
    });
}

test();
