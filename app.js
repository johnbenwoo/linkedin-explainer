// Generation definitions
const generations = {
    silent: { start: 1928, end: 1945, name: 'Silent Generation' },
    boomer: { start: 1946, end: 1964, name: 'Baby Boomer' },
    genx: { start: 1965, end: 1980, name: 'Generation X' },
    millennial: { start: 1981, end: 1996, name: 'Millennial' },
    genz: { start: 1997, end: 2012, name: 'Generation Z' },
    genalpha: { start: 2013, end: 2025, name: 'Generation Alpha' }
};

// Regional work culture characteristics
const regionalCultures = {
    northeast: {
        name: 'Northeast',
        workStyle: 'fast-paced, competitive, credential-focused',
        values: 'prestige, networking, institutional reputation',
        context: 'Major financial and media hubs with high cost of living drive ambitious career trajectories'
    },
    southeast: {
        name: 'Southeast',
        workStyle: 'relationship-driven, growing tech presence, traditional industries',
        values: 'loyalty, community ties, work-life balance',
        context: 'Mix of traditional industries and emerging tech hubs with lower cost of living'
    },
    midwest: {
        name: 'Midwest',
        workStyle: 'steady, practical, manufacturing and agriculture roots',
        values: 'reliability, humility, long-term employment',
        context: 'Strong manufacturing heritage with growing healthcare and education sectors'
    },
    southwest: {
        name: 'Southwest',
        workStyle: 'entrepreneurial, energy sector, rapid growth',
        values: 'independence, opportunity, practical results',
        context: 'Business-friendly environment with strong energy and aerospace industries'
    },
    west: {
        name: 'West Coast',
        workStyle: 'innovative, casual, startup culture',
        values: 'disruption, flexibility, mission-driven work',
        context: 'Tech industry dominance shapes expectations around equity, perks, and company mission'
    },
    mountain: {
        name: 'Mountain West',
        workStyle: 'outdoor-oriented, remote work pioneers, lifestyle-focused',
        values: 'autonomy, quality of life, sustainability',
        context: 'Growing tech presence attracted by quality of life and outdoor access'
    },
    remote: {
        name: 'Remote/Distributed',
        workStyle: 'asynchronous, results-oriented, location-independent',
        values: 'flexibility, autonomy, output over presence',
        context: 'Post-2020 work model prioritizing results and work-life integration'
    }
};

// Industry characteristics
const industries = {
    tech: {
        name: 'Technology',
        culture: 'move fast, disrupt, equity-driven compensation',
        meaning: 'Building the future, solving problems at scale, making an impact through innovation'
    },
    finance: {
        name: 'Finance',
        culture: 'high performance, bonus-driven, prestige-focused',
        meaning: 'Financial security, intellectual challenge, enabling economic growth'
    },
    healthcare: {
        name: 'Healthcare',
        culture: 'mission-driven, hierarchical, stability-focused',
        meaning: 'Helping others, making a tangible difference, job security'
    },
    education: {
        name: 'Education',
        culture: 'purpose-driven, collaborative, tenure-focused',
        meaning: 'Shaping future generations, intellectual fulfillment, giving back'
    },
    manufacturing: {
        name: 'Manufacturing',
        culture: 'process-oriented, union presence, tangible output',
        meaning: 'Building real things, providing for family, craftsmanship'
    },
    retail: {
        name: 'Retail',
        culture: 'customer-focused, fast-paced, metrics-driven',
        meaning: 'Customer service, stepping stone, flexibility'
    },
    consulting: {
        name: 'Consulting',
        culture: 'client-focused, travel-heavy, up-or-out',
        meaning: 'Variety of problems, accelerated learning, exit opportunities'
    },
    government: {
        name: 'Government',
        culture: 'stable, process-oriented, mission-focused',
        meaning: 'Public service, job security, benefits, making policy impact'
    },
    nonprofit: {
        name: 'Nonprofit',
        culture: 'mission-first, resource-constrained, impact-focused',
        meaning: 'Making a difference, aligned values, purpose over profit'
    },
    media: {
        name: 'Media/Entertainment',
        culture: 'creative, competitive, project-based',
        meaning: 'Creative expression, cultural impact, storytelling'
    },
    realestate: {
        name: 'Real Estate',
        culture: 'entrepreneurial, commission-driven, relationship-based',
        meaning: 'Financial independence, helping people find homes, flexibility'
    },
    legal: {
        name: 'Legal',
        culture: 'billable hours, partner track, precedent-focused',
        meaning: 'Justice, intellectual challenge, professional prestige'
    },
    energy: {
        name: 'Energy',
        culture: 'capital-intensive, safety-focused, cyclical',
        meaning: 'Powering society, technical challenges, strong compensation'
    },
    agriculture: {
        name: 'Agriculture',
        culture: 'seasonal, family-business, land-connected',
        meaning: 'Feeding people, land stewardship, family legacy'
    },
    hospitality: {
        name: 'Hospitality',
        culture: 'service-oriented, guest-focused, variable hours',
        meaning: 'Creating experiences, people connection, creativity'
    },
    construction: {
        name: 'Construction',
        culture: 'project-based, physical, skilled trades',
        meaning: 'Building tangible things, craftsmanship, good wages without degree'
    },
    transportation: {
        name: 'Transportation',
        culture: 'logistics-focused, regulated, essential service',
        meaning: 'Keeping things moving, independence, essential work'
    },
    other: {
        name: 'Other',
        culture: 'varies widely',
        meaning: 'Depends on specific field and personal motivation'
    }
};

