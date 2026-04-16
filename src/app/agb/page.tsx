import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "General Terms and Conditions",
};

export default function AGBPage() {
  return (
    <article className="container mx-auto max-w-3xl px-6 py-24 prose prose-invert prose-zinc">
      <h1>Terms & Conditions</h1>
      <p>
        These General Terms and Conditions (GTC) apply to all business relationships between 
        Janick Braun (Placeholder) and its clients.
      </p>
      <h2>Scope</h2>
      <p>
        For use of the website and services, the following terms apply in the version valid 
        at the time of the order or site visit.
      </p>
    </article>
  );
}
