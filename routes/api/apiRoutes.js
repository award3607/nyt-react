const router = require('express').Router();
const articlesController = require('../../controllers/articlesController');

router.get('/articles', articlesController.getAll);
router.post('/articles', articlesController.addOne);
router.delete('articles', articlesController.deleteOne);

module.exports = router;