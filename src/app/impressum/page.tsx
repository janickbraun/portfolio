import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Legal Notice",
};

export default function ImpressumPage() {
  return (
    <article className="container mx-auto max-w-3xl px-6 py-24 prose prose-invert prose-zinc">
      <h1>Imprint</h1>
      <h2>Information according to § 5 TMG</h2>
      <p>
        Janick Braun (Placeholder)<br />
        Musterstraße 1<br />
        80538 Munich, Germany
      </p>

      <h2>Contact</h2>
      <p>
        Phone: +49 (0) 123 44 55 66<br />
        E-mail: hello@example.com
      </p>

      <h2>VAT ID</h2>
      <p>
        VAT identification number according to § 27 a of the Value Added Tax Act:<br />
        DE999999999
      </p>

      <h2>Liability for Content</h2>
      <p>
        As a service provider, we are responsible for our own content on these pages in 
        accordance with general laws pursuant to § 7 para. 1 TMG. According to §§ 8 to 10 TMG, however, 
        as a service provider we are not obligated to monitor transmitted or stored third-party 
        information or to investigate circumstances that indicate illegal activity.
      </p>
    </article>
  );
}
