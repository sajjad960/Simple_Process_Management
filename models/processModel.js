const mongoose = require('mongoose');
// const Counter = require("./counterModel")

const processSchema = new mongoose.Schema({
    pid: { type: Number, unique: true },
    createdAt: {
        type: Date,
        default: Date.now
    },
},)

// processSchema.pre('save', async function(next) {
//     const doc = this;
//     if (doc.isNew) {
//         try {
//             // Ensure the counter document exists
//             const counter = await Counter.findByIdAndUpdate(
//                 { _id: 'processId' },
//                 { $inc: { seq: 1 } },
//                 { new: true, upsert: true }
//             );

//             // Assign the incremented sequence value to the document
//             doc.pid = counter.seq;
//             next();
//         } catch (error) {
//             next(error);
//         }
//     } else {
//         next();
//     }
// });

const Process = mongoose.model('processes', processSchema)

module.exports = Process;