// Job title patterns and explanations
const jobPatterns = {
    // C-Suite
    ceo: {
        pattern: /\b(ceo|chief executive officer)\b/i,
        base: "runs the entire company",
        detail: "Makes the final calls on major decisions, sets the company's direction, and is accountable to the board and shareholders"
    },
    cto: {
        pattern: /\b(cto|chief technology officer)\b/i,
        base: "leads all technology decisions",
        detail: "Decides what technology the company uses, oversees engineering teams, and ensures tech supports business goals"
    },
    cfo: {
        pattern: /\b(cfo|chief financial officer)\b/i,
        base: "manages all the company's money",
        detail: "Oversees budgets, financial planning, investor relations, and ensures the company stays financially healthy"
    },
    coo: {
        pattern: /\b(coo|chief operating officer)\b/i,
        base: "keeps the company running day-to-day",
        detail: "Makes sure all departments work together smoothly and operations are efficient"
    },
    cmo: {
        pattern: /\b(cmo|chief marketing officer)\b/i,
        base: "leads how the company presents itself to the world",
        detail: "Oversees advertising, brand strategy, and how customers perceive the company"
    },

    // VP/Director Level
    vp: {
        pattern: /\b(vp|vice president)\b/i,
        base: "leads a major part of the company",
        detail: "Manages multiple teams, sets strategy for their area, and reports to C-suite executives"
    },
    director: {
        pattern: /\bdirector\b/i,
        base: "oversees a department or large team",
        detail: "Sets goals, manages managers, and connects team work to company strategy"
    },

    // Manager titles
    seniorManager: {
        pattern: /\bsenior\s+(manager|mgr)\b/i,
        base: "manages multiple teams or a complex area",
        detail: "Has significant experience and may manage other managers"
    },
    manager: {
        pattern: /\b(manager|mgr)\b/i,
        base: "leads a team of people",
        detail: "Assigns work, develops team members, conducts reviews, and ensures team hits its goals"
    },

    // Product roles
    productManager: {
        pattern: /\bproduct\s+(manager|mgr)\b/i,
        base: "decides what gets built and why",
        detail: "Talks to customers, prioritizes features, works with engineers to build the right thing, and measures success"
    },
    productOwner: {
        pattern: /\bproduct\s+owner\b/i,
        base: "manages the backlog of work for a development team",
        detail: "Writes user stories, prioritizes what the team builds next, and represents customer needs"
    },

    // Engineering roles
    softwareEngineer: {
        pattern: /\b(software|application)\s+(engineer|developer|dev)\b/i,
        base: "writes the code that makes software work",
        detail: "Builds features, fixes bugs, and creates the technology products people use"
    },
    seniorEngineer: {
        pattern: /\bsenior\s+(software\s+)?(engineer|developer)\b/i,
        base: "writes complex code and guides technical decisions",
        detail: "Tackles the hardest problems, mentors junior engineers, and shapes how systems are built"
    },
    staffEngineer: {
        pattern: /\bstaff\s+(software\s+)?(engineer|developer)\b/i,
        base: "shapes technical direction across teams",
        detail: "Solves problems that span multiple teams, sets technical standards, and influences architecture"
    },
    principalEngineer: {
        pattern: /\bprincipal\s+(software\s+)?(engineer|developer)\b/i,
        base: "defines technical strategy at the highest level",
        detail: "Makes decisions affecting the entire engineering organization and mentors senior engineers"
    },
    frontendEngineer: {
        pattern: /\b(front[\s-]?end|ui)\s+(engineer|developer)\b/i,
        base: "builds what users see and interact with",
        detail: "Creates the visual interface, buttons, and everything you click or tap in an app or website"
    },
    backendEngineer: {
        pattern: /\b(back[\s-]?end|server)\s+(engineer|developer)\b/i,
        base: "builds the systems running behind the scenes",
        detail: "Handles data storage, business logic, and the infrastructure that powers applications"
    },
    fullstackEngineer: {
        pattern: /\bfull[\s-]?stack\s+(engineer|developer)\b/i,
        base: "builds both the visible interface and behind-the-scenes systems",
        detail: "Works on everything from what users see to how data is stored and processed"
    },
    devops: {
        pattern: /\b(devops|site reliability|sre)\b/i,
        base: "keeps software systems running reliably",
        detail: "Automates deployments, monitors systems, and ensures applications stay up and perform well"
    },
    dataEngineer: {
        pattern: /\bdata\s+engineer\b/i,
        base: "builds systems that move and organize data",
        detail: "Creates pipelines that collect, clean, and make data available for analysis"
    },
    mlEngineer: {
        pattern: /\b(machine learning|ml)\s+engineer\b/i,
        base: "builds systems that learn from data",
        detail: "Creates AI models that can recognize patterns, make predictions, or automate decisions"
    },

    // Data roles
    dataScientist: {
        pattern: /\bdata\s+scientist\b/i,
        base: "finds insights hidden in data",
        detail: "Uses statistics and coding to answer questions, predict outcomes, and help make better decisions"
    },
    dataAnalyst: {
        pattern: /\bdata\s+analyst\b/i,
        base: "turns data into understandable information",
        detail: "Creates reports, dashboards, and answers business questions using data"
    },
    businessAnalyst: {
        pattern: /\bbusiness\s+analyst\b/i,
        base: "bridges business needs and technical solutions",
        detail: "Understands what the business needs and translates that into requirements for tech teams"
    },

    // Design roles
    uxDesigner: {
        pattern: /\b(ux|user experience)\s+designer\b/i,
        base: "designs how products feel to use",
        detail: "Researches user needs, creates wireframes, and ensures products are easy and pleasant to use"
    },
    uiDesigner: {
        pattern: /\b(ui|user interface)\s+designer\b/i,
        base: "designs how products look",
        detail: "Creates the visual design, colors, typography, and aesthetic of digital products"
    },
    productDesigner: {
        pattern: /\bproduct\s+designer\b/i,
        base: "designs the complete product experience",
        detail: "Combines UX research, visual design, and prototyping to shape how products work and look"
    },

    // Marketing roles
    marketingManager: {
        pattern: /\bmarketing\s+(manager|mgr)\b/i,
        base: "plans and executes how to reach customers",
        detail: "Creates campaigns, manages budgets, and tracks what marketing efforts work"
    },
    contentMarketing: {
        pattern: /\bcontent\s+(marketing|strategist|manager)\b/i,
        base: "creates content that attracts customers",
        detail: "Writes blogs, manages social media, and creates materials that draw people to the company"
    },
    brandManager: {
        pattern: /\bbrand\s+(manager|mgr)\b/i,
        base: "protects and grows the company's image",
        detail: "Ensures consistent messaging and develops strategies to build brand recognition"
    },
    growthMarketing: {
        pattern: /\bgrowth\s+(marketing|manager|hacker)\b/i,
        base: "finds creative ways to get more users",
        detail: "Runs experiments, analyzes data, and finds scalable ways to acquire and retain customers"
    },

    // Sales roles
    accountExecutive: {
        pattern: /\baccount\s+executive\b/i,
        base: "sells products or services to businesses",
        detail: "Builds relationships with potential customers, demonstrates value, and closes deals"
    },
    salesRep: {
        pattern: /\b(sales\s+rep|sales\s+representative)\b/i,
        base: "sells directly to customers",
        detail: "Reaches out to prospects, explains products, and helps customers make buying decisions"
    },
    salesManager: {
        pattern: /\bsales\s+(manager|mgr)\b/i,
        base: "leads a team of salespeople",
        detail: "Sets quotas, coaches reps, and ensures the team hits revenue targets"
    },
    accountManager: {
        pattern: /\baccount\s+manager\b/i,
        base: "maintains relationships with existing customers",
        detail: "Ensures customer satisfaction, handles renewals, and identifies upsell opportunities"
    },
    customerSuccess: {
        pattern: /\bcustomer\s+success\b/i,
        base: "helps customers get value from the product",
        detail: "Onboards new customers, solves problems, and ensures they achieve their goals"
    },

    // HR roles
    recruiter: {
        pattern: /\b(recruiter|talent\s+acquisition)\b/i,
        base: "finds and hires new employees",
        detail: "Sources candidates, conducts interviews, and helps bring the right people into the company"
    },
    hrManager: {
        pattern: /\b(hr|human\s+resources)\s+(manager|mgr)\b/i,
        base: "manages employee-related programs",
        detail: "Handles policies, benefits, employee relations, and ensures a healthy workplace"
    },
    hrBP: {
        pattern: /\bhr\s+business\s+partner\b/i,
        base: "connects HR strategy to business needs",
        detail: "Works with leaders to solve people problems and align talent with business goals"
    },

    // Finance roles
    financialAnalyst: {
        pattern: /\bfinancial\s+analyst\b/i,
        base: "analyzes company finances and investments",
        detail: "Creates financial models, evaluates investments, and provides data for business decisions"
    },
    controller: {
        pattern: /\bcontroller\b/i,
        base: "oversees all accounting operations",
        detail: "Ensures accurate financial reporting, manages accounting team, and maintains controls"
    },
    accountant: {
        pattern: /\baccountant\b/i,
        base: "tracks and reports on money",
        detail: "Records transactions, prepares financial statements, and ensures tax compliance"
    },

    // Operations roles
    operationsManager: {
        pattern: /\boperations\s+(manager|mgr)\b/i,
        base: "keeps day-to-day business running smoothly",
        detail: "Improves processes, manages resources, and solves operational problems"
    },
    projectManager: {
        pattern: /\bproject\s+(manager|mgr)\b/i,
        base: "keeps projects on track",
        detail: "Plans timelines, coordinates teams, manages risks, and ensures deliverables are met"
    },
    programManager: {
        pattern: /\bprogram\s+(manager|mgr)\b/i,
        base: "coordinates multiple related projects",
        detail: "Aligns projects to strategic goals, manages dependencies, and oversees program delivery"
    },
    scrum: {
        pattern: /\bscrum\s+master\b/i,
        base: "helps development teams work effectively",
        detail: "Facilitates agile practices, removes obstacles, and helps the team improve"
    },

    // Legal roles
    lawyer: {
        pattern: /\b(lawyer|attorney|counsel)\b/i,
        base: "provides legal advice and representation",
        detail: "Reviews contracts, ensures compliance, and protects the company from legal risk"
    },
    paralegal: {
        pattern: /\bparalegal\b/i,
        base: "supports lawyers with legal work",
        detail: "Researches cases, prepares documents, and helps manage legal processes"
    },

    // Healthcare roles
    nurse: {
        pattern: /\b(rn|nurse|registered nurse)\b/i,
        base: "provides direct patient care",
        detail: "Monitors patients, administers treatments, and coordinates with doctors on care"
    },
    physician: {
        pattern: /\b(physician|doctor|md)\b/i,
        base: "diagnoses and treats patients",
        detail: "Examines patients, orders tests, prescribes treatments, and manages health conditions"
    },
    healthcareAdmin: {
        pattern: /\b(healthcare|hospital)\s+admin/i,
        base: "manages healthcare facility operations",
        detail: "Oversees staff, budgets, and ensures quality care delivery"
    },

    // Consultant
    consultant: {
        pattern: /\bconsultant\b/i,
        base: "advises companies on specific problems",
        detail: "Analyzes situations, recommends solutions, and helps implement changes"
    },

    // Research
    researcher: {
        pattern: /\bresearch(er)?\b/i,
        base: "investigates questions systematically",
        detail: "Designs studies, collects data, and contributes new knowledge to their field"
    },

    // Architect
    architect: {
        pattern: /\barchitect\b/i,
        base: "designs complex systems or structures",
        detail: "Creates blueprints for how systems, buildings, or solutions should be built"
    },

    // Coordinator
    coordinator: {
        pattern: /\bcoordinator\b/i,
        base: "keeps activities and people organized",
        detail: "Schedules, communicates, and ensures things happen when and how they should"
    },

    // Associate
    associate: {
        pattern: /\bassociate\b/i,
        base: "performs core work in their field",
        detail: "Entry to mid-level role doing hands-on work in their specialty"
    },

    // Specialist
    specialist: {
        pattern: /\bspecialist\b/i,
        base: "has deep expertise in a specific area",
        detail: "Focuses on one aspect of work, often as a subject matter expert"
    },

    // Analyst (generic)
    analyst: {
        pattern: /\banalyst\b/i,
        base: "examines information to support decisions",
        detail: "Collects data, identifies patterns, and creates reports that help guide business choices"
    },

    // Engineer (generic)
    engineer: {
        pattern: /\bengineer\b/i,
        base: "designs and builds technical solutions",
        detail: "Applies technical knowledge to solve problems and create systems"
    },

    // Intern
    intern: {
        pattern: /\bintern\b/i,
        base: "learning the job through hands-on experience",
        detail: "Temporary role focused on gaining skills and exposure to professional work"
    },

    // Founder
    founder: {
        pattern: /\b(founder|co-founder)\b/i,
        base: "started the company",
        detail: "Created the business, sets vision, and wears many hats especially in early stages"
    }
};

