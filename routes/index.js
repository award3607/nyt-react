const path = require('path');
const {router} = require('express');
const apiRoutes = require('./api/apiRoutes');

//api
router.use('/api', apiRoutes);

//otherwise send React app
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;