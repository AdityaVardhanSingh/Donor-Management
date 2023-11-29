const express = require('express');
const router = express.Router();
const DonorController = require('../controllers/DonorController');

router.post('/', DonorController.createDonor);
router.get('/', DonorController.getAllDonors);
router.put('/:id', DonorController.updateDonor);
router.delete('/:id', DonorController.deleteDonor);

module.exports = router;