// Seniority modifiers
const seniorityLevels = {
    chief: { pattern: /\bchief\b/i, level: 'executive', modifier: 'at the highest level of' },
    executive: { pattern: /\bexecutive\b/i, level: 'executive', modifier: 'at the executive level of' },
    senior: { pattern: /\bsenior\b/i, level: 'senior', modifier: 'with significant experience in' },
    lead: { pattern: /\blead\b/i, level: 'lead', modifier: 'leading a team focused on' },
    principal: { pattern: /\bprincipal\b/i, level: 'principal', modifier: 'at an advanced expert level of' },
    staff: { pattern: /\bstaff\b/i, level: 'staff', modifier: 'at a senior technical level of' },
    junior: { pattern: /\bjunior\b/i, level: 'junior', modifier: 'early in their career doing' },
    entry: { pattern: /\bentry[\s-]?level\b/i, level: 'entry', modifier: 'just starting out in' },
    associate: { pattern: /\bassociate\b/i, level: 'associate', modifier: 'developing skills in' }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateBirthYears();
    setupEventListeners();
});

function populateBirthYears() {
    const select = document.getElementById('birth-year');
    const currentYear = new Date().getFullYear();
    const startYear = 1940;
    const endYear = currentYear - 13; // Minimum working age context

    for (let year = endYear; year >= startYear; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        select.appendChild(option);
    }
}

