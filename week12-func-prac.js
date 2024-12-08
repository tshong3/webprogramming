const cart = [
    { item: "노트북", price: 1200000, quantity: 1 },
    { item: "마우스", price: 35000, quantity: 2 },
    { item: "키보드", price: 89000, quantity: 1 }
];

let totalPrice = 0;
for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
}
console.log(`Total Price: ${totalPrice}`);

totalPrice = 0;
cart.forEach(item => totalPrice += item.price * item.quantity);
console.log(`Total Price: ${totalPrice}`);

totalPrice = 0;
totalPrice = cart.reduce((a, b) => (a + b.price * b.quantity), 0);
console.log(`Total Price: ${totalPrice}`);

const itemTotals = cart.map(e => ({
    item: e.item,
    total: e.price * e.quantity
}));
console.log(`제품별 금액:`, itemTotals);


const names = ["alice", "bob", "charlie"];

const uppercasedNames = names.map(e =>
    e.toUpperCase()
);
console.log(`uppercasedNames = ${uppercasedNames}`);

const capitalStartNames = names.map(e =>
    e[0].toUpperCase() + e.slice(1)
);
console.log(`capitalStartNames = ${capitalStartNames}`);