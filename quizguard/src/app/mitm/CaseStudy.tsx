import { FC } from "react";

export const CaseStudy: FC = () => {
  return (
    <>
      <h1>Alice's Misfortune: Falling Victim to a Man-in-the-Middle Attack</h1>
      <h2>Scenario:</h2>
      <p>
        Meet Alice, a tech-savvy professional who frequently accesses sensitive
        information and conducts financial transactions online. One day, while
        working remotely from a local café, Alice connects to the public Wi-Fi
        network to access her company's secure server and check her bank account
        balance. Unbeknownst to her, a cybercriminal lurks nearby, intercepting
        her connection and executing a sophisticated Man-in-the-Middle (MitM)
        attack.
      </p>

      <h2>Impact:</h2>
      <p>
        The consequences of Alice's unsuspecting connection to the compromised
        Wi-Fi network are dire. The attacker intercepts all data transmitted
        between Alice's device and the intended servers, including login
        credentials, personal information, and financial details. With access to
        this sensitive data, the attacker can carry out various malicious
        activities, such as identity theft, unauthorized fund transfers, or
        espionage.
      </p>
      <p>
        As Alice continues her online activities, oblivious to the breach, the
        attacker silently gathers valuable information, exploiting her trust in
        seemingly secure connections. Meanwhile, Alice's company suffers a
        breach of confidential data as the attacker infiltrates the corporate
        network through her compromised device, jeopardizing sensitive business
        operations and intellectual property.
      </p>

      <h2>Actions Taken:</h2>
      <ol>
        <li>
          <strong>Immediate Disconnection:</strong> Upon discovering the
          suspicious activity, Alice disconnects from the compromised Wi-Fi
          network and terminates all ongoing sessions to prevent further data
          exposure.
        </li>
        <li>
          <strong>Change of Credentials:</strong> Alice promptly changes her
          passwords for all online accounts, including her company's network
          credentials and banking login information, to revoke access from the
          attacker.
        </li>
        <li>
          <strong>Security Protocol Review:</strong> The IT department conducts
          a thorough review of the company's security protocols and implements
          additional measures to prevent future MitM attacks, such as VPN usage
          and encryption.
        </li>
        <li>
          <strong>Employee Awareness Training:</strong> Alice's company
          initiates comprehensive cybersecurity awareness training for all
          employees, emphasizing the risks associated with public Wi-Fi networks
          and the importance of using secure connections.
        </li>
        <li>
          <strong>Enhanced Network Monitoring:</strong> The IT team enhances
          network monitoring capabilities to detect and respond to suspicious
          activities in real-time, mitigating the impact of potential future
          attacks.
        </li>
        <li>
          <strong>Legal Action:</strong> Alice's company pursues legal action
          against the perpetrators of the MitM attack, collaborating with law
          enforcement agencies and cybersecurity experts to identify and
          prosecute the responsible individuals.
        </li>
      </ol>
    </>
  );
};