function setupEventListeners() {
    const birthYearSelect = document.getElementById('birth-year');
    birthYearSelect.addEventListener('change', updateGenerationLabel);

    const explainBtn = document.getElementById('explain-btn');
    explainBtn.addEventListener('click', handleLinkedInExplain);

    const explainManualBtn = document.getElementById('explain-manual-btn');
    explainManualBtn.addEventListener('click', handleManualExplain);
}

function updateGenerationLabel() {
    const birthYear = parseInt(document.getElementById('birth-year').value);
    const label = document.getElementById('generation-label');

    if (!birthYear) {
        label.textContent = '';
        return;
    }

    const gen = getGeneration(birthYear);
    label.textContent = gen ? `You're a ${gen.name}` : '';
}

function getGeneration(birthYear) {
    for (const [key, gen] of Object.entries(generations)) {
        if (birthYear >= gen.start && birthYear <= gen.end) {
            return { key, ...gen };
        }
    }
    return null;
}

function handleLinkedInExplain() {
    const linkedInUrl = document.getElementById('linkedin-url').value.trim();
    const birthYear = parseInt(document.getElementById('birth-year').value);

    if (!linkedInUrl) {
        alert('Please enter a LinkedIn profile URL');
        return;
    }

    if (!birthYear) {
        alert('Please select your birth year');
        return;
    }

    // Extract username from LinkedIn URL for display purposes
    const username = extractLinkedInUsername(linkedInUrl);

    alert(`To fully analyze a LinkedIn profile, this app would need to access the LinkedIn API or use a scraping service. For now, please use the manual entry form below to enter the job details you see on the profile for "${username}".`);
}

