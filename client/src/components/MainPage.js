import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './MainPage.scss';

const companies = [
    {
        id: 'hhfhfhfh',
        name: "New Relic",
        link: "https://www.linkedin.com/company/new-relic-inc-/",
        industry: "dev tech",
        ceo: "",
        known_members: ["Linoy Zaga"],
        technologies: ["react", "python"],
        location: "Tel-Aviv",
        location_score: 4,
        hybridity: 0,
        size: [1000, 5000],
        status: "public",
        title: "Senior Fullstack Engineer",
        glassdoor_score: 5,
        glassdoor_comment: "Positive",
    },
    {
        id: 'sdkjflskfj',
        name: "New Relic",
        link: "https://www.linkedin.com/company/new-relic-inc-/",
        industry: "dev tech",
        ceo: "",
        known_members: ["Linoy Zaga"],
        technologies: ["react", "python"],
        location: "Tel-Aviv",
        location_score: 4,
        hybridity: 0,
        size: [1000, 5000],
        status: "public",
        title: "Senior Fullstack Engineer",
        glassdoor_score: 5,
        glassdoor_comment: "Positive",
    },
];

const Company = ({name}) => (
    <Card sx={{ minWidth: 275, maxWidth: 400 }}>
        <CardContent>
            <div>{name}</div>
        </CardContent>
    </Card>
);

const MainPage = () => {
    return (
        <div className="main-page">
            {companies.map(company => <Company key={company.id} {...company} />)}
        </div>
    );
};

export default MainPage;