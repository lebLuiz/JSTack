const array = [
    { name: 'Iphone', price: 5000, quantity: 2 },
    { name: 'MacBook Pro', price: 20000, quantity: 1 },
    { name: 'Magic Mouse', price: 1000, quantity: 5 },
];

// .find
const find = array.find((product) => (product.name === 'Magic Mouse'));

// .findIndex
const findIndex = array.findIndex((product) => (product.name === 'Magic Mouse'));

// .some - "algum" ["existem algum produto com price maior que 1000"]
const some = array.some((product) => product.price > 1000);

// .every - "todos" ["todos os produtos tem o price maior que 1000"]
const every = array.every((product) => product.price > 1000);

// .map
const map = array.map((product) => ({
    ...product,
    subtotal: product.quantity * product.price,
}));

// .filter
const filter = array.filter((product) => product.quantity >= 2);

// .reduce
const reduce = array.reduce((accumulator, product) => 
    accumulator + (product.quantity * product.price),
    0
);

console.log({
    find,
    findIndex,
    some,
    every,
    map,
    filter,
    reduce,
});