function extractLinkedInUsername(url) {
    const match = url.match(/linkedin\.com\/in\/([^\/\?]+)/i);
    return match ? match[1] : 'unknown';
}

function handleManualExplain() {
    const jobTitle = document.getElementById('job-title').value.trim();
    const company = document.getElementById('company').value.trim();
    const industry = document.getElementById('industry').value;
    const theirLocation = document.getElementById('their-location').value;
    const birthYear = parseInt(document.getElementById('birth-year').value);
    const yourLocation = document.getElementById('your-location').value;

    if (!jobTitle) {
        alert('Please enter a job title');
        return;
    }

    if (!birthYear) {
        alert('Please select your birth year');
        return;
    }

    const results = generateExplanation({
        jobTitle,
        company,
        industry,
        theirLocation,
        birthYear,
        yourLocation
    });

    displayResults(results);
}

function generateExplanation({ jobTitle, company, industry, theirLocation, birthYear, yourLocation }) {
    const userGeneration = getGeneration(birthYear);
    const industryInfo = industries[industry] || industries.other;
    const theirRegion = regionalCultures[theirLocation];
    const yourRegion = regionalCultures[yourLocation];

    // Parse the job title
    const jobInfo = parseJobTitle(jobTitle);

    // Generate the "What They Do" explanation
    const whatTheyDo = generateWhatTheyDo(jobInfo, company, industryInfo, userGeneration);

    // Generate the "Why They Do It" explanation
    const whyTheyDoIt = generateWhyTheyDoIt(jobInfo, company, industryInfo, theirRegion, userGeneration);

    // Generate context information
    const contextInfo = generateContext(userGeneration, industryInfo, theirRegion, yourRegion);

    return { whatTheyDo, whyTheyDoIt, contextInfo };
}

function parseJobTitle(title) {
    let matchedRole = null;
    let seniority = null;

    // Check for seniority first
    for (const [key, level] of Object.entries(seniorityLevels)) {
        if (level.pattern.test(title)) {
            seniority = { key, ...level };
            break;
        }
    }

    // Check for job patterns
    for (const [key, role] of Object.entries(jobPatterns)) {
        if (role.pattern.test(title)) {
            matchedRole = { key, ...role };
            break;
        }
    }

    return {
        original: title,
        role: matchedRole,
        seniority
    };
}

function generateWhatTheyDo(jobInfo, company, industryInfo, userGeneration) {
    let explanation = '';

    if (jobInfo.role) {
        // We have a recognized role
        const role = jobInfo.role;

        if (jobInfo.seniority && !role.base.includes(jobInfo.seniority.key)) {
            explanation = `<p>This person <span class="highlight">${role.base}</span>, ${jobInfo.seniority.modifier} this area.</p>`;
        } else {
            explanation = `<p>This person <span class="highlight">${role.base}</span>.</p>`;
        }

        explanation += `<p>${role.detail}.</p>`;

        // Add generation-appropriate analogy
        const analogy = getGenerationAnalogy(jobInfo, userGeneration);
        if (analogy) {
            explanation += `<div class="analogy">${analogy}</div>`;
        }

        // Add company context if provided
        if (company) {
            explanation += `<p>At ${company}, this likely means ${getCompanyContext(company, industryInfo, jobInfo)}.</p>`;
        }
    } else {
        // Unknown role - provide general explanation
        explanation = `<p>"${jobInfo.original}" is the official title, but here's what that probably means in plain terms:</p>`;

        if (jobInfo.seniority) {
            explanation += `<p>The "${jobInfo.seniority.key}" part means they have ${getSeniorityMeaning(jobInfo.seniority)}.</p>`;
        }

        explanation += `<p>In the ${industryInfo.name} industry, someone with this title likely ${getIndustryRoleGuess(jobInfo.original, industryInfo)}.</p>`;
    }

    return explanation;
}

