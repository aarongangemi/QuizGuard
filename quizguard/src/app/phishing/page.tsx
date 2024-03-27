"use client";
import { FC } from "react"
import { PageBase } from "../components/PageBase";
import { ModuleKeys } from "../components/ModuleData";
import { ModuleButtonsFooter } from "../components/ModuleButtonsFooter";

const PhishingPage: FC = () => {
    return (
        <PageBase>
            <h1 style={{marginTop: 0}}>Understanding Phishing Scams and Prevention</h1>
            <h2>Definition of Phishing:</h2>
            <p>Phishing is a cybercrime tactic where fraudulent emails, messages, or websites are used to deceive individuals into disclosing sensitive information, such as passwords, credit card numbers, or personal data. These deceptive communications often impersonate trusted entities, such as banks, government agencies, or reputable companies, and typically employ social engineering techniques to manipulate victims into taking action.</p>
            <h2>Common Characteristics of Phishing Scams:</h2>
            <ul>
                <li><strong>Spoofed Sender:</strong> Phishing emails often appear to be from legitimate sources, but the senders address may be manipulated or spoofed.</li>
                <li><strong>Sense of Urgency:</strong> Scammers create a sense of urgency to prompt quick action, such as claiming an account will be suspended unless immediate action is taken.</li>
                <li><strong>Request for Personal Information:</strong> Phishing attempts frequently request sensitive information, like passwords or financial details, under false pretenses.</li>
                <li><strong>Unsolicited Attachments or Links:</strong> Emails may contain suspicious attachments or links leading to fake websites designed to steal information or install malware.</li>
                <li><strong>Generic Greetings:</strong> Phishing emails often use generic greetings rather than addressing the recipient by name.</li>
            </ul>
            <h2>Types of Phishing:</h2>
            <p>Phishing scams can take various forms, including:</p>
            <ul>
                <li><strong>Email Phishing:</strong> Sending deceptive emails that appear to be from legitimate sources, often containing links to fake websites or attachments with malware.</li>
                <li><strong>Spear Phishing:</strong> Targeted phishing attacks aimed at specific individuals or organizations, leveraging personalized information to increase credibility and success rates.</li>
                <li><strong>Whaling:</strong> Phishing attacks targeting high-profile individuals, such as executives or government officials, with the goal of obtaining sensitive information or financial assets.</li>
                <li><strong>Clone Phishing:</strong> Creating counterfeit copies of legitimate emails, often with slight modifications, to trick recipients into revealing confidential information.</li>
                <li><strong>Smishing:</strong> Phishing attacks conducted via SMS or text messages, enticing recipients to click on malicious links or provide sensitive information.</li>
            </ul>
            
            <h2>Impact of Phishing Scams:</h2>
            <p>Phishing scams can have significant consequences, including:</p>
            <ul>
                <li>Data Theft: Phishing scams can lead to the theft of sensitive information, such as passwords, financial credentials, or personal data, which can be exploited for fraudulent purposes.</li>
                <li>Financial Loss: Victims of phishing scams may suffer financial losses due to unauthorized transactions, identity theft, or fraudulent access to bank accounts or credit cards.</li>
                <li>Identity Theft: Phishing scams can result in identity theft, where attackers use stolen information to impersonate victims, open accounts in their name, or commit other forms of fraud.</li>
                <li>Reputation Damage: Organizations targeted by phishing scams may experience reputational damage, loss of customer trust, and negative publicity, impacting their brand integrity and business operations.</li>
                <li>Disruption of Operations: Successful phishing attacks can disrupt business operations, compromise network security, and lead to downtime or loss of productivity.</li>
                <li>Legal and Regulatory Consequences: Organizations may face legal and regulatory consequences for failing to protect sensitive data or comply with data protection laws, resulting in fines, penalties, or legal action.</li>
            </ul>
            <h2>Prevention Measures:</h2>
            <ol>
                <li><strong>Verify Sender Identity:</strong> Always verify the authenticity of the sender before responding to emails or messages, especially if they request sensitive information.</li>
                <li><strong>Be Skeptical of Urgent Requests:</strong> Exercise caution with emails or messages that create a sense of urgency, and independently verify the claims before taking action.</li>
                <li><strong>Avoid Clicking Suspicious Links:</strong> Refrain from clicking on links or downloading attachments from unfamiliar or suspicious sources.</li>
                <li><strong>Enable Spam Filters:</strong> Configure spam filters to identify and block phishing emails before they reach your inbox.</li>
                <li><strong>Use Multi-Factor Authentication:</strong> Enable multi-factor authentication (MFA) whenever possible to add an extra layer of security to your accounts.</li>
                <li><strong>Keep Software Updated:</strong> Regularly update software, including operating systems, browsers, and security programs, to patch known vulnerabilities exploited by phishing attacks.</li>
                <li><strong>Educate Employees:</strong> Provide training and awareness programs to educate employees about phishing scams, recognizing suspicious emails, and reporting potential threats.</li>
                <li><strong>Report Suspicious Activity:</strong> Report phishing attempts to relevant authorities, such as your organisations IT department or anti-phishing organizations.</li>
                <li><strong>Stay Informed:</strong> Stay informed about the latest phishing trends and techniques to better protect yourself and your organization from emerging threats.</li>
                <li><strong>Use Website Verification Tools:</strong> Utilize website verification tools or browser extensions to check the legitimacy of websites before entering sensitive information.</li>
            </ol>
            <ModuleButtonsFooter 
                nextLink='/mitm'
                previousLink='/malware'
                moduleCompletionKey={ModuleKeys.PHISHING}
            />
        </PageBase>
    )
}

export default PhishingPage;