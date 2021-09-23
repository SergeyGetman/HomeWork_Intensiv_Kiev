class Car {
  #brand
  #model
  #yearOfManufacturing
  #maxSpeed
  #maxFuelVolume
  #fuelConsumption
  #currentFuelVolume = 0
  #isStarted = false
  #mileage = 0

  set brand(value) {
    if (typeof(brand) !== "string" || value.length < 1 || value.length > 50) {
      throw new Error("строка от 1 до 50 символов включительно.");
  }
  }

  get brand(){
    return this.#brand;
  }

  set model(value){
    if (typeof(brand) !== "string" || value.length < 1 || value.length > 50) 
      throw new Error("строка от 1 до 50 символов включительно.");
  }

  get model(){
    return this.#model
  }

  set yearOfManufacturing (year){
    if (!Number.isFinite(year) || year < 1900 || year > (new Date).getFullYear()) {
      throw new Error("Неподходящий год.");
  }
  this.#yearOfManufacturing = year;
  }

  get yearOfManufacturing (){
    if(!this.#yearOfManufacturing) throw new Error("год не задан")
    return this.#yearOfManufacturing;
  }

  set maxSpeed (param){
    if (!Number.isFinite(param) || param < 100 || param > 300) {
      throw new Error("Speed shoud be a number in the range from 100 to 300.");
  }
  this.#maxSpeed = param;

  }
  get maxSpeed(){
    if(!this.#maxSpeed) throw new Error("Скорость не задана ")
    return this.#maxSpeed
  }

  set maxFuelVolume (volume){
    if(!Number.isFinite(volume) || volume <= 0){
      throw new Error("параметр должен быть позитивное число")
    }
    this.#maxFuelVolume = volume;
  }

  get maxFuelVolume (){
    if(!this.#maxFuelVolume) throw new Error("параметры не заданы")
    return this.#currentFuelVolume;
  }

  set fuelConsumption (fuel){
    if(!Number.isFinite(fuel) || fuel <= 0){
      throw new Error("Должно быть число")
    }
    this.#fuelConsumption = fuel;
  }

  get fuelConsumption (){
    if(!this.#fuelConsumption) throw new Error("Некорректный ввод")
    return this.#fuelConsumption
  }

    
  get currentFuelVolume() {
      return this.#currentFuelVolume;
  }

  get isStarted() {
      return this.#isStarted;
  }

  get mileage() {
      return this.#mileage;
  }

  start = () => {
    if (this.#isStarted) throw new Error('Машина уже заведена')
    this.#isStarted = true
  }
  shutDownEngine = () => {
    if (!this.#isStarted) throw new Error('Машина еще не заведена')
    this.#isStarted = false
  }
  fillUpGasTank = (litres) => {
    if (typeof litres !== 'number')
      throw new Error('Неверное количество топлива для заправки')

    if (litres <= 0) throw new Error('Неверное количество топлива для заправки')

    if (this.#currentFuelVolume + litres > 20)
      throw new Error('Топливный бак переполнен')

    this.#currentFuelVolume += litres
    console.log(this.#currentFuelVolume)
  }

  drive(speed, timers) {
    if (typeof speed !== 'number' || speed <= 0) {
      throw new Error('Неверная скорость')
    }
    if (typeof timers !== 'number' || timers <= 0) {
      throw new Error('Неверное количество часов')
    }
    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро')
    }
    if (this.#isStarted === false) {
      throw new Error('Машина должна быть заведена, чтобы ехать')
    }

    let currentMile = speed * timers

    let currentFullDistance = (this.#fuelConsumption / 100) * currentMile
    let allFuel = this.#currentFuelVolume - currentFullDistance

    if (this.#currentFuelVolume < 0) {
      throw new Error('Недостаточно топлива')
    }

    this.#mileage += currentMile
    this.#currentFuelVolume = allFuel
  }
}

export class { Car }