function generateWhyTheyDoIt(jobInfo, company, industryInfo, theirRegion, userGeneration) {
    let explanation = '';

    // Start with generational perspective on work meaning
    explanation += `<p><strong>Through your ${userGeneration.name} lens:</strong> ${getGenerationalWorkView(userGeneration)}</p>`;

    // Add industry-specific meaning
    explanation += `<p><strong>In ${industryInfo.name}:</strong> People often work in this field because of ${industryInfo.meaning.toLowerCase()}. The culture tends to be ${industryInfo.culture}.</p>`;

    // Add regional context if available
    if (theirRegion) {
        explanation += `<p><strong>In the ${theirRegion.name}:</strong> ${theirRegion.context}. Work style here is typically ${theirRegion.workStyle}, with emphasis on ${theirRegion.values}.</p>`;
    }

    // Add role-specific motivation
    if (jobInfo.role) {
        const roleMotivation = getRoleMotivation(jobInfo.role.key, industryInfo.name);
        explanation += `<p><strong>For this specific role:</strong> ${roleMotivation}</p>`;
    }

    // Add seniority-based insight
    if (jobInfo.seniority) {
        const seniorityMotivation = getSeniorityMotivation(jobInfo.seniority.level);
        explanation += `<p><strong>At their career stage:</strong> ${seniorityMotivation}</p>`;
    }

    // Add company-specific insight if provided
    if (company) {
        const companyMotivation = getCompanyMotivation(company);
        if (companyMotivation) {
            explanation += `<p><strong>Working at ${company}:</strong> ${companyMotivation}</p>`;
        }
    }

    return explanation;
}

function getGenerationalWorkView(generation) {
    const views = {
        silent: "Your generation often views work as a duty and source of stability. You may see jobs as straightforward: you work hard, stay loyal, and get rewarded. This person's role might seem overly complicated or unnecessarily titled compared to the clear job categories you grew up with.",
        boomer: "Your generation helped build the corporate ladder and professional achievement culture. Work has been central to identity. You might recognize the ambition in this role, though some newer titles might seem like fancy names for jobs that have always existed.",
        genx: "Your generation pioneered work-life balance and saw corporate loyalty as a two-way street that companies often broke first. You likely appreciate practical skills over titles and might be skeptical of roles that seem more about status than substance.",
        millennial: "Your generation entered the workforce during economic uncertainty and helped normalize job-hopping for growth. You understand that titles don't always match reality and that purpose often matters as much as pay. This role's meaning to them may be quite different from what it seems.",
        genz: "Your generation sees work as one part of life, not the whole thing. You're pragmatic about the employer-employee relationship and value authenticity. You might wonder if fancy titles are really necessary or if they're just corporate theater.",
        genalpha: "You're just beginning to understand careers. Jobs might seem mysterious or confusing. This explanation aims to make adult work make sense in terms you can relate to."
    };
    return views[generation.key] || views.millennial;
}

function getRoleMotivation(roleKey, industryName) {
    const motivations = {
        ceo: "People become CEOs for power, legacy-building, and the challenge of steering an entire organization. The pressure is immense, but so is the impact.",
        cto: "CTOs are driven by the chance to shape technology strategy at scale. They've typically excelled as engineers and want to influence technical direction company-wide.",
        productManager: "Product managers often love being at the intersection of technology, business, and user needs. They're motivated by seeing products come to life and solve real problems.",
        softwareEngineer: "Software engineers are often driven by the satisfaction of building things, solving puzzles, and seeing their code used by real people. The field also offers strong compensation.",
        dataScientist: "Data scientists are motivated by uncovering hidden insights and making data-driven impact. There's intellectual satisfaction in finding patterns others miss.",
        uxDesigner: "UX designers care deeply about making things easy and enjoyable to use. They're motivated by empathy for users and the craft of good design.",
        accountExecutive: "Salespeople are often motivated by the direct link between effort and reward. Commission structures mean their income reflects their hustle.",
        consultant: "Consultants are drawn to variety, learning, and being the expert in the room. The fast pace and exposure to multiple industries keeps things interesting.",
        recruiter: "Recruiters are motivated by connecting people with opportunities. It's a people-centric role where success means changing someone's career trajectory.",
        nurse: "Healthcare workers are typically driven by a genuine desire to help others during vulnerable moments. It's demanding work with tangible human impact.",
        founder: "Founders are motivated by building something from nothing, the autonomy of being their own boss, and the potential upside. It's high risk, high reward.",
        manager: "Managers are often motivated by developing others and seeing their team succeed. Some also pursue management for career progression and compensation."
    };

    return motivations[roleKey] || `People in this role are typically motivated by the core work itself, career growth potential, and the specific culture of ${industryName}.`;
}

