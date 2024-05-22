// const user = {}

// Object.prototype.autheticated = true

// if (user.autheticated) {
//   console.log('autheticated: ' + user.autheticated)
// } else {
//   console.log('no autheticated: ' + user.autheticated)
// }

// const target = {a: 1, b: 2}
// const source = {b: 3, c: 4}

// const returnedTarget = Object.assign(target, source)

// console.log(returnedTarget)

// const person = {
//   isHuman: false,
//   printIntroduction: function () {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   },
// };

// const usigedObject = Object.create(person)

// console.log(usigedObject.isHuman)
// console.log(usigedObject.name = "John")
// usigedObject.printIntroduction()

const object = {};
Object.defineProperties(object, {
  property01: {
    value: 42,
    writable: true,
  },
  property02: {
    value: "John",
    writable: false,
  },
});

console.log(object.property02);

const object01 = {};
Object.defineProperty(object01, "property03", {
  value: 212,
  writable: false,
});

console.log(object01.property03);

const object02 = {
  nome: "John",
  last: "Doe",
  age: 32,
  salary: 2999,
  trust: true,
  person: {
    nome: "John",
    last: "Doe",
    age: 32,
    salary: 2999,
    trust: true,
  },
};

for (const [key, value] of Object.entries(object02)) {
  console.table(`Key ${key}, Value ${value}`);
}

console.log(Object.getOwnPropertyNames(object02));

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

const supermercado = [
  { name: "arroz", type: "alimentos", quantity: 4 },
  { name: "macarrão", type: "alimentos", quantity: 2 },
  { name: "tomate", type: "verduras", quantity: 14 },
  { name: "leite", type: "latcinios", quantity: 34 },
  { name: "manteiga", type: "latcinios", quantity: 4 },
  { name: "queijo", type: "latcinios", quantity: 7 },
  { name: "farinha", type: "alimentos", quantity: 2 },
  { name: "brocules", type: "verduras", quantity: 1 },
  { name: "manga", type: "frutas", quantity: 12 },
  { name: "banana", type: "frutas", quantity: 6 },
  { name: "costelas de porco", type: "carnes", quantity: 2 },
  { name: "peito de frango", type: "carnes brancas", quantity: 2 },
  { name: "alcatra", type: "carnes", quantity: 4 },
  { name: "feijão", type: "alimentos", quantity: 1 },
  { name: "cebola", type: "saladas", quantity: 3 },
  { name: "alface", type: "saladas", quantity: 1 },
  { name: "limão", type: "saladas", quantity: 2 },
  { name: "vinagre", type: "diversos", quantity: 1 },
];

function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}
Object.prototype.groupBy = groupBy;

console.log(Object.prototype);

const result = Object.groupBy(inventory, ({ type }) => type);
const resultSupermercado = Object.groupBy(supermercado, ({ type }) => type);

console.log(result);
console.log(resultSupermercado);