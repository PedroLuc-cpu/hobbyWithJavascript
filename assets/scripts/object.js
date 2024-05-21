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

const object = {}
Object.defineProperties(object, {
  property01: {
    value: 42,
    writable: true
  },
  property02: {
    value: "John",
    writable: false
  },
})

console.log(object.property02)


const object01 = {}
Object.defineProperty(object01, 'property03', {
  value: 212,
  writable: false
})

console.log(object01.property03)

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
  }
}

for (const [key, value] of Object.entries(object02)) {
  console.table(`Key ${key}, Value ${value}`)
}

console.log(Object.getOwnPropertyNames(object02))

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
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
Object.prototype.groupBy = groupBy

console.log(Object.prototype)


const result = Object.groupBy(inventory, ({ type }) => type)
console.log(result)