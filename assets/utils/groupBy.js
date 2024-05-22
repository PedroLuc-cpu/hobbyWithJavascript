/**
 * função que retorna um array de objeto agrupado pelo seu tipo
 * @param {Array<T>} list array de objeto
 * @param {Callback} keyGetter função que retorna o grupo da lista
 * @returns array de objetos grupados
 * @example const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
  ];
  const result = groupBy(inventory, ({ type }) => type);
  resultado = {vegetables: Array(1), fruit: Array(2), meat: Array(2)}
 */

export function groupBy(list, keyGetter) {
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
