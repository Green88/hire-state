const express = require('express');
const { getCompanies, getCompanyById, createCompany, updateCompany } = require('../companies/companies-controller');
const router = express.Router();

router.get('/', getCompanies);
router.get('/:id', getCompanyById);
router.post('/', createCompany);
router.put('/:id', updateCompany);

module.exports = router;