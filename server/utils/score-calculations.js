const { intersection } = require('lodash');

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

const calculateHybridity = (company, prefs) => {
    if (!company.hybridity) {
        return 3;
    }
    if (company.hybridity >= prefs.hybridity) {
        return 5;
    }
    if (prefs.hybridity - company.hybridity === 1) {
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
    const diff = Math.abs(prefsTitle.length - commons.length);
    if (diff >= 1 && diff < prefsTitle.length) {
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

module.exports = {
    calculateGlassdoorScore,
    calculateIndustryScore,
    calculateSalaryScore,
    calculateTitleScore,
    calculateSizeScore,
    calculateStatusScore,
    calculateHybridity,
    calculateLocationScore,
    calculateTechnologiesScore,
};