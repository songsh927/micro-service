const {Router} = require('express');
const router = Router();

router.use('/video', require('./video'));

module.exports = router;