import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBS5cRyxTKIXg1cUtZnP1SRY_4s0L3KpYc",
  authDomain: "expensify-235e0.firebaseapp.com",
  databaseURL: "https://expensify-235e0.firebaseio.com",
  projectId: "expensify-235e0",
  storageBucket: "expensify-235e0.appspot.com", 
  messagingSenderId: "495110172597"
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};

//child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key)
// });

//child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key)
// });

//child_Added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key)
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         });
//       });
//       console.log(expenses)
//   },(e) => {
//     console.log('error data fetch', e)
//   })


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })

//     console.log(expenses)
//   })

// database.ref('expenses').push({
//   description: 'Renst',
//   note: '',
//   amount: 109500,
//   createdAt: 12345533345654
// })

// database.ref('expenses').push({
//   description: 'phone',
//   note: '',
//   amount: 986778,
//   createdAt: 12345533345654
// })

// database.ref('expenses').push({
//   description: 'food',
//   note: '',
//   amount: 1200,
//   createdAt: 12345533345654
// })




// database.ref('notes').push({
//        body: 'dddd'
//     })

// const firebaseNotes = {
//   notes: {
//     id0: {
//       body: 'dddd'
//     },
//     id1: {
//       body: 'ffff' 
//     }
//   }
// }

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();

//   console.log(`${val.name} is a ${val.job.title}`);
// },(e) => {
//   console.log('error data fetch', e)
// })

// setTimeout(() => {
//   database.ref('age').set(1);
// }, 3500)


// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000)

// setTimeout(() => {
//   database.ref('age').set(3);
// }, 10500)

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val)
//   }).catch((e) => {
//     console.log('error featching data', e);
//   })


// database.ref().set({
//   name: 'lukasz',
//   age: 26,
//   sterssLevel: 6,
//   job: {
//     title: 'frontend',
//     company: 'ABB'
//   },
//   location:{
//     city: 'Krakow',
//     county: 'Poland'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('this failed', e)
// })

// database.ref().update({
//   sterssLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'WWA'
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('this failed', e)
// });


// database.ref('isSinge')
//   .remove()
//   .then(()=> {})
//   .catch((e)=>{})