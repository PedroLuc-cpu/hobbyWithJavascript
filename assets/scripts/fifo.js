// Criamos uma classe para cada nó dentro da fila
class Node {
  //Cada nó possui duas propriedades, seu valor e um ponteiro que indica o nó seguinte
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Criamos uma classe para a fila
class Queue {
  // A fila tem três propriedades, o primeiro nó, o último nó e o tamanho da pilha
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // O método enqueue recebe um valor e o adiciona ao "final" da fila
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  // O método dequeue elimina o elemento no "início" da fila e retorna seu valor
  dequeue() {
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

const quickQueue = new Queue();

quickQueue.enqueue("value1");
quickQueue.enqueue("value2");
quickQueue.enqueue("value3");

console.log(quickQueue.first); /* 
        Node {
            value: 'value1',
            next: Node { value: 'value2', next: Node { value: 'value3', next: null } }
        }
    */
console.log(quickQueue.last); // Node { value: 'value3, next: null }
console.log(quickQueue.size); // 3

quickQueue.enqueue("value4");
console.log(quickQueue.dequeue()); // value1
