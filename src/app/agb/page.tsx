import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen",
};

export default function AGBPage() {
  return (
    <article className="container mx-auto max-w-3xl px-6 py-24 prose prose-invert prose-zinc">
      <h1>Allgemeine Geschäftsbedingungen</h1>
      <h2>1. Geltungsbereich</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, die zwischen 
        uns und unseren Kunden online abgeschlossen werden.
      </p>

      <h2>2. Vertragsschluss</h2>
      <p>
        Die Präsentation der Leistungen auf der Website stellt kein rechtlich bindendes 
        Angebot, sondern eine Aufforderung zur Abgabe einer Bestellung dar. 
        Irrtümer vorbehalten.
      </p>
    </article>
  );
}
