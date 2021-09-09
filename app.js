

 Array.prototype.myFilter = function(callBack) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
     let result = callBack(this[i], i, this);
       if (result) {
        newArray.push(this[i]);
       }
   }
   return newArray;
}
const myFilter =  arr.myFilter((elem)  => elem > 5)

function createDebouncedFunction(callback, delay) {

    let timerId = null;

    return function () {
        if (timerId) {
            clearTimeout(timerId);
            timerId = null;
        }

        timerId = setTimeout(function () {
            callback();
            timerId = null;
        }, delay);
    }
}
