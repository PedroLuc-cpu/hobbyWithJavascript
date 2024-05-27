// We create a class for each node within the stack
class Node {
  // Each node has two properties, its value and a pointer that indicates the node that follows
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Criamos uma classe para cada nó dentro da pilha
class Stack {
  // Cada nó possui duas propriedades, seu valor e um ponteiro que indica o nó seguinte
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // O método push recebe um valor e o adiciona ao "topo" da pilha
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  // O método pop elimina o elemento do "topo" da pilha e retorna seu valor
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const stck = new Stack();

stck.push("value1");
stck.push("value2");
stck.push("value3");

console.log(stck.first); /* 
        Node {
        value: 'value3',
        next: Node { value: 'value2', next: Node { value: 'value1', next: null } }
        }
    */
console.log(stck.last); // Node { value: 'value1', next: null }
console.log(stck.size); // 3

stck.push("value4");
console.log(stck.pop()); // value4
