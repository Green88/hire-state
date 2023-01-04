const {
    calculateGlassdoorScore,
    calculateHybridity,
    calculateIndustryScore,
    calculateLocationScore,
    calculateSalaryScore,
    calculateSizeScore,
    calculateStatusScore,
    calculateTechnologiesScore,
    calculateTitleScore,
} = require('./score-calculations');

const calculateScore = (company, prefs) => {
    const technologiesScore = calculateTechnologiesScore(company, prefs);
    const locationScore = calculateLocationScore(company, prefs);
    const locationByUserScore = company.location_score || 3;
    const hybridityScore = calculateHybridity(company, prefs);
    const statusScore = calculateStatusScore(company, prefs);
    const sizeScore = calculateSizeScore(company, prefs);
    const titleScore = calculateTitleScore(company, prefs);
    const salaryScore = calculateSalaryScore(company, prefs);
    const industryScore = calculateIndustryScore(company, prefs);
    const glassdoorScore = calculateGlassdoorScore(company); 

    return (technologiesScore + locationScore + locationByUserScore + hybridityScore + statusScore + sizeScore + titleScore + salaryScore + industryScore + glassdoorScore)/10;
};

module.exports = {
    calculateScore,
};