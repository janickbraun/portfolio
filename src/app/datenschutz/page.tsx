import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy",
};

export default function DatenschutzPage() {
  return (
    <article className="container mx-auto max-w-3xl px-6 py-24 prose prose-invert prose-zinc">
      <h1>Privacy Policy</h1>
      <h2>1. Privacy at a glance</h2>
      <h3>General information</h3>
      <p>
        The following information provides a simple overview of what happens with your personal
        data when you visit this website. Personal data is any data with which you can be
        personally identified.
      </p>
      
      <h2>2. General information and mandatory information</h2>
      <h3>Data protection</h3>
      <p>
        The operators of these pages take the protection of your personal data very seriously. We treat
        your personal data confidentially and in accordance with the statutory data protection
        regulations and this privacy policy.
      </p>
    </article>
  );
}
