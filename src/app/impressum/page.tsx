import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum",
};

export default function ImpressumPage() {
  return (
    <article className="container mx-auto max-w-3xl px-6 py-24 prose prose-invert prose-zinc">
      <h1>Impressum</h1>
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        Janick Braun (Platzhalter)<br />
        Musterstraße 1<br />
        80538 München
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: +49 (0) 123 44 55 66<br />
        E-Mail: hello@example.com
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
        DE999999999
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
        nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
        Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
        rechtswidrige Tätigkeit hinweisen.
      </p>
    </article>
  );
}
