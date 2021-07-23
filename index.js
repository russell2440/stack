
 class node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
 class stack{
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value){
    let nn = new node(value);
    nn.next = this.top;
    this.top = nn;
    this.length++;
  }
  pop(){
    if(this.top != this.bottom){
      let value = this.top.value;
      this.top = this.top.next;
      this.length--;
      return value;
    }
    return undefined;
  }
  peek(){
    if(this.top != this.bottom){
      let value = this.top.value;
      return value;
    }
    return undefined;
  }
};

const ms = new stack();

ms.push('google');
ms.push('udemy');
ms.push('discord');
console.log(ms);
console.log(ms.pop());
console.log(ms.pop());
console.log(ms.pop());
console.log(ms);
console.log(ms.pop());
console.log(ms);



