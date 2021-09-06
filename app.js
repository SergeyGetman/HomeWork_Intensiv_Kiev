


const makeObjectDeepCopy = (object) => {
    if (Array.isArray(object) === true) return "it's not a object"
    let clone = {};
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            if ("object" === typeof object[key])
                clone[key] = makeObjectDeepCopy(object[key]);
            else
                clone[key] = object[key];
        }
    }
    return clone;
}







const testArray = (array) => {
    return array.some((elem) => {
        if (typeof elem != "number") {
            throw new Error("Misstake")
        }
    })
}

const selectFromInterval = (arr, rangeOne, rangeTwo) => {
    testArray(arr)
    if (typeof rangeOne !== 'number' || typeof rangeTwo !== 'number') throw new Error("It's not a number")
    let newArray = []
    for (let i = rangeOne; i > rangeTwo; i--) {
        newArray.push(i)
    }
    let finishArr = newArray.filter(elemInFilter => arr.some(elemInSome => elemInFilter == elemInSome));

    return finishArr.sort();
}





const isIterableCheck = object => {
    if (object != null && typeof object[Symbol.iterator] === 'function')
        throw new Error("Misstaces")
}

myIterable[Symbol.iterator] = function (object) {
    isIterableCheck(object)
    let first = this.from;
    let lasnNumm = this.to;

    return {
        next() {
            if (first <= lasnNumm) {
                return {
                    done: false,
                    value: first++
                };
            } else {
                return {
                    done: true
                };
            }
        }

    }
};