


function concatStrings(string,separator) {
  let resultStr = string;

  if (typeof(separator) !== "string") {
    separator = "";
  }
  function newFunc(str) {
    if (typeof(str) !== "string") {
      return resultStr;
    }
    resultStr = resultStr + separator + str;
    return newFunc;
  }

  return newFunc;
}

class Calculator {

  constructor(one, two ){
      
    if(one === "") throw new Error("Ошибка")
    if(typeof one !== "number" || typeof two !== "number" || arguments.length > 2) throw new Error("Ошибка")
      this.one = one;
      this.two = two;
      this.logDiv = this.logDiv.bind(this)
      this.logMul = this.logMul.bind(this)
      this.logSum = this.logSum.bind(this)
      this.logSub = this.logSub.bind(this)
      
  }

     setX(val){
      if(typeof val !== "number" || val === undefined || isNaN(val)) throw new Error("Ошибка")
        this.one = val;
        return val;
    
  }
  setY(val2){
    if(typeof val2 !== "number" || val2 === undefined || isNaN(val2)) throw new Error("Ошибка!")
    this.two = val2;
    return val2;
  }

  logSum(){
    console.log(this.one + this.two);
  }
  logMul(){
    console.log(this.one * this.two);
  }
  logSub(){
    console.log(this.one - this.two);
  }
  logDiv () {
    if(this.val2 === 0) throw new Error("Ошибка!")
    console.log(this.one / this.two);
  }

}
