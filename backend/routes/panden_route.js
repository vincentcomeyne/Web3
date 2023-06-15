const express = require('express');
const router = express.Router();
const pandenController = require('../controllers/panden_controller');

router.get('/', pandenController.getPanden);
router.get('/:id', pandenController.getPand);
router.post('/', pandenController.createPand);
router.put('/:id', pandenController.updatePand);
router.delete('/:id', pandenController.deletePand);

module.exports = router;
