const Process = require("../models/processModel");
const AppError = require("../utilies/AppError");
const catchAsync = require("../utilies/catchAsync");
const handleFactory = require("./handleFactory");
const processes = {};

exports.createProcess = catchAsync(async (req, res, next) => {
  const intervalId = setInterval(() => {
    const currentDateTime = new Date().toLocaleString();
    if (processes[intervalId]) {
      processes[intervalId].push(`${currentDateTime}`);
    } else {
      processes[intervalId] = [];
    }
  }, 5000);

  const doc = await Process.create({
    pid: intervalId,
  });
  //send responce
  res.status(201).json({
    status: "success",
    data: doc,
  });
});

exports.getSingleProcess = catchAsync(async (req, res, next) => {
  const processId = req.params.id;
  // Find the process by pid
  const process = await Process.findOne({ pid: processId });
  if (!process) {
    return next(new AppError("Process not found", 404));
  }
  const processLog = processes[processId];

  //send responce
  res.status(201).json({
    status: "success",
    processLog,
  });
});

exports.deleteProcess = catchAsync(async (req, res, next) => {
  const processId = req.params.id;

  // Find the process by pid
  const process = await Process.findOne({ pid: processId });
  if (!process) {
    return next(new AppError("Process not found", 404));
  }

  // Stop the background process
  clearInterval(process.pid);
  delete processes[process.pid];

  // Delete the process from the database
  await Process.findOneAndDelete({ pid: processId });

  // Send response
  res.send(`"${process.pid}" The process has been successfully deleted`);
});

exports.getAllProcess = handleFactory.getAll(Process);
