import { Metadata } from "next";
import { personalInfo } from "@/lib/data";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Legal information and contact details.",
};

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-24">
        <FadeIn delay={0.1}>
          <h1 className="text-4xl font-bold text-zinc-50 mb-12 tracking-tight">Imprint</h1>
          
          <div className="space-y-12 text-zinc-400 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-zinc-200 mb-4">Legal Information</h2>
              <div className="space-y-2">
                <p className="text-zinc-50 font-medium">{personalInfo.name}</p>
                <p>Janick Braun UG (haftungsbeschränkt)</p>
                <p>Ruhe am Bach 5d</p>
                <p>82377 Penzberg, Germany</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-200 mb-4">Contact Details</h2>
              <div className="space-y-2">
                <p>Phone: {personalInfo.phone}</p>
                <p>Email: {personalInfo.email}</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-200 mb-4">Representative</h2>
              <div className="space-y-2">
                <p>Represented by: Janick Braun</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-200 mb-4">Register Entry</h2>
              <div className="space-y-2">
                <p>Entry in the Handeslregister</p>
                <p>Register Court: Municipal Court Munich</p>
                <p>Registration Number: HRB 123456 (Placeholder)</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-200 mb-4">VAT Identification Number</h2>
              <div className="space-y-2">
                <p>VAT identification number according to § 27a of the Value Added Tax Act: DE 123456789 (Placeholder)</p>
              </div>
            </section>

            <section className="pt-8 border-t border-zinc-900 text-sm">
              <p>
                The European Commission provides a platform for online dispute resolution (OS), which you can find here: 
                <a href="https://ec.europa.eu/consumers/odr" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.
                We are neither obligated nor willing to participate in dispute resolution proceedings before a consumer arbitration board.
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
