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
                    }
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
                    }
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
                    }
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
                    }
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
                }
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
                }
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
                }
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
                }
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
                }
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
                }
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
                }
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
                }
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
                }
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
                }
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
                }
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
                }
            }
        };
    }
}
