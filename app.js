

const myFilter = (callBack, array) => callBack(array)
const check = (param) => Array.from(new Set(param))



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