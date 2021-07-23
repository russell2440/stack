class stack{
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value){
    nn = new node(value);
    nn.next = this.top;
    this.top = nn;
  }
  pop(){
    if(this.top != this.bottom){
      value = this.top.value;
      this.top = this.top.next;
      return value;
    }
    return undefined;
  }
  peek(){
    if(this.top != this.bottom){
      value = this.top.value;
      return value;
    }
    return undefined;
  }
};
