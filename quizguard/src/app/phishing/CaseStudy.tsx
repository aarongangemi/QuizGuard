"use client";

import { FC } from "react";

export const CaseStudy: FC = () => {
  return (
    <div>
      <h1>Brad's Encounter: Navigating a Phishing Attack</h1>

      <h2>Scenario:</h2>
      <p>
        Meet Brad, a diligent employee at a bustling marketing agency. Brad's
        days are filled with creative brainstorming sessions, client meetings,
        and tight deadlines. Amidst his busy schedule, Brad receives an email
        purporting to be from the company's HR department, urging him to update
        his payroll information urgently. Concerned about potential delays in
        receiving his paycheck, Brad clicks the link without a second thought,
        unknowingly falling victim to a sophisticated phishing attack.
      </p>

      <h2>Impact:</h2>
      <p>
        The repercussions of Brad's unwitting click are swift and profound. The
        link redirects him to a convincing replica of the company's login
        portal, where he dutifully enters his credentials. Unbeknownst to Brad,
        malicious actors now have access to his sensitive account information,
        including his username and password. With this newfound access, the
        attackers infiltrate the company's network, exfiltrating confidential
        client data and compromising Brad's colleagues' accounts. The agency's
        reputation takes a hit as clients express concern over the breach,
        leading to lost business opportunities and tarnished trust. Brad's sense
        of security is shattered as he grapples with the realization of his role
        in the breach.
      </p>

      <h2>Actions Taken:</h2>
      <ol>
        <li>
          <strong>Immediate Response:</strong> Brad notifies the IT department
          and management about the suspicious email and his actions, triggering
          an emergency response plan to contain the breach and mitigate further
          damage.
        </li>
        <li>
          <strong>System Lockdown:</strong> The IT team swiftly locks down
          affected accounts and systems, preventing unauthorized access and
          halting the spread of the attack within the network.
        </li>
        <li>
          <strong>Forensic Analysis:</strong> Cybersecurity experts conduct a
          thorough forensic analysis of the compromised systems to trace the
          attackers' activities, identify the extent of the breach, and assess
          potential data exfiltration.
        </li>
        <li>
          <strong>Password Reset:</strong> All employees, including Brad, are
          required to reset their passwords immediately to revoke access to
          compromised accounts and enhance account security.
        </li>
        <li>
          <strong>Employee Training:</strong> The agency launches a
          comprehensive cybersecurity training program to educate employees
          about phishing threats, recognizing malicious emails, and adopting
          safe email practices.
        </li>
        <li>
          <strong>Enhanced Email Filtering:</strong> The IT department
          implements advanced email filtering solutions to detect and block
          phishing emails before they reach employees' inboxes, reducing the
          risk of future attacks.
        </li>
        <li>
          <strong>Client Communication:</strong> The agency communicates
          transparently with clients about the breach, reassuring them of the
          steps taken to strengthen cybersecurity measures and protect their
          sensitive data.
        </li>
        <li>
          <strong>Continuous Monitoring:</strong> The IT team establishes
          continuous monitoring protocols to detect and respond to suspicious
          activities promptly, ensuring early detection and containment of
          future security incidents.
        </li>
      </ol>
    </div>
  );
};
