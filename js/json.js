const user = {id: 1, name: 'Jhon Sina', profession: 'actor'}
// JSON - JavaScript Object Notation;
const jsonUser = JSON.stringify(user);
// console.log(user);
// console.log(jsonUser);

/*
{ id: 1, name: 'Jhon Sina', profession: 'actor' }
{"id":1,"name":"Jhon Sina","profession":"actor"}
*/

const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    product: ['laptop','mobile','monitor','keyboard'],
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj);
