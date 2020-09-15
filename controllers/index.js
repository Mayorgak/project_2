const router = require('express').Router();

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

const homeRoutes = require('./home-routes');
router.use('/', homeRoutes);

const dashboardRoutes = require('./dashboard-routes.js');
router.use('/dashboard', dashboardRoutes);

const searchRoutes = require('./search-routes');
router.use('/search', searchRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;