function getSeniorityMotivation(level) {
    const motivations = {
        executive: "At this level, they're motivated by influence, legacy, and compensation. They've proven themselves and now shape organizational direction.",
        senior: "With experience comes desire for more impact. They likely want meaningful projects, mentorship opportunities, and recognition for expertise.",
        lead: "They're transitioning from individual contributor to people leadership. Motivation often includes developing others while staying close to the work.",
        principal: "They've chosen depth over management. Motivation is often about solving the hardest problems and being the go-to expert.",
        staff: "Similar to principal, they value technical impact. They want to influence without managing and work on organization-wide challenges.",
        junior: "Early in career, motivation is learning, proving themselves, and building skills. They're often willing to work hard to establish credibility.",
        entry: "Just starting out, they're focused on getting experience and figuring out what they want. The job is as much about exploration as execution.",
        associate: "Building foundational skills and looking to move up. Motivated by learning, mentorship, and demonstrating they deserve more responsibility."
    };

    return motivations[level] || "At their career stage, they're balancing skill development, advancement opportunities, and finding work that's engaging.";
}

function getCompanyMotivation(company) {
    const companyLower = company.toLowerCase();

    // Big tech
    if (/google|alphabet/i.test(companyLower)) {
        return "Google employees often cite the prestige, compensation (including stock), and working on products used by billions. The culture emphasizes innovation and data-driven decisions.";
    }
    if (/meta|facebook/i.test(companyLower)) {
        return "Meta offers strong compensation and the chance to work at massive scale. Employees are building the future of social connection and, increasingly, VR/metaverse experiences.";
    }
    if (/amazon/i.test(companyLower)) {
        return "Amazon is known for intense work culture but strong career growth and leadership development. 'Customer obsession' and ownership are central values.";
    }
    if (/apple/i.test(companyLower)) {
        return "Apple employees work on products that are cultural icons. The secrecy and attention to detail create a unique environment for those who value craft and design excellence.";
    }
    if (/microsoft/i.test(companyLower)) {
        return "Microsoft has transformed under new leadership to be more collaborative and growth-minded. Employees get stability of a mature company with renewed innovation focus.";
    }
    if (/netflix/i.test(companyLower)) {
        return "Netflix is famous for its 'freedom and responsibility' culture. High performers thrive with autonomy, but the culture of candor and high expectations isn't for everyone.";
    }

    // Finance
    if (/goldman|morgan stanley|jpmorgan|jp morgan/i.test(companyLower)) {
        return "Working at a top investment bank means long hours but exceptional compensation, exit opportunities, and prestige. It's a proving ground for ambitious finance professionals.";
    }

    // Consulting
    if (/mckinsey|bain|bcg|boston consulting/i.test(companyLower)) {
        return "Top consulting firms offer accelerated learning, variety of problems, and strong exit opportunities. The travel and hours are demanding, but the skills and network are valuable.";
    }

    // Startups
    if (/startup|early[\s-]stage/i.test(companyLower)) {
        return "Startup employees trade stability for equity upside and the chance to build something new. They wear many hats and have outsized impact compared to bigger companies.";
    }

    return null;
}

function generateContext(userGeneration, industryInfo, theirRegion, yourRegion) {
    const items = [];

    // Your generation context
    items.push({
        title: 'Your Generation',
        content: `${userGeneration.name} (born ${userGeneration.start}-${userGeneration.end})`
    });

    // Their industry
    items.push({
        title: 'Their Industry',
        content: `${industryInfo.name} - ${industryInfo.culture.charAt(0).toUpperCase() + industryInfo.culture.slice(1)}`
    });

    // Their region
    if (theirRegion) {
        items.push({
            title: 'Their Region',
            content: `${theirRegion.name} - ${theirRegion.workStyle}`
        });
    }

    // Regional comparison if both provided
    if (theirRegion && yourRegion && theirRegion !== yourRegion) {
        items.push({
            title: 'Cultural Difference',
            content: `Their ${theirRegion.name} work culture (${theirRegion.values}) may differ from your ${yourRegion.name} perspective (${yourRegion.values})`
        });
    }

    return items;
}

