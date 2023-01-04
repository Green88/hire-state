const expect = require('chai').expect;
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
} = require('../../utils/score-calculations');

const DEFAULT_SCORE = 3;
const AVERAGE_SCORE = 4;
const HIGHEST_SCORE = 5;

describe('Glassdoor score', () => {
    test('Returns default score if does not exist', () => {
        const company = {
            glassdoor_score: 0
        };
        expect(calculateGlassdoorScore(company)).to.equal(DEFAULT_SCORE);
    });

    test('Returns score if exists', () => {
        const company = {
            glassdoor_score: 4.5
        };
        expect(calculateGlassdoorScore(company)).to.equal(4.5);
    });
});

describe('Hybridity score', () => {
    const prefs = {
        hybridity: 3,
    };
    test('Returns default score if company hybridity doesnt exist', () => {
        const company = {
            hybridity: 0,
        };
        expect(calculateHybridity(company, prefs)).to.equal(DEFAULT_SCORE);

    });
    test('Returns highest score if company hybridity equals or higher than preferred', () => {
        let company = {
            hybridity: 3,
        };
        expect(calculateHybridity(company, prefs)).to.equal(HIGHEST_SCORE);
        company.hybridity = 5;
        expect(calculateHybridity(company, prefs)).to.equal(HIGHEST_SCORE);

    });
    test('Returns average score if company hybridity is less than preferred', () => {
        let company = {
            hybridity: 2,
        };
        expect(calculateHybridity(company, prefs)).to.equal(AVERAGE_SCORE);

    });
});

describe('Industry score', () => {
    const prefs = {
        industry: ['edtech', 'healthtech', 'hrtech', 'femtech', 'devtools'],
    };

    test('Returns default score if company industry is not included', () => {
        const company = {
            industry: 'cyber'
        };
        expect(calculateIndustryScore(company, prefs)).to.equal(DEFAULT_SCORE);
    });
    test('Returns highest score if industry is included', () => {
        const company = {
            industry: 'hrtech'
        };
        expect(calculateIndustryScore(company, prefs)).to.equal(HIGHEST_SCORE);
    });
});

describe('Location score', () => {
    const prefs = {
        locations: ['Rishon Lezion', 'Holon', 'Rehovot', 'Tel Aviv'],
    };

    test('Returns default score if company location is NOT included', () => {
        const company = {
            location: 'Jerusalem'
        };
        expect(calculateLocationScore(company, prefs)).to.equal(DEFAULT_SCORE);
    });
    test('Returns average score if location is included', () => {
        const company = {
            location: 'Tel Aviv'
        };
        expect(calculateLocationScore(company, prefs)).to.equal(AVERAGE_SCORE);
    });
});

describe('Salary score', () => {
    const prefs = {
        salary: 80000,
    };

    test('Returns default score if salary doesnt exist', () => {
        const company = {
            salary: 0,
        };
        expect(calculateSalaryScore(company, prefs)).to.equal(DEFAULT_SCORE);
    });
    test('Returns highest score if salary is higher than preferred', () => {
        const company = {
            salary: 80001,
        };
        expect(calculateSalaryScore(company, prefs)).to.equal(HIGHEST_SCORE);
    });
    test('Returns average score if salary is less than preferred', () => {
        const company = {
            salary: 79999,
        };
        expect(calculateSalaryScore(company, prefs)).to.equal(AVERAGE_SCORE);
    });
    test('Returns 2.5 score if salary is much less than preferred', () => {
        const company = {
            salary: 77000,
        };
        expect(calculateSalaryScore(company, prefs)).to.equal(2.5);
    });
});

describe('Company size score', () => {
    const prefs = {
        company_size: [1, 100],
    };
    test('Returns default score if size set as empty', () => {
        const company = {size: []};
        expect(calculateSizeScore(company, prefs)).to.equal(DEFAULT_SCORE);
    });
    test('Returns 4.5 score if size is close to boundaries', () => {
        const company = {size: [20, 50]};
        expect(calculateSizeScore(company, prefs)).to.equal(4.5);
    });
    test('Returns default score if size is out of boundaries', () => {
        const company = {size: [100, 1000]};
        expect(calculateSizeScore(company, prefs)).to.equal(DEFAULT_SCORE);
    });
});

describe('Company status score', () => {
    const prefs = {
        company_status: ['early startup', 'medium startup', 'small startup'],
    };
    test('Returns default score if status is not in preferred', () => {
        const company = {status: 'public'};
        expect(calculateStatusScore(company, prefs)).to.equal(DEFAULT_SCORE);
    });
    test('Returns highest score if status is included in preferred', () => {
        const company = {status: 'early startup'};
        expect(calculateStatusScore(company, prefs)).to.equal(HIGHEST_SCORE);
    });
});

describe('Technologies score', () => {
    const prefs = {
        technologies: ['react', 'nodejs', 'vue', 'python', 'kafka']
    };
    test('Returns default score if no technology in common', () => {
        const company = {technologies: ['java', 'backbone']};
        expect(calculateTechnologiesScore(company, prefs)).to.equal(DEFAULT_SCORE);
    });
    test('Returns average score if 1 technology in common', () => {
        const company = {technologies: ['java', 'react']};
        expect(calculateTechnologiesScore(company, prefs)).to.equal(AVERAGE_SCORE);
    });
    test('Returns 4.5 score if 2 technologies in common', () => {
        const company = {technologies: ['nodejs', 'react']};
        expect(calculateTechnologiesScore(company, prefs)).to.equal(4.5);
    });
    test('Returns highest score if more than 2 technologies in common', () => {
        const company = {technologies: ['nodejs', 'react', 'kafka']};
        expect(calculateTechnologiesScore(company, prefs)).to.equal(HIGHEST_SCORE);
    });
});

describe('Title score', () => {
    const prefs = {
        title: 'senior fullstack developer'
    };

    test('Returns default score if no intersection with preferred title', () => {
        const company = { title: 'midlevel frontend engineer' };
        expect(calculateTitleScore(company, prefs)).to.equal(DEFAULT_SCORE);
    });
    test('Returns average score if minor intersection', () => {
        const company = { title: 'senior frontend developer' };
        expect(calculateTitleScore(company, prefs)).to.equal(AVERAGE_SCORE);
    });
    test('Returns highest score if full intersection', () => {
        const company = { title: 'senior fullstack developer' };
        expect(calculateTitleScore(company, prefs)).to.equal(HIGHEST_SCORE);
    });

});