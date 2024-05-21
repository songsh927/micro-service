const {Router} = require('express');
const router = Router();
const ctrl = require('./video');

router.get('/:id', ctrl.videoStreamById);

module.exports = router