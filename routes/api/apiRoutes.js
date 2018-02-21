const router = require('express').Router();
const articlesController = require('../../controllers/articlesController');

router.get('/', articlesController.getAll);
router.post('/', articlesController.addOne);
router.delete('/', articlesController.deleteOne);

module.exports = router;