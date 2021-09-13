

function concatStrings(str, separator){
  separator = "";
  let res = "";  
    const newFunc = function(input){
      if(!input === separator) return res;
      if(typeof input !== "string") return res;   
      res += input;
      return newFunc;
    }
      
    return newFunc(str)
}





class Calculator {

  constructor(one, two ){
      
    if(one === "") throw new Error("Ошибка")
    if(typeof one !== "number" || typeof two !== "number" || arguments.length > 2) throw new Error("Ошибка")
      this.one = one;
      this.two = two;
      this.logDiv = this.logDiv.bind(this)
      this.logMul = this.logMul.bind(this)
      
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
  logDiv = () => {
    if(this.val2 === 0) throw new Error("Ошибка!")
    console.log(this.one / this.two);
  }

}


