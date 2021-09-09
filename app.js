


Array.prototype.myFilter = function(callback, thisAgr) {   

    return this.reduce(function(accum, elem, index, array){
        if(callback(thisAgr, elem, index, array )){
            accum.push(elem);
            
        }
        return accum;
    },[])
  }

  const myFilter = arr.myFilter((elem) => elem > 5)




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