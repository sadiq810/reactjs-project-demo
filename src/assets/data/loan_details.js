const types = [
    {
        id: 1,
        title: 'Student Loan Refinance',
        detail: 'Variable rates as low as 2.25% APR with autopay',
        type: 'educational',
        sub_types: [
            'Student Loan Refinance',
            'Undergraduate Loans',
            'Parent Loans',
            'Graduate Loans',
            'Law & MBA Loans'
        ]
    },
    {
        id: 2,
        title: 'Private Student Loans',
        detail: 'Variable rates as low as 1.84% APR with autopay',
        type: 'educational',
        sub_types: [
            'Student Loan Refinance',
            'Undergraduate Loans',
            'Parent Loans',
            'Graduate Loans',
            'Law & MBA Loans'
        ]
    },
    {
        id: 3,
        title: 'Parent PLUS Refinance',
        detail: 'Variable rates as low as 2.25% APR with autopay',
        type: 'educational',
        sub_types: [
            'Student Loan Refinance',
            'Undergraduate Loans',
            'Parent Loans',
            'Graduate Loans',
            'Law & MBA Loans'
        ]
    },
    {
        id: 4,
        title: 'Resident Refinance',
        detail: 'Variable rates as low as 2.375% APR with autopay',
        type: 'educational',
        sub_types: [
            'Student Loan Refinance',
            'Undergraduate Loans',
            'Parent Loans',
            'Graduate Loans',
            'Law & MBA Loans'
        ]
    },
    {
        id: 5,
        title: 'Personal Loans',
        detail: 'Fixed rates as low as 5.99% APR with autopay',
        type: 'personal',
        sub_types: [
            'Student Loan Refinance',
            'Undergraduate Loans',
            'Parent Loans',
            'Graduate Loans',
            'Law & MBA Loans'
        ]
    },
    {
        id: 6,
        title: 'Home Loans',
        detail: 'Check your rate in 2 minutes',
        type: 'personal',
        sub_types: [
            'Student Loan Refinance',
            'Undergraduate Loans',
            'Parent Loans',
            'Graduate Loans',
            'Law & MBA Loans'
        ]
    },
    {
        id: 7,
        title: 'Mortgage Refinance',
        detail: 'No Hidden fee',
        type: 'personal',
        sub_types: [
            'Student Loan Refinance',
            'Undergraduate Loans',
            'Parent Loans',
            'Graduate Loans',
            'Law & MBA Loans'
        ]
    },
];

const loanGoals = [
    'Lower my interest rate',
    'Get out of debt faster',
    'Lower my monthly payment',
    'Consolidate my student loan',
    'All of the above'
];

const loans_refinancing = [
    'Federal',
    'Mix of both',
    'Private'
]

const employment_statuses = [
    {
        id: 1,
        title: 'Employed',
        description: 'I work for a company nad receive a year-end W2 every tax season.'
    },{
        id: 2,
        title: 'Self Employed',
        description: 'I\'m a 1099 contractor, sole proprietor, or own 25% .'
    },{
        id: 3,
        title: 'Future',
        description: 'I have an offer letter to start a new job within 3 months.'
    },{
        id: 4,
        title: 'Retired',
        description: 'I receive 1099-R, social security, or 402k income .'
    },{
        id: 5,
        title: 'Not employed',
        description: ''
    },
]

export {types, loanGoals, loans_refinancing, employment_statuses};
