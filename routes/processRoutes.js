const express = require('express');

// controller
const processController = require('../controllers/processController');

const router = express.Router();


router.get('/', processController.getAllProcess)
router.post('/',processController.createProcess);
router.route('/:processId').get(processController.getSingleProcess).delete(processController.deleteProcess);



module.exports = router;
