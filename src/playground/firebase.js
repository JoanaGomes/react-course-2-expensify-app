
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
}, err => console.log(err));

database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
}, err => console.log(err));

database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
}, err => console.log(err));

database.ref('expenses').on('value', (snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })
  console.log(expenses);
}, (err) => console.log(err));//*/

/*database.ref('expenses').push({
  description: 'Credit Card',
  note: '',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
});//*/

/*const subscribe = database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
}, (err) => {
  console.log('Error fetching data', err)
});

setTimeout(() => {
  database.ref('job').update({
    title: 'Team lead'
  });
}, 3500);

/*const onValueChange = database.ref().on('value', ((snapshot) => {
  console.log(snapshot.val());
}, (err) => {
  console.log('Error with data fetching', e);
}));

setTimeout(() => {
  database.ref('age').set(40);
}, 3500);

setTimeout(() => {
  database.ref().off('value', onValueChange);
}, 3500);

setTimeout(() => {
  database.ref('age').set(26);
}, 3500);*/

/*database.ref('location/city').once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((err) => console.log('Error fetching data', err)); //*/

/*database
  .ref().set({
    name: 'Andrew Mead',
    age: 26,
    stressLevel: 6,
    job: {
      title: 'Software developer',
      company: 'Google'
    },
    location: {
      city: 'Philadelphia',
      country: 'United States'
    }
  })
  .then(() => console.log('data is saved') )
  .catch((err) => console.log('This failed!', err));
//*/


/*database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
})
.then(() => console.log('data is updated') )
.catch((err) => console.log('This failed!', err));

/*database.ref()
  .remove()
  .then(() => console.log('done'))
  .catch((err) => console.error(err));
*/
