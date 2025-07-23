const placeholder = "/images/placeholder.jpg";

const timelineData = {
  2011: [
    { title: "Launch of Foundation", shortDescription: "Foundation established in Mumbai.", longDescription: "In 2011, CARE Foundation was launched with a mission to bring impactful change.", image: placeholder },
    { title: "First Medical Camp", shortDescription: "Community healthcare outreach.", longDescription: "The first medical camp provided essential checkups and medicines to underserved communities.", image: placeholder },
    { title: "School Kit Distribution", shortDescription: "Educational support to children.", longDescription: "Distributed school kits including books, uniforms, and stationery to underprivileged children.", image: placeholder },
    { title: "Community Kitchen Started", shortDescription: "Feeding the needy.", longDescription: "Launched a kitchen initiative to provide daily meals to homeless individuals.", image: placeholder },
  ],
  2012: [
    { title: "Women Empowerment Drive", shortDescription: "Campaign for women's rights.", longDescription: "Organized workshops and training sessions to promote gender equality.", image: placeholder },
    { title: "Health Awareness Program", shortDescription: "Focus on preventive healthcare.", longDescription: "Conducted seminars on hygiene, nutrition, and basic health practices.", image: placeholder },
    { title: "Clean Water Initiative", shortDescription: "Safe drinking water access.", longDescription: "Installed water purification units in rural communities lacking clean water.", image: placeholder },
    { title: "Skill Development Workshops", shortDescription: "Vocational training for youth.", longDescription: "Introduced skill-building workshops to enhance employability.", image: placeholder },
  ],
  2013: [
    { title: "Mobile Health Van Launched", shortDescription: "Healthcare on wheels.", longDescription: "Started mobile health vans to provide medical services in remote villages.", image: placeholder },
    { title: "Hygiene Kits for Children", shortDescription: "Promoting cleanliness.", longDescription: "Distributed hygiene kits with soap, toothpaste, and sanitary items for children.", image: placeholder },
    { title: "Rural Solar Project", shortDescription: "Renewable energy access.", longDescription: "Installed solar panels in rural schools to provide sustainable electricity.", image: placeholder },
    { title: "Eye Check-Up Camps", shortDescription: "Vision care for all.", longDescription: "Conducted eye check-ups and distributed free spectacles to the needy.", image: placeholder },
  ],
  2014: [
    { title: "Elderly Support Scheme", shortDescription: "Aid for senior citizens.", longDescription: "Launched financial and healthcare support schemes for elderly individuals.", image: placeholder },
    { title: "Mobile Library Van", shortDescription: "Books on wheels.", longDescription: "Introduced a mobile library to improve literacy in underserved areas.", image: placeholder },
    { title: "Digital Literacy Drive", shortDescription: "Teaching computer basics.", longDescription: "Organized classes to help communities learn basic computer skills.", image: placeholder },
    { title: "Monthly Food Distribution", shortDescription: "Combating hunger.", longDescription: "Initiated monthly ration distribution for impoverished families.", image: placeholder },
  ],
  2015: [
    { title: "Youth Employment Fair", shortDescription: "Connecting youth to jobs.", longDescription: "Hosted employment fairs to provide job opportunities for rural youth.", image: placeholder },
    { title: "Construction of Toilets", shortDescription: "Sanitation drive.", longDescription: "Built toilets in villages to promote hygiene and prevent diseases.", image: placeholder },
    { title: "Health Card Launch", shortDescription: "Affordable healthcare access.", longDescription: "Issued health cards providing subsidized treatments to underprivileged families.", image: placeholder },
    { title: "Expansion to 3 Villages", shortDescription: "Wider impact.", longDescription: "Extended CARE programs to three additional villages.", image: placeholder },
  ],
  2016: [
    { title: "Emergency Flood Relief", shortDescription: "Disaster response aid.", longDescription: "Provided immediate relief supplies during severe floods.", image: placeholder },
    { title: "Blood Donation Drives", shortDescription: "Saving lives through donations.", longDescription: "Organized blood donation camps across multiple districts.", image: placeholder },
    { title: "Menstrual Health Campaign", shortDescription: "Breaking taboos.", longDescription: "Launched awareness campaigns and distributed sanitary pads in rural areas.", image: placeholder },
    { title: "Children’s Art Competition", shortDescription: "Promoting creativity.", longDescription: "Held art competitions to encourage creative expression among children.", image: placeholder },
  ],
  2017: [
    { title: "Green School Project", shortDescription: "Eco-friendly campuses.", longDescription: "Transformed schools into green campuses with tree plantations and gardens.", image: placeholder },
    { title: "Vocational Training Center", shortDescription: "Skill enhancement hub.", longDescription: "Established a training center offering various vocational courses.", image: placeholder },
    { title: "Disability Awareness Week", shortDescription: "Inclusion advocacy.", longDescription: "Conducted events and workshops promoting disability inclusion and rights.", image: placeholder },
    { title: "Community Radio Launched", shortDescription: "Local information broadcast.", longDescription: "Introduced community radio for awareness and local education programs.", image: placeholder },
  ],
  2018: [
    { title: "Nutrition Kits for Mothers", shortDescription: "Maternal health support.", longDescription: "Distributed nutrition kits to expecting and new mothers.", image: placeholder },
    { title: "Farmer’s Support Program", shortDescription: "Agricultural aid.", longDescription: "Provided seeds, tools, and training to help farmers increase productivity.", image: placeholder },
    { title: "School Renovation", shortDescription: "Improving learning spaces.", longDescription: "Renovated rural schools with better classrooms and sanitation facilities.", image: placeholder },
    { title: "Annual Health Survey", shortDescription: "Community health data.", longDescription: "Conducted surveys to track health metrics and plan interventions.", image: placeholder },
  ],
  2019: [
    { title: "Skill Scholarships Distributed", shortDescription: "Supporting education.", longDescription: "Awarded scholarships to deserving students for skill courses.", image: placeholder },
    { title: "Waste Management Drive", shortDescription: "Clean environment initiative.", longDescription: "Launched campaigns on waste segregation and recycling in villages.", image: placeholder },
    { title: "Tree Plantation Campaign", shortDescription: "Environmental restoration.", longDescription: "Planted thousands of trees to combat deforestation.", image: placeholder },
    { title: "Start of Senior Citizen Helpline", shortDescription: "24/7 support service.", longDescription: "Introduced a helpline to assist senior citizens with emergencies and counseling.", image: placeholder },
  ],
  2020: [
    { title: "COVID-19 Relief & Ration Kits", shortDescription: "Pandemic response aid.", longDescription: "Distributed ration kits and hygiene supplies to families during the COVID-19 pandemic.", image: placeholder },
    { title: "Online Education Setup", shortDescription: "Remote learning support.", longDescription: "Provided tablets and internet access for students to continue studies online.", image: placeholder },
    { title: "PPE Distribution", shortDescription: "Protecting frontline workers.", longDescription: "Distributed PPE kits to healthcare and sanitation workers.", image: placeholder },
    { title: "Mental Health Tele-counseling", shortDescription: "Emotional support hotline.", longDescription: "Launched mental health helpline for counseling during lockdown.", image: placeholder },
  ],
  2021: [
    { title: "Vaccination Awareness Rallies", shortDescription: "COVID-19 vaccine advocacy.", longDescription: "Organized rallies to educate communities about vaccination benefits and safety.", image: placeholder },
    { title: "Restart Education Fund", shortDescription: "Reopening schools.", longDescription: "Set up funds to help schools and students transition back post-pandemic.", image: placeholder },
    { title: "Orphan Support Program", shortDescription: "Care for orphans.", longDescription: "Introduced financial and emotional support programs for orphaned children.", image: placeholder },
    { title: "Online Vocational Training", shortDescription: "Skill-building remotely.", longDescription: "Launched online platforms for vocational education to continue during restrictions.", image: placeholder },
  ],
  2022: [
    { title: "Hybrid Health Check Camps", shortDescription: "Combining online and offline services.", longDescription: "Introduced hybrid health check camps integrating telemedicine and physical consultations.", image: placeholder },
    { title: "Distribution of Laptops", shortDescription: "Bridging digital divide.", longDescription: "Donated laptops to rural schools and underprivileged students.", image: placeholder },
    { title: "Upliftment of Single Mothers", shortDescription: "Economic and social support.", longDescription: "Launched initiatives to empower single mothers through training and microfinance.", image: placeholder },
    { title: "Free Eye Surgeries", shortDescription: "Restoring vision.", longDescription: "Organized free eye surgery camps for the poor.", image: placeholder },
  ],
  2023: [
    { title: "Microfinance Launch", shortDescription: "Financial independence for women.", longDescription: "Introduced microfinance programs to empower women entrepreneurs.", image: placeholder },
    { title: "Nutrition Gardens", shortDescription: "Home-based nutrition.", longDescription: "Promoted nutrition gardens to combat malnutrition in rural communities.", image: placeholder },
    { title: "School Bus Service", shortDescription: "Safe student transport.", longDescription: "Launched bus services to ensure safe transport for school children.", image: placeholder },
    { title: "Drug Awareness Workshop", shortDescription: "Preventing substance abuse.", longDescription: "Conducted awareness sessions on drug abuse prevention for youth.", image: placeholder },
  ],
  2024: [
    { title: "Smart Classrooms Setup", shortDescription: "Modern learning tools.", longDescription: "Established smart classrooms equipped with digital boards and internet.", image: placeholder },
    { title: "Women’s Entrepreneurship Cell", shortDescription: "Startup support for women.", longDescription: "Launched a cell to support women in starting and scaling businesses.", image: placeholder },
    { title: "Free Dialysis Unit", shortDescription: "Affordable kidney care.", longDescription: "Opened a free dialysis center for patients with chronic kidney diseases.", image: placeholder },
    { title: "Environmental Awareness Film Fest", shortDescription: "Spreading eco-awareness.", longDescription: "Organized a film festival showcasing environmental issues and solutions.", image: placeholder },
  ],
  2025: [
    { title: "AI-Powered Health Monitoring Launch", shortDescription: "Tech-driven healthcare.", longDescription: "Introduced AI-based health monitoring systems for rural communities.", image: placeholder },
    { title: "Expansion to 50+ Districts", shortDescription: "Nationwide presence.", longDescription: "Scaled CARE Foundation initiatives to over 50 districts in India.", image: placeholder },
    { title: "Global NGO Collaboration", shortDescription: "International partnerships.", longDescription: "Partnered with global NGOs for knowledge exchange and resource sharing.", image: placeholder },
    { title: "Annual CareTech Summit", shortDescription: "Showcasing innovations.", longDescription: "Hosted summit to highlight innovations in social and healthcare initiatives.", image: placeholder },
  ],
};

export default timelineData;
