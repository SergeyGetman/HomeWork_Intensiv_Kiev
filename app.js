



 Array.prototype.myFilter = function(callBack, params) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
      params = callBack(this[i], i, this);
       if (params) {
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
