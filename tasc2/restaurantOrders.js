const chefs = new Map([
    ["Виктор", "Пицца"],
    ["Ольга", "Суши"],
    ["Дмитрий", "Десерты"]
]);
const dishes = new Map([
    ["Пицца 'Маргарита'", "Виктор"],
    ["Пицца 'Пепперони'", "Виктор"],
    ["Суши 'Филадельфия'", "Ольга"],
    ["Суши 'Калифорния'", "Ольга"],
    ["Тирамису", "Дмитрий"],
    ["Чизкейк", "Дмитрий"]
]);
const orders = new Map();

const clientAlexey = { name: "Алексей" };
const clientMaria = { name: "Мария" };
const clientIrina = { name: "Ирина" };

orders.set(clientAlexey, ["Пицца 'Пепперони'", "Тирамису"]);
orders.set(clientMaria, ["Суши 'Калифорния'", "Пицца 'Маргарита'"]);
orders.set(clientIrina, ["Чизкейк"]);

function displayOrders(orders) {
    for (const [client, dishes] of orders) {
        console.log(`${client.name} заказал:`);
        for (const dish of dishes) {
            const chef = dishes.get(dish);
            console.log(`- ${dish} (готовит: ${chef})`);
        }
        console.log('');
    }
}