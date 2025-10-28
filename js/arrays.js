class MyArray {

  constructor() {
    this.lenght = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.lenght] = item;
    this.lenght++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.lenght - 1];
    delete this.data[this.lenght - 1];
    this.lenght--;
    return lastItem;
  }

  deleteByIndex(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }

  // mueve items a la derecha desde primero al ultimo
  unshift2(item) {

    for ( let i = 0; i < this.lenght; i++ ) {
      let first = this.data[0];
      this.data[0] = this.data[i + 1];
      this.data[i + 1] = first;
    }

    this.data[0] = item;
    this.lenght++;
  }

  // mueve items a la derecha primero el ultimo hasta el primero
  unshift1(item) {

    for (let i = this.lenght; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.lenght++;
    this.data[0] = item;
    return this.lenght;
  }


  shift() {
    this.shiftIndex(0);
  }

  // mueve los items a la izquierda
  shiftIndex(index) {
    for (let i = index; i < this.lenght - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.lenght - 1];
    this.lenght--;
  }

}

const myArray = new MyArray();
myArray.push("agua");
myArray.push("fuego");
myArray.push("tierra");

myArray.unshift1("aaa");
myArray.unshift2("bbb");
myArray.shift();
console.log(myArray);
