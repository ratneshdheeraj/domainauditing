//js
const express = require('express');



const {domainView,domainAudit } = require('../controllers/domainController');

const router = express.Router();

router.get('/',domainView);

router.post('/domain-audit',domainAudit);

module.exports = router;