function getGenerationAnalogy(jobInfo, generation) {
    if (!jobInfo.role) return null;

    const roleKey = jobInfo.role.key;

    const analogies = {
        silent: {
            productManager: "Think of them as the person who used to coordinate between the factory floor and management, making sure what got built was what customers actually wanted.",
            softwareEngineer: "They're like the technical specialists who used to design and build complex machinery, but their machines are made of code instead of metal.",
            uxDesigner: "Similar to industrial designers who made products easier to use, but for computer programs and websites.",
            dataScientist: "Like the statisticians and analysts who used to pore over ledgers and reports, but with much more powerful tools.",
            scrum: "They're essentially a meeting facilitator who keeps project teams organized - like a good floor supervisor for office workers."
        },
        boomer: {
            productManager: "They're like the brand managers you might remember from companies like P&G - they own a product's success from concept to market.",
            softwareEngineer: "Remember when computers took up entire rooms? They write the instructions that make today's computers work.",
            uxDesigner: "They're the ones making sure software is as intuitive as a well-designed car dashboard or kitchen appliance.",
            dataScientist: "Think of them as very advanced market researchers who use computers to find patterns in enormous amounts of information.",
            devops: "They're the IT department evolved - keeping all the computer systems running smoothly so the business never stops."
        },
        genx: {
            productManager: "They're the person who figures out what to build next - like a music producer who coordinates between the artists, studio, and label.",
            softwareEngineer: "They write code - the actual instructions that make apps and websites work. It's the evolution of the hacking and programming culture we grew up with.",
            uxDesigner: "They make sure software doesn't suck to use. Remember how frustrating early Windows could be? They fix that.",
            dataScientist: "They find meaningful patterns in big data. It's like being a detective but with spreadsheets and statistics instead of magnifying glasses.",
            mlEngineer: "They build AI that learns - like teaching a very smart but literal-minded computer to recognize patterns and make predictions."
        },
        millennial: {
            productManager: "They're the CEO of a product - deciding what gets built, why, and when, but without actually being anyone's boss.",
            softwareEngineer: "They write the code that makes the apps on your phone work. Everything digital you use was built by people like this.",
            uxDesigner: "They're obsessed with making products easy and pleasant to use. They're why some apps just feel right.",
            dataScientist: "They turn data into insights - figuring out what the numbers mean and what the company should do about it.",
            growthMarketing: "They find creative ways to get more users and keep them engaged. It's marketing, but data-driven and experimental."
        },
        genz: {
            productManager: "They decide what features get built in apps. They're not coding, but they're telling the coders what to build and why it matters.",
            softwareEngineer: "They build the apps and websites you use every day. Writing code is basically telling computers exactly what to do.",
            uxDesigner: "They make apps easy to use. When an app just makes sense without having to think about it, that's their work.",
            dataScientist: "They find patterns in data that help companies make better decisions. Lots of math and coding.",
            contentMarketing: "They create content (blogs, social, videos) that gets people interested in a brand. It's marketing but less salesy."
        },
        genalpha: {
            productManager: "They're like the person who decides what a new toy should do before it gets made. They talk to people about what they want and tell the builders.",
            softwareEngineer: "They write special instructions that tell computers and phones what to do. It's like writing a very detailed recipe that a robot follows exactly.",
            uxDesigner: "They make apps and websites easy to use. Like how your favorite games are easy to learn - someone designed it to be that way.",
            dataScientist: "They look at lots of numbers to find cool patterns. Like finding out which videos get the most views and why.",
            dataAnalyst: "They take big lists of information and make them into pictures and stories that adults can understand and use for decisions."
        }
    };

    const generationAnalogies = analogies[generation.key];
    if (generationAnalogies && generationAnalogies[roleKey]) {
        return generationAnalogies[roleKey];
    }

    return null;
}

function getCompanyContext(company, industryInfo, jobInfo) {
    const companyLower = company.toLowerCase();
    const role = jobInfo.role?.key || 'general';

    // Big tech specifics
    if (/google|amazon|meta|apple|microsoft|netflix/i.test(companyLower)) {
        return `working at massive scale. A single decision or feature might affect millions of users. The company likely has well-established processes and strong engineering culture.`;
    }

    // Startups
    if (/startup|early stage|seed|series a/i.test(companyLower)) {
        return `wearing many hats and moving fast. They probably work on multiple things at once and have significant ownership over their area. Things change quickly at startups.`;
    }

    // Consulting firms
    if (/mckinsey|bain|bcg|deloitte|accenture|pwc|ey|kpmg/i.test(companyLower)) {
        return `working with multiple clients on different problems. The work is varied but demanding, with lots of travel and tight deadlines.`;
    }

    // Default based on industry
    return `applying their skills to ${industryInfo.name.toLowerCase()} specifically. The company's focus shapes how they approach their role.`;
}

function getSeniorityMeaning(seniority) {
    const meanings = {
        executive: "top-level authority and company-wide responsibility",
        senior: "substantial experience, typically 5+ years, and can handle complex work independently",
        lead: "responsibility for guiding a team or workstream while still doing hands-on work",
        principal: "deep expertise recognized across the organization, equivalent to senior management in impact",
        staff: "advanced individual contributor status, working on cross-team problems",
        junior: "early-career status, still learning and being mentored",
        entry: "brand new to the field, in their first professional role",
        associate: "foundational level, building skills toward more independent work"
    };

    return meanings[seniority.level] || "a specific level of experience and responsibility";
}

function getIndustryRoleGuess(title, industryInfo) {
    const titleLower = title.toLowerCase();

    if (industryInfo.name === 'Technology') {
        return "works on building, maintaining, or improving digital products and systems";
    }

    if (industryInfo.name === 'Finance') {
        return "manages money, analyzes investments, or helps clients with financial decisions";
    }

    if (industryInfo.name === 'Healthcare') {
        return "provides care, supports medical operations, or works on health-related systems";
    }

    return "contributes to the company's core mission in their specialized area";
}

function displayResults(results) {
    const resultsSection = document.getElementById('results');
    const whatTheyDoEl = document.getElementById('what-they-do');
    const whyTheyDoItEl = document.getElementById('why-they-do-it');
    const contextInfoEl = document.getElementById('context-info');

    whatTheyDoEl.innerHTML = results.whatTheyDo;
    whyTheyDoItEl.innerHTML = results.whyTheyDoIt;

    // Build context grid
    contextInfoEl.innerHTML = results.contextInfo.map(item => `
        <div class="context-item">
            <h4>${item.title}</h4>
            <p>${item.content}</p>
        </div>
    `).join('');

    resultsSection.classList.remove('hidden');
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
