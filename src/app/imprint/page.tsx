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
              <h2 className="text-xl font-bold text-zinc-200 mb-4">Provider Identification</h2>
              <p className="text-sm text-zinc-500 mb-4">Information pursuant to § 5 of the German Telemedia Act (TMG)</p>
              
              <h3 className="text-md font-semibold text-zinc-300 mt-6 mb-2">Service Provider</h3>
              <div className="space-y-1">
                <p className="text-zinc-50 font-medium">{personalInfo.name}</p>
                <p>Ruhe am Bach 5d</p>
                <p>82377 Penzberg</p>
                <p>Germany</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-200 mb-4">Contact</h2>
              <div className="space-y-2">
                <p>Phone: {personalInfo.phone}</p>
                <p>Email: {personalInfo.email}</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-200 mb-4">Consumer Dispute Resolution</h2>
              <p>
                We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
              </p>
            </section>

            <section className="pt-8 border-t border-zinc-900">
              <h2 className="text-xl font-bold text-zinc-200 mb-4">Disclaimer</h2>
              <h3 className="text-md font-semibold text-zinc-300 mb-2">Liability for Content and Links</h3>
              <p>
                As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 Paragraph 1 of the German Telemedia Act (TMG). According to §§ 8 to 10 TMG, however, we are not obligated to monitor transmitted or stored external information. If we become aware of any legal violations, we will remove this content or links immediately.
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
