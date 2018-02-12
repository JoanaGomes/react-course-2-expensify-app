//
// OBJECTS
//

const person = {
  name: 'Andrew',
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 92
  }
};

const { name = 'Anonymous', age } = person;
console.log(`${name} is ${age}.`);

const { city: hometown, temp: temperature = 88 } = person.location;
console.log(`It's ${temperature} in ${hometown}.`);


const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);


//
// ARRAYS
//

const address = [];//['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [ , , state = 'New York' ] = address;
console.log(`You are in ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [ coffee, , price] = item;
console.log(`A medium ${coffee} costs ${price} `);