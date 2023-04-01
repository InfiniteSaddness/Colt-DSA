// @ts-nocheck

class Node {
  constructor(val){
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(){
    this.init();
  }

  push(val){
    let node = new Node(val);
    if(this.length == 0){
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  unshift(val){
    if(this.length == 0) this.push(val);
    let node = new Node(val);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  insert(ndx, val){
    if(this.length == 0 || ndx >= this.length) this.push(val);
    if(ndx <= 0) this.unshift(val);
    let pre = this.get(ndx-1, true);
    let node = new Node(val);
    node.next = pre.next;
    pre.next = node;
    this.length++;
  }

  pop(){
    if(this.length == 0) return null;
    let val;
    if(this.length == 1) {
      val = this.head.value;
      this.init();
    } else {
      let node = this.get(this.length - 2, true)
      val = node.next.value;
      node.next = null;
      this.length--;
    }
    return val;
  }

  shift(){
    if(this.length == 0) return null;
    let val = this.head.value;
    if(this.length == 1){
      this.init();
    } else {
      this.head = this.head.next;
      this.length--;
    }
    return val;
  }

  remove(ndx){
    if(this.length == 0) return null;
    if(ndx <= 0) return this.shift();
    if(ndx >= this.length - 1) return this.pop();
    let pre = this.get(ndx-1, true);
    let val = pre.next.value;
    pre.next = pre.next.next;
    this.length--;
    return val;
  }

  walk(){
    let n = this.head;
    while(n != null){
      console.log(n.value);
      n = n.next;
    }
  }

  reverse(){
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for(let i = 0; i < this.length; ++i){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }

  set(ndx, val){
    if(ndx < 0 || ndx > this.length - 1) return;
    this.get(ndx, true).value = val;
  }

  get(ndx, node=false){
    if(ndx < 0 || ndx > this.length - 1) return null;
    let n = this.head;
    let c = 0;
    while(c != ndx){
      n = n.next;
      c++;
    }
    return node ? n : n.value
  }

  init(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

export default SinglyLinkedList
