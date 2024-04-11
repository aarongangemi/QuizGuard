import { FC } from "react";

export const CaseStudy: FC = () => {
  return (
    <>
      <h1>
        The Company's Dilemma: Battling a Distributed Denial of Service Attack
      </h1>

      <h2>Scenario:</h2>
      <p>
        Imagine a large e-commerce company that relies heavily on its online
        presence to conduct business and serve its customers. One day, the
        company's website suddenly becomes inaccessible, leaving customers
        unable to browse products, make purchases, or access their accounts. The
        company's IT team quickly discovers that the website is under attack by
        a Distributed Denial of Service (DDoS) attack.
      </p>

      <h2>Impact:</h2>
      <p>
        The DDoS attack wreaks havoc on the company's operations, causing severe
        disruptions and financial losses. With the website rendered inaccessible
        to legitimate users, the company experiences a significant decline in
        sales, revenue, and customer satisfaction. Moreover, the prolonged
        downtime tarnishes the company's reputation and credibility, leading to
        potential customer defection and damage to brand integrity.
      </p>
      <p>
        As the attack persists, the company's IT infrastructure struggles to
        cope with the massive influx of malicious traffic, resulting in system
        instability, slowdowns, and service interruptions across various
        platforms. The company's technical teams work tirelessly to mitigate the
        attack, but the relentless assault persists, exacerbating the situation
        and prolonging the recovery process.
      </p>

      <h2>Actions Taken:</h2>
      <ol>
        <li>
          <strong>Incident Response:</strong> The company's IT security team
          activates its incident response plan, coordinating efforts to assess,
          mitigate, and contain the DDoS attack while minimizing disruptions to
          critical services.
        </li>
        <li>
          <strong>Network Traffic Analysis:</strong> IT specialists analyze
          incoming traffic patterns to identify malicious sources and implement
          filtering measures to block or mitigate the impact of the attack on
          the company's network infrastructure.
        </li>
        <li>
          <strong>Cloud-Based DDoS Protection:</strong> The company leverages
          cloud-based DDoS protection services to absorb and mitigate the
          volumetric attack traffic, diverting malicious requests away from its
          network and ensuring uninterrupted service delivery.
        </li>
        <li>
          <strong>Collaboration with ISPs:</strong> The company collaborates
          with Internet Service Providers (ISPs) to mitigate the attack at the
          network level, implementing traffic filtering and rate-limiting
          measures to prevent malicious traffic from reaching the company's
          infrastructure.
        </li>
        <li>
          <strong>Communication and Transparency:</strong> The company maintains
          transparent communication with its customers, stakeholders, and the
          public, providing regular updates on the situation, the impact of the
          attack, and the steps taken to restore normalcy.
        </li>
        <li>
          <strong>Post-Incident Analysis:</strong> Following the resolution of
          the DDoS attack, the company conducts a comprehensive post-incident
          analysis to identify vulnerabilities, improve resilience, and
          implement preventative measures to mitigate the risk of future
          attacks.
        </li>
        <li>
          <strong>Legal Action:</strong> The company pursues legal action
          against the perpetrators of the DDoS attack, collaborating with law
          enforcement agencies and cybersecurity experts to identify and
          prosecute the responsible individuals or organizations.
        </li>
      </ol>
    </>
  );
};
