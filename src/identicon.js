class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  constructor(input){
    this.input
  }

  generateNums(){
    return md5.array(this.input)
  }

}
