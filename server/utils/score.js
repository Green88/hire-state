const { intersection, has } = require('lodash');

const calculateTechnologiesScore = (company, prefs) => {
    const technologies = intersection(company.technologies, prefs.technologies);
    if (technologies.length === 1) {
        return 4;
    }
    if (technologies.length === 2) {
        return 4.5;
    }
    if (technologies.length > 2) {
        return 5;
    }
    return 3;
};

const calculateLocationScore = (company, prefs) => {
    const hasPreferredLocation = prefs.locations.includes(company.location);
    if (hasPreferredLocation) {
        return 4;
    }
    return 3;
};

const calculateHibridity = (company, prefs) => {
    if (!company.hibridity) {
        return 3;
    }
    if (company.hibridity >= prefs.hibridity) {
        return 5;
    }
    if (prefs.hibridity - company.hibridity === 1) {
        return 4;
    }
    return 3;
};

const calculateStatusScore = (company, prefs) => {
    const hasPreferredStatus = prefs.company_status.includes(company.status);
    if (hasPreferredStatus) {
        return 5;
    }
    return 3;
};

const calculateSizeScore = (company, prefs) => {
    if (company.size.length < 2) { // wrong setting
        return 3;
    }
    const companySizeMin = company.size[0];
    const companySizeMax = company.size[1];
    const prefSizeMin = prefs.company_size[0];
    const prefSizeMax = prefs.company_size[1];

    if (Math.abs(prefSizeMax - companySizeMax) < 100 && Math.abs(prefSizeMin - companySizeMin) < 20) {
        return 4.5;
    }
    return 3;
};

const calculateTitleScore = (company, prefs) => {
    const prefsTitle = prefs.title.toLowerCase().split(' ');
    const companyTitle = company.title.toLowerCase().split(' ');
    const commons = intersection(prefsTitle, companyTitle);
    if (commons.length === prefsTitle.length) {
        return 5;
    }
    if (Math.abs(prefsTitle.length - commons.length) === 1) {
        return 4;
    } 
    return 3;
};

const calculateSalaryScore = (company, prefs) => {
    if (!company.salary) {
        return 3;
    }
    if (company.salary >= prefs.salary) {
        return 5;
    }
    return prefs.salary - company.salary <= 2000 ? 4 : 2.5;
};

const calculateIndustryScore = (company, prefs) => {
    const hasPreferredIndustry = prefs.industry.includes(company.industry);
    if (hasPreferredIndustry) {
        return 5;
    }
    return 3;
};

const calculateGlassdoorScore = (company) => {
    if (!company.glassdoor_score) {
        return 3;
    }
    return company.glassdoor_score;
};

const calculateScore = (company, prefs) => {
    const technologiesScore = calculateTechnologiesScore(company, prefs);
    const locationScore = calculateLocationScore(company, prefs);
    const locationByUserScore = company.location_score || 3;
    const hibridityScore = calculateHibridity(company, prefs);
    const statusScore = calculateStatusScore(company, prefs);
    const sizeScore = calculateSizeScore(company, prefs);
    const titleScore = calculateTitleScore(company, prefs);
    const salaryScore = calculateSalaryScore(company, prefs);
    const industryScore = calculateIndustryScore(company, prefs);
    const glassdoorScore = calculateGlassdoorScore(company); 

    return (technologiesScore + locationScore + locationByUserScore + hibridityScore + statusScore + sizeScore + titleScore + salaryScore + industryScore + glassdoorScore)/10;
};

module.exports = {
    calculateScore,
};