// Function to open the modal with specific job description
// function openModal(jobType) {
//     var modal = document.getElementById('jobModal');
//     var modalTitle = document.getElementById('modalTitle');
//     var modalDescription = document.getElementById('modalDescription');

    // Set content based on jobType
    // if (jobType === 'softwareEngineer') {
    //     modalTitle.textContent = "Software Engineer";
    //     modalDescription.textContent = "As a Software Engineer, you'll design, develop, and maintain high-quality software solutions, collaborating with teams to meet project requirements and deadlines.";
    // }
    // else if (jobType === 'productManager') {
    //     modalTitle.textContent = "Product Manager";
    //     modalDescription.textContent = "The Product Manager will define the product roadmap, lead the cross-functional team, and drive product development from ideation to market launch.";
    // }
    // else if (jobType === 'uxDesigner') {
    //     modalTitle.textContent = "UX Designer";
    //     modalDescription.textContent = "Join our design team to create intuitive and engaging user experiences. Collaborate with product teams to design interfaces and develop prototypes.";
    // }
    // else if (jobType === 'dataScientist') {
    //     modalTitle.textContent = "Data Scientist";
    //     modalDescription.textContent = "Analyze and interpret complex data sets, create predictive models, and provide insights to optimize business performance.";
    // }
    // else if (jobType === 'marketingSpecialist') {
    //     modalTitle.textContent = "Marketing Specialist";
    //     modalDescription.textContent = "Develop marketing strategies to promote the brand. Focus on digital campaigns, SEO, and content creation to drive customer engagement.";
    // }
    // else if (jobType === 'hrManager') {
    //     modalTitle.textContent = "Human Resources Manager";
    //     modalDescription.textContent = "Manage recruitment processes, employee relations, and help implement HR strategies to promote a positive work culture.";
    // }
    // else if (jobType === 'devopsEngineer') {
    //     modalTitle.textContent = "DevOps Engineer";
    //     modalDescription.textContent = "Design and manage infrastructure, automate deployment pipelines, and ensure scalability and security in a cloud-based environment.";
    // }
    // else if (jobType === 'salesExecutive') {
    //     modalTitle.textContent = "Sales Executive";
    //     modalDescription.textContent = "Drive revenue growth by acquiring new clients, presenting products, and closing deals. Expand the customer base in key markets.";
    // }
    // else if (jobType === 'customerSupport') {
    //     modalTitle.textContent = "Customer Support Specialist";
    //     modalDescription.textContent = "Resolve customer issues, provide troubleshooting assistance, and ensure high customer satisfaction by maintaining positive relationships.";
    // }
    // else if (jobType === 'contentWriter') {
    //     modalTitle.textContent = "Content Writer";
    //     modalDescription.textContent = "Create engaging blog posts, articles, and website content to boost brand authority and improve SEO performance.";
    // }

    // Display the modal
//     modal.style.display = "block";
// }

// Function to close the modal
// function closeModal() {
//     var modal = document.getElementById('jobModal');
//     modal.style.display = "none";
// }

// Close modal if clicked outside of it
// window.onclick = function(event) {
//     var modal = document.getElementById('jobModal');
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// Function to open modal with dynamic job description
// function openModal(jobType) {
//     var modal = document.getElementById('jobModal');
//     var modalTitle = document.getElementById('modalTitle');
//     var modalDescription = document.getElementById('modalDescription');

//     // Update modal content based on the clicked job
//     if (jobType === 'softwareEngineer') {
//         modalTitle.textContent = "Software Engineer";
//         modalDescription.textContent = "Design and build software solutions, collaborate with the team to define requirements and deliver high-quality code.";
//     }
//     else if (jobType === 'productManager') {
//         modalTitle.textContent = "Product Manager";
//         modalDescription.textContent = "Lead product development, manage roadmaps, and collaborate across teams to define product strategy and execution.";
//     }
//     else if (jobType === 'uxDesigner') {
//         modalTitle.textContent = "UX Designer";
//         modalDescription.textContent = "Design intuitive and engaging user interfaces, develop prototypes, and conduct user testing to ensure the best user experience.";
//     }
    // More job types...

    // Show the modal
//     modal.style.display = "block";
// }

// Function to close modal
// function closeModal() {
//     var modal = document.getElementById('jobModal');
//     modal.style.display = "none";
// }

// Close modal if clicked outside of it
// window.onclick = function(event) {
//     var modal = document.getElementById('jobModal');
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// Career.js
const jobData = {
    "Network Engineer": {
        title: "Network Engineer",
        description: `• Design, implement, and maintain network infrastructure to ensure optimal performance.<br>
                      • Monitor network performance and troubleshoot issues to minimize downtime.<br>
                      • Configure and manage routers, switches, firewalls, and other network devices.<br>
                      • Collaborate with IT teams to support and enhance network security.<br>
                      • Document network configurations and maintain network diagrams.<br>
                      • Stay updated with industry trends and emerging technologies.`,
        qualifications: `• 3-4 years of experience in network engineering or a related field.<br>
                         • Proficiency in networking protocols (TCP/IP, BGP, OSPF, etc.) and technologies (LAN/WAN, VPN).<br>
                         • Experience with network monitoring tools and troubleshooting methods.<br>
                         • Strong understanding of firewall and security technologies.<br>
                         • Relevant certifications (e.g., CCNA, CCNP) are a plus.`,
        offer: `• Competitive salary and benefits.<br>
                • A collaborative and innovative work environment.<br>
                • Opportunities for professional growth and development.`
    },
    "Tele-Caller / Counsellor": {
        title: "Tele-Caller / Counsellor",
        description: `•	Client Outreach: Contact current and potential clients to inform them about our programs and services.
•	Inquiry Management: Respond to queries and provide detailed information about our offerings, addressing any questions or concerns.
•	Needs Assessment: Engage with clients to understand their requirements and guide them in selecting suitable programs.
•	Database Management: Maintain and update the customer database to ensure accuracy and completeness.
•	Follow-Up: Conduct follow-up calls to nurture leads and encourage enrolment in programs.
•	Reporting: Prepare reports on call outcomes, client feedback, and potential areas for improvement.
•	Collaboration: Work closely with the sales and marketing teams to align outreach strategies and share insights.

`, 
        qualifications: `•	Bachelor’s degree in a relevant field (e.g., Business, Communication, Education).<BR>
•	2-3 years of experience in a customer service or sales role, preferably in an educational or counselling environment.<br>
•	Excellent verbal and written communication skills.<br>
•	Strong interpersonal skills with the ability to build rapport with clients.

`,
        offer: `•	Competitive salary and benefits package.
•	Opportunities for professional development and growth.
•	A supportive and collaborative work environment.

If you are passionate about helping others and have a proven track record in client communication, we invite you to apply for this exciting opportunity!
`
    },
    "Ad-Crafter (content creation)": {
        title: "Ad-Crafter (content creation)",
        description: `•	Develop compelling ad content across various platforms.<br>
•	Collaborate with marketing teams to create targeted campaigns.<br>
•	Utilize design software to create eye-catching visuals.<br>
•	Analyse ad performance and adjust strategies as needed.<br>
•	Stay updated on industry trends and consumer preferences.<br>
`,
        qualifications: `•	Proven experience in content creation or advertising.<br>
•	Strong skills in graphic design and copywriting.<br>
•	Familiarity with digital marketing tools and analytics.<br>
•	Excellent communication and teamwork abilities.
.`,
        offer: `• Competitive salary.<br>
                • Creative, inclusive work environment.<br>
                • Opportunities for skill development.`
    },
    "Data Entry Operator": {
        title: "Data Entry Operator",
        description: `•	Accurately input and update data into our database and systems.<br>
•	Utilize MS Office applications (Word, Excel, PowerPoint) for data management and reporting.<br>
•	Employ internet research skills to gather relevant data and verify information.<br>
•	Leverage AI tools to streamline data entry processes and improve accuracy.<br>
•	Maintain confidentiality and security of sensitive information.<br>
•	Collaborate with team members to ensure data integrity and quality.<br>


`,
        qualifications: `•	Proven experience as a Data Entry Operator (minimum 2 years).<br>
•	Strong knowledge of MS Office Suite.<br>
•	Familiarity with internet technologies and online data sourcing.<br>
•	Experience using AI applications for data processing is a plus.<br>
•	Excellent attention to detail and organizational skills.<br>
•	Strong communication skills and ability to work independently.<br>
.`,
        offer: `• Competitive salary.<br>
                • Creative, inclusive work environment.<br>
                • Opportunities for skill development.`
    },
    "Digital Marketing": {
        title: "Digital Marketing",
        description: `•	Develop and implement digital marketing strategies to increase brand awareness and drive traffic.<br>
•	Manage and optimize campaigns across various channels, including SEO, SEM, email, and social media.<br>
•	Analyse performance metrics and generate reports to track campaign effectiveness.<br>
•	Collaborate with cross-functional teams to create engaging content that resonates with our target audience.<br>
•	Stay updated with industry trends and best practices to enhance marketing efforts.


`,
        qualifications: `•	3-4 years of experience in digital marketing.<br>
•	Strong knowledge of digital marketing tools and platforms (Google Analytics, AdWords, social media ads).<br>
•	Experience with SEO, content marketing, email marketing, and PPC campaigns.<br>
•	Excellent analytical skills and ability to interpret data.<br>
•	Strong communication and project management skills.

.`,
        offer: `• Competitive salary.<br>
                • Creative, inclusive work environment.<br>
                • Opportunities for skill development.`
    },
    "Graphic Designer": {
        title: "Graphic Designer",
        description: `•	Design and produce visually appealing graphics for various media, including digital and print.<br>
•	Collaborate with marketing and creative teams to develop design concepts and campaigns.<br>
•	Create layouts, logos, brochures, social media graphics, and other promotional materials.<br>
•	Ensure all designs align with brand guidelines and project objectives.<br>
•	Revise designs based on feedback and maintain project timelines.



`,
        qualifications: `•	2-3 years of experience in graphic design.<br>
•	Proficiency in design software such as Adobe Creative Suite (Photoshop, Illustrator, InDesign).<br>
•	Strong portfolio showcasing your design skills and creativity.<br>
•	Excellent attention to detail and ability to work under tight deadlines.<br>
•	Good communication skills and a collaborative mind-set.


.`,
        offer: `• Competitive salary.<br>
                • Creative, inclusive work environment.<br>
                • Opportunities for skill development.`
    },
   "Senior Full Stack Web Developer": {
        title: "Senior Full Stack Web Developer",
        description: `•	Design, develop, and maintain web applications using a variety of technologies, including Node.js, Python, PHP, and Django.<br>
•	Collaborate with cross-functional teams to gather requirements and deliver solutions that meet client needs.<br>
•	Implement responsive web designs that provide an optimal user experience across devices.<br>
•	Optimize applications for speed and scalability.<br>
•	Troubleshoot and debug applications, ensuring high performance and responsiveness.<br>
•	Mentor junior developers and provide technical guidance and support.<br>
•	Stay updated with emerging technologies and industry trends to ensure the company remains competitive.
`,
        qualifications: `•	Bachelor’s degree in Computer Science, Software Engineering, or a related field.
•	Proficiency in Node.js, Python, PHP, and Django.<br>
•	Strong understanding of front-end technologies including HTML, CSS, and JavaScript frameworks.<br>
•	Experience with database management (SQL and NoSQL).<br>
•	Familiarity with version control systems (e.g., Git).<br>
•	Excellent problem-solving skills and attention to detail.<br>
•	Strong communication skills and the ability to work collaboratively.<br>
.`,
       skills:`•	Experience with cloud services (e.g., AWS, Azure).<br>
•	Knowledge of RESTful API development.<br>
•	Understanding of CI/CD processes.<br>
`,
        offer: `• Competitive salary.<br>
                • Creative, inclusive work environment.<br>
                • Opportunities for skill development.`
    },
   " UI/UX Designer": {
        title: " UI/UX Designer",
        description: `•	Design and develop user interfaces for web and mobile applications.<br>
•	Collaborate with cross-functional teams to understand user needs and project requirements.<br>
•	Create wireframes, prototypes, and user flows to communicate design ideas effectively.<br>
•	Conduct user research and usability testing to gather feedback and improve designs.<br>



`,
        qualifications: `•	2-3 years of experience in UI/UX design.<br>
•	Proficiency in design tools such as Sketch, Adobe XD, Figma, or similar.<br>
•	Strong understanding of user- centred design principles.<br>
•	Excellent communication and collaboration skills.<br>


.`,
        offer: `• Competitive salary.<br>
                • Creative, inclusive work environment.<br>
                • Opportunities for skill development.`
    },
    "Animator/Video Editor": {
        title: " Animator/Video Editor",
        description: `•	Create engaging animations and edit video content for various platforms.<br>
•	Collaborate with the creative team to develop concepts and storyboards.<br>
•	Edit and enhance video footage, including sound design and visual effects.<br>
•	Ensure all projects are delivered on time and meet quality standards.<br>
`,
        qualifications: `•	2-3 years of experience in UI/UX design.<br>
•	Proficiency in design tools such as Sketch, Adobe XD, Figma, or similar.<br>
•	Strong understanding of user- centred design principles.<br>
•	Excellent communication and collaboration skills.<br>

.`,
        offer: `• Competitive salary.<br>
                • Creative, inclusive work environment.<br>
                • Opportunities for skill development.`
    },
    "Junior Web Developer": {
        title: " Junior Web Developer",
        description: `•	Assist in developing and maintaining web applications.<br>
•	Collaborate with senior developers on project requirements.<br>
•	Troubleshoot and resolve issues in existing applications.<br>
•	Stay current with emerging web technologies and best practices.


`,
        qualifications: `•	2-3 years of web development experience.<br>
•	Proficiency in PHP and Python.<br>
•	Familiarity with front-end technologies is a plus.<br>
.`,
        offer: `• Competitive salary.<br>
                • Creative, inclusive work environment.<br>
                • Opportunities for skill development.`
    },

    // Add similar job data objects for other jobs as required
};

function openModal(jobTitle) {
    const job = jobData[jobTitle];
    if (job) {
        document.getElementById('modalTitle').innerHTML = job.title;
        document.getElementById('modalDescription').innerHTML = 
            `<h3>Key Responsibilities</h3>${job.description}
             <h3>Qualifications</h3>${job.qualifications}
             <h3>What We Offer</h3>${job.offer}`;
        document.getElementById("jobModal").style.display = "block";
    }
}

function closeModal() {
    document.getElementById("jobModal").style.display = "none";
}

function openModal(jobTitle) {
    const job = jobData[jobTitle];
    if (job) {
        // Set the job title and description dynamically
        document.getElementById('modalTitle').innerHTML = job.title;
        document.getElementById('modalDescription').innerHTML = 
            `<h3>Key Responsibilities</h3>${job.description}
             <h3>Qualifications</h3>${job.qualifications}
             <h3>What We Offer</h3>${job.offer}`;
        
        // Add the "Apply Now" button and make it functional
        const applyButton = document.querySelector('.apply-now-btn');
        applyButton.onclick = function() {
            applyNow();
        };

        // Open the modal
        document.getElementById("jobModal").style.display = "block";

        // Scroll to the top of the modal content (Job description)
        document.querySelector('.modal-content').scrollTop = 0;
    }
}

// Function to close the modal
function closeModal() {
    document.getElementById("jobModal").style.display = "none";
}

// Function to handle application process (redirect to apply.html)
function applyNow() {
    // Close the modal first
    closeModal();

    // Redirect to the application page (apply.html)
    window.location.href = "apply.html";  // Make sure apply.html is the correct page path
}
    