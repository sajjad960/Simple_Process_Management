// const Counter = require('./counterModel'); // Adjust the path accordingly

// async function initializeCounter() {
//   try {
//     await Counter.findByIdAndUpdate(
//       { _id: 'processId' },
//       { $setOnInsert: { seq: 0 } },
//       { upsert: true, new: true }
//     );
//     console.log('Counter initialized.');
//   } catch (error) {
//     console.error('Error initializing counter:', error);
//   }
// }

// module.exports = initializeCounter;
