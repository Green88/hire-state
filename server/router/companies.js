const express = require('express');
const { getCompanies, getCompanyById, createCompany, updateCompany, updateCompanyScore } = require('../companies/companies-controller');
const router = express.Router();

router.get('/', getCompanies);
router.get('/:id', getCompanyById);
router.post('/', createCompany);
router.put('/:id', updateCompany);
router.put('/:id/score/:username', updateCompanyScore);

module.exports = router;