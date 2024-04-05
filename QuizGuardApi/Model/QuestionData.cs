namespace QuizGuardApi.Model
{
    public static class QuestionData
    {
        public static List<QuizQuestion> MalwareQuestions = new List<QuizQuestion>{
                new QuizQuestion
                {
                    Text = "What type of malware encrypts files or locks systems, demanding ransom for their release?",
                    Order = 1,
                    Options = new List<QuizQuestionOption>
                    {
                        new QuizQuestionOption { Text = "Virus", IsCorrect = false },
                        new QuizQuestionOption { Text = "Worm", IsCorrect = false },
                        new QuizQuestionOption { Text = "Trojan", IsCorrect = false },
                        new QuizQuestionOption { Text = "Ransomware", IsCorrect = true }
                    },
                    Explainer = "Ransomware encrypts files or locks systems and demands ransom for their release. It is a type of malware specifically designed for extortion purposes. Ransomware attacks have become increasingly prevalent in recent years, targeting individuals, businesses, and even government institutions."
                },
                new QuizQuestion
                {
                    Text = "Which preventive measure helps in detecting and removing malicious programs?",
                    Order = 2,
                    Options = new List<QuizQuestionOption>
                    {
                        new QuizQuestionOption { Text = "Installing firewall protection", IsCorrect = false },
                        new QuizQuestionOption { Text = "Keeping software updated", IsCorrect = false },
                        new QuizQuestionOption { Text = "Using ad blockers", IsCorrect = false },
                        new QuizQuestionOption { Text = "Installing antivirus software", IsCorrect = true }
                    },
                    Explainer = "Installing antivirus software is an essential preventive measure against malware. Antivirus software helps in detecting and removing malicious programs by scanning files and monitoring system activity for suspicious behavior. It provides real-time protection against various types of malware, including viruses, worms, Trojans, spyware, and adware"

                },
                new QuizQuestion
                {
                    Text = "What is the characteristic of spyware?",
                    Order = 3,
                    Options = new List<QuizQuestionOption>
                    {
                        new QuizQuestionOption { Text = "It replicates when executed.", IsCorrect = false },
                        new QuizQuestionOption { Text = "It spreads across networks.", IsCorrect = false },
                        new QuizQuestionOption { Text = "It encrypts files or locks systems.", IsCorrect = false },
                        new QuizQuestionOption { Text = "It collects sensitive information without the user's consent.", IsCorrect = true }
                    },
                    Explainer = "Spyware is a type of malware that secretly collects information about a user's activities and transmits it to unauthorized third parties. It often operates stealthily in the background, without the user's knowledge or consent. Spyware can capture sensitive information such as passwords, credit card numbers, browsing history, and personal communications, posing a significant threat to privacy and security."

                },
                new QuizQuestion
                {
                    Text = "Incident Response Scenario Question:\n\nImagine you're an IT administrator in a small business, and one of your employees informs you that their computer suddenly started running extremely slow, and they're noticing unusual network activity. What immediate steps would you take to address this potential malware incident?",
                    Order = 4,
                    Options = new List<QuizQuestionOption>
                    {
                        new QuizQuestionOption { Text = "Disconnect the affected computer from the network and isolate it to prevent further spread of malware.", IsCorrect = true },
                        new QuizQuestionOption { Text = "Run a full system scan using antivirus software to detect and remove any malicious programs.", IsCorrect = false },
                        new QuizQuestionOption { Text = "Inform other employees to be cautious and report any similar symptoms on their computers.", IsCorrect = false },
                        new QuizQuestionOption { Text = "Contact the IT security team or an external cybersecurity expert for assistance in analyzing and mitigating the incident.", IsCorrect = false }
                    },
                    Explainer = "Disconnecting the affected computer from the network and isolating it is the immediate action to contain the potential malware incident. This step helps prevent the malware from spreading to other systems on the network and causing further damage. After isolating the affected computer, further investigation and remediation steps, such as running antivirus scans, applying security patches, and restoring data from backups, can be undertaken to mitigate the impact of the malware infection. Additionally, informing other employees to be cautious and reporting any similar symptoms on their computers can help prevent the spread of malware within the organization. If necessary, contacting the IT security team or an external cybersecurity expert for assistance in analyzing and mitigating the incident is recommended to ensure a comprehensive response to the malware incident."
                }
            };

        public static List<QuizQuestion> PhishingQuestions = new List<QuizQuestion> {
            new QuizQuestion
            {
                Text = "What is phishing?",
                Order = 5,
                Options = new List<QuizQuestionOption>
                {
                    new QuizQuestionOption { Text = "A cybercrime tactic using fraudulent emails, messages, or websites to deceive individuals", IsCorrect = true },
                    new QuizQuestionOption { Text = "A method to encrypt files and demand ransom for their release", IsCorrect = false },
                    new QuizQuestionOption { Text = "A type of malware that spreads across networks", IsCorrect = false },
                    new QuizQuestionOption { Text = "A technique to create counterfeit copies of legitimate emails", IsCorrect = false }
                },
                Explainer = "Phishing is a cybercrime tactic involving the use of fraudulent emails, messages, or websites designed to deceive individuals into divulging sensitive information such as passwords or financial details. The correct answer is A cybercrime tactic using fraudulent emails, messages, or websites to deceive individuals. Phishing attacks aim to trick recipients into providing sensitive information, compromising their personal or financial security."

            },
            new QuizQuestion
            {
                Text = "Which of the following is a common characteristic of phishing scams?",
                Order = 6,
                Options = new List<QuizQuestionOption>
                {
                    new QuizQuestionOption { Text = "Personalized greetings addressing the recipient by name", IsCorrect = false },
                    new QuizQuestionOption { Text = "Unsolicited attachments or links leading to fake websites", IsCorrect = true },
                    new QuizQuestionOption { Text = "Requests for sensitive information under false pretenses", IsCorrect = false },
                    new QuizQuestionOption { Text = "Slow response time from the sender", IsCorrect = false }
                },
                Explainer = "Unsolicited attachments or links leading to fake websites are common characteristics of phishing scams. Phishing attacks often include emails or messages containing links to malicious websites or attachments that may install malware or steal sensitive information. It is essential to be cautious of such emails and verify their legitimacy before taking any action."

            },
            new QuizQuestion
            {
                Text = "What type of phishing attack targets high-profile individuals, such as executives or government officials?",
                Order = 7,
                Options = new List<QuizQuestionOption>
                {
                    new QuizQuestionOption { Text = "Email Phishing", IsCorrect = false },
                    new QuizQuestionOption { Text = "Spear Phishing", IsCorrect = false },
                    new QuizQuestionOption { Text = "Whaling", IsCorrect = true },
                    new QuizQuestionOption { Text = "Clone Phishing", IsCorrect = false }
                },
                Explainer = "Whaling is a sophisticated phishing attack targeting high-profile individuals like executives or government officials. These attacks are carefully crafted and personalized to deceive their targets into revealing sensitive information or authorizing fraudulent transactions. Whaling attacks pose significant risks to organizations, making it crucial to implement robust security measures and provide regular training to prevent such incidents."
            },
            new QuizQuestion
            {
                Text = "Incident Response Scenario Question:\n\nAn employee reports receiving an email claiming their account will be suspended unless they update their login credentials immediately by clicking on a link provided in the email. What immediate steps would you advise the employee to take, and what actions would you take to address this potential phishing attack?",
                Order = 8,
                Options = new List<QuizQuestionOption>
                {
                    new QuizQuestionOption { Text = "Advise the employee to click on the link and update their credentials to prevent account suspension.", IsCorrect = false },
                    new QuizQuestionOption { Text = "Instruct the employee to ignore the email and delete it from their inbox.", IsCorrect = false },
                    new QuizQuestionOption { Text = "Recommend the employee to verify the legitimacy of the email by contacting the IT department or using a company-provided phishing reporting mechanism.", IsCorrect = true },
                    new QuizQuestionOption { Text = "Suggest the employee forward the email to all their contacts to raise awareness about the phishing attempt.", IsCorrect = false }
                },
                Explainer = "In response to the suspicious email, it's crucial to advise the employee to verify its legitimacy before taking any action. Recommending the employee to contact the IT department or using a company-provided phishing reporting mechanism can help confirm if the email is genuine. This proactive approach mitigates the risk of falling victim to a phishing attack and reinforces the importance of cybersecurity awareness within the organization."
            }
        };

        public static List<QuizQuestion> MitmQuestions = new List<QuizQuestion> {
            new QuizQuestion
            {
                Text = "What is a Man-in-the-Middle (MitM) attack?",
                Order = 9,
                Options = new List<QuizQuestionOption>
                {
                    new QuizQuestionOption { Text = "A form of cyber attack where an unauthorized third party intercepts and possibly alters communication between two parties without their knowledge.", IsCorrect = true },
                    new QuizQuestionOption { Text = "A type of phishing attack aimed at high-profile individuals, such as executives or government officials.", IsCorrect = false },
                    new QuizQuestionOption { Text = "A method to encrypt files and demand ransom for their release.", IsCorrect = false },
                    new QuizQuestionOption { Text = "A technique to create counterfeit copies of legitimate emails.", IsCorrect = false }
                },
                Explainer = "A Man-in-the-Middle (MitM) attack is a form of cyber attack where an unauthorized third party intercepts and possibly alters communication between two parties without their knowledge. In MitM attacks, the attacker secretly relays and possibly alters the communication between two parties, allowing them to intercept sensitive information. The correct answer is A form of cyber attack where an unauthorized third party intercepts and possibly alters communication between two parties without their knowledge."

            },
            new QuizQuestion
            {
                Text = "What is the impact of Man-in-the-Middle (MitM) attacks?",
                Order = 10,
                Options = new List<QuizQuestionOption>
                {
                    new QuizQuestionOption { Text = "Data Interception", IsCorrect = true },
                    new QuizQuestionOption { Text = "Software Development", IsCorrect = false },
                    new QuizQuestionOption { Text = "Hardware Maintenance", IsCorrect = false },
                    new QuizQuestionOption { Text = "Marketing Strategies", IsCorrect = false }
                },
                Explainer = "The impact of Man-in-the-Middle (MitM) attacks primarily involves data interception. MitM attacks allow attackers to intercept sensitive data transmitted between two parties, potentially leading to data theft, identity theft, or unauthorized access to confidential information. The correct answer is Data Interception."

            },
            new QuizQuestion
            {
                Text = "How can individuals and organizations prevent Man-in-the-Middle (MitM) attacks?",
                Order = 11,
                Options = new List<QuizQuestionOption>
                {
                    new QuizQuestionOption { Text = "Use Encrypted Connections", IsCorrect = true },
                    new QuizQuestionOption { Text = "Disable Firewall Protection", IsCorrect = false },
                    new QuizQuestionOption { Text = "Share Sensitive Data Freely", IsCorrect = false },
                    new QuizQuestionOption { Text = "Use Weak Authentication Mechanisms", IsCorrect = false }
                },
                Explainer = "To prevent Man-in-the-Middle (MitM) attacks, individuals and organizations should use encrypted connections. Employing encryption protocols such as SSL/TLS can help secure communication channels and prevent MitM attacks by encrypting data transmitted between parties, making it difficult for attackers to intercept and decipher. The correct answer is Use Encrypted Connections."
            },
            new QuizQuestion
            {
                Text = "Incident Response Scenario Question:\n\nYou suspect that your organization's network may be under a Man-in-the-Middle (MitM) attack. What immediate steps would you take to investigate and mitigate this threat?",
                Order = 12,
                Options = new List<QuizQuestionOption>
                {
                    new QuizQuestionOption { Text = "Immediately disconnect affected devices from the network to prevent further data interception.", IsCorrect = false },
                    new QuizQuestionOption { Text = "Conduct a thorough network traffic analysis to identify any suspicious patterns or anomalies.", IsCorrect = true },
                    new QuizQuestionOption { Text = "Ignore the suspicion as it could just be a normal network glitch.", IsCorrect = false },
                    new QuizQuestionOption { Text = "Inform all employees to change their passwords immediately.", IsCorrect = false }
                },
                Explainer = "In response to suspected Man-in-the-Middle (MitM) attacks, it's crucial to conduct a thorough network traffic analysis to identify any suspicious patterns or anomalies. Analyzing network traffic logs and patterns can help detect unusual behavior associated with MitM attacks, allowing prompt mitigation measures to be implemented to safeguard network integrity and data security. The correct answer is Conduct a thorough network traffic analysis to identify any suspicious patterns or anomalies."
            }
        };

        public static List<QuizQuestion> DdosQuestions = new List<QuizQuestion>
        {
            new QuizQuestion
            {
                Text = "What is a Distributed Denial of Service (DDoS) attack?",
                Order = 13,
                Options = new List<QuizQuestionOption>
                {
                    new QuizQuestionOption { Text = "A malicious attempt to disrupt the normal traffic of a targeted server, service, or network by overwhelming it with a flood of internet traffic.", IsCorrect = true },
                    new QuizQuestionOption { Text = "A method to encrypt files and demand ransom for their release.", IsCorrect = false },
                    new QuizQuestionOption { Text = "A type of phishing attack aimed at high-profile individuals, such as executives or government officials.", IsCorrect = false },
                    new QuizQuestionOption { Text = "A form of cyber attack where an unauthorized third party intercepts and possibly alters communication between two parties without their knowledge.", IsCorrect = false }
                },
                Explainer = "A Distributed Denial of Service (DDoS) attack is a malicious attempt to disrupt the normal traffic of a targeted server, service, or network by overwhelming it with a flood of internet traffic. In DDoS attacks, perpetrators use multiple compromised devices, often distributed across various locations, to coordinate the attack and flood the target with an overwhelming volume of traffic, rendering it inaccessible to legitimate users."
            },
            new QuizQuestion
            {
                Text = "Which of the following is a common type of DDoS attack that overwhelms the target with a high volume of traffic?",
                Order = 14,
                Options = new List<QuizQuestionOption>
                {
                    new QuizQuestionOption { Text = "Volumetric Attacks", IsCorrect = true },
                    new QuizQuestionOption { Text = "Protocol Attacks", IsCorrect = false },
                    new QuizQuestionOption { Text = "Application Layer Attacks", IsCorrect = false },
                    new QuizQuestionOption { Text = "Phishing Attacks", IsCorrect = false }
                },
                Explainer = "Volumetric Attacks are a common type of DDoS attack that overwhelms the target with a high volume of traffic. In Volumetric DDoS attacks, attackers leverage botnets or networks of compromised devices to generate a massive volume of requests or data packets, saturating the target's network bandwidth and consuming its computational resources, leading to service disruption or downtime."
            },
            new QuizQuestion
            {
                Text = "What are the potential consequences of DDoS attacks?",
                Order = 15,
                Options = new List<QuizQuestionOption>
                {
                    new QuizQuestionOption { Text = "Disruption of Online Services", IsCorrect = true },
                    new QuizQuestionOption { Text = "Increased Hardware Performance", IsCorrect = false },
                    new QuizQuestionOption { Text = "Enhanced Network Security", IsCorrect = false },
                    new QuizQuestionOption { Text = "Improved Customer Satisfaction", IsCorrect = false }
                },
                Explainer = "The potential consequences of DDoS attacks include the disruption of online services, increased operational costs, loss of revenue, damage to brand reputation, and customer dissatisfaction. By rendering websites or online services inaccessible to legitimate users, DDoS attacks can cause significant financial and reputational harm to organizations, affecting their credibility and trustworthiness."
            },
            new QuizQuestion
            {
                Text = "Incident Response Scenario Question:\n\nYour organization's website is experiencing a sudden surge in traffic, causing it to become inaccessible to legitimate users. What immediate steps would you take to address this potential DDoS attack?",
                Order = 16,
                Options = new List<QuizQuestionOption>
                {
                    new QuizQuestionOption { Text = "Increase server capacity to handle the surge in traffic.", IsCorrect = false },
                    new QuizQuestionOption { Text = "Deploy specialized DDoS protection services to mitigate attack traffic.", IsCorrect = true },
                    new QuizQuestionOption { Text = "Ignore the traffic surge as it may be due to legitimate reasons.", IsCorrect = false },
                    new QuizQuestionOption { Text = "Shutdown the website temporarily until the traffic surge subsides.", IsCorrect = false }
                },
                Explainer = "In response to a potential DDoS attack causing a sudden surge in website traffic, organizations should deploy specialized DDoS protection services to mitigate attack traffic. These services include traffic filtering mechanisms, rate limiting, and traffic redirection to scrubbing centers, where malicious traffic is identified and filtered out, allowing legitimate users to access the website without interruption. Deploying DDoS protection services helps ensure the availability and reliability of online services during attack incidents."
            }
        };
    }
}
