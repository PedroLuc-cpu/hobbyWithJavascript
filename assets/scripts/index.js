function CalculoOperation(value1, operation , value2) {
  return eval(`${value1} ${operation} ${value2}`)
}

console.log(CalculoOperation(3, "*", 2))

const array01 = [1, 2, 3, 4, 5]
const array012 = [2, 4,6,8,10]

const arrays = new Array(array01, array012);

console.log(arrays)

const colors = ["red", "green", "blue", "yellow"]
console.log(colors.at(-2))

const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "d",
}
console.log(Array.prototype.at.call(arrayLike, 0))

for (const entry of Array.prototype.entries.call(arrayLike)) {
    console.log(entry)
}

const map = new Map([
  [1,2],
  [2,4],
  [4,8],
  [8,10],
])

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
])

console.log(mapper.values())
console.log(mapper.keys())


console.log(new Array(mapper, map).map((key) => key))

const range = (start, stop, step) => Array.from({length: (stop - start) / step + 1}, (_, i) => start + i * step);

console.log(range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) => String.fromCharCode(x)))

const buffer = new ArrayBuffer(8, {maxByteLenght: 16})
console.log(buffer.resize(12))

function delayedValue(time, value) {
  return new Promise((resolve, reject) =>{
    setTimeout(() => resolve(value), time)
  })
}

async function* createAsyncGenerator() {
  yield delayedValue(500, 1)
  yield delayedValue(500, 2)
  yield delayedValue(500, 3)
}

const asyncGen = createAsyncGenerator();

asyncGen.next().then((res) => console.log(res))
asyncGen.next().then((res) => console.log(res))
asyncGen.next().then((res) => console.log(res))
asyncGen.next().then((res) => console.log(res))
asyncGen.next().then((res) => console.log(res))
asyncGen.next().then((res) => console.log(res))

new Promise((resolverOuter) => {
  resolverOuter(
    new Promise((resolverInner) => {
      setTimeout(resolverInner, 1000)
    })
  )
})
const botao = document.getElementById("afabelto")
function event(e) {
    console.log("click" + e.clientLeft)
  }
  botao.addEventListener("click", event)

const result = '(0 + 10) * 3 / 2 - 1'
console.log(eval(result))