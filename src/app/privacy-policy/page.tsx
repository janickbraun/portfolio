import { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How I handle your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn delay={0.1}>
          <h1 className="text-4xl font-bold text-zinc-50 mb-12 tracking-tight">Privacy Policy</h1>
          
          <div className="space-y-12 text-zinc-400 leading-relaxed text-sm">
            <section>
              <h2 className="text-xl font-bold text-zinc-200 mb-4">1. An overview of data protection</h2>
              <h3 className="font-bold text-zinc-100 mt-6 mb-2">General information</h3>
              <p>
                The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit this website. Importantly: <strong>We do not actively collect any personal data.</strong> There are no contact forms, user accounts, or tracking cookies on this website. For detailed information about the subject matter of data protection, please consult our Data Protection Declaration clearly outlined below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-200 mb-4">2. General information and mandatory information</h2>
              <h3 className="font-bold text-zinc-100 mt-6 mb-2">Information about the responsible party</h3>
              <p className="mb-4">
                The responsible party for data processing on this website is:
              </p>
              <div className="text-zinc-300 not-italic space-y-1">
                <p className="font-bold">Janick Braun</p>
                <p>Ruhe am Bach 5d</p>
                <p>82377 Penzberg, Germany</p>
                <p>Phone: +49 (0) 160 98640952</p>
                <p>Email: janick@secondskate.de</p>
              </div>
              
              <h3 className="font-bold text-zinc-100 mt-8 mb-2">How do we record your data?</h3>
              <p>
                Because we do not provide a contact form or equivalent tools, we do not collect personal data submitted by you. Any data recorded when you visit the website is strictly standard technical information recorded automatically by our hosting provider (e.g., web browser, operating system, or time the site was accessed) or through Vercel Analytics, which operates without storing cookies and without collecting personally identifiable information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-200 mb-4">3. Hosting</h2>
              <p>
                We are hosting the content of our website with the following provider:
              </p>
              <h3 className="font-bold text-zinc-100 mt-4 mb-2">External Hosting (Vercel)</h3>
              <p>
                This website is hosted externally by Vercel Inc. Standard technical data (such as IP addresses, web page access, and browser data) may be processed by the host's servers to ensure the secure and reliable delivery of this website. External hosting is used for the purpose of fulfilling the contract with our potential and existing customers (Art. 6(1)(b) GDPR) and in the interest of a secure, fast, and efficient provision of our online services by a professional provider (Art. 6(1)(f) GDPR).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-200 mb-4">4. Analysis Tools - Vercel Analytics</h2>
              <p>
                We use the "Vercel Analytics" service from Vercel Inc., 440 N Barranca Ave #4133 Covina, CA 91723, USA, to analyze and evaluate the performance of our website.
              </p>
              
              <h3 className="font-bold text-zinc-100 mt-6 mb-2">Type of data processing and waiver of cookies</h3>
              <p>
                Vercel Analytics is designed to be privacy-friendly and <strong>does not use cookies</strong> or similar technologies that store or read information on your device. When you visit our website, only technical information such as browser type, operating system, and pages visited is recorded to improve the user-friendliness of our platform. No personal data is collected.
              </p>
              <p className="mt-4">
                Your IP address is only processed briefly to generate an anonymized hash value, which automatically expires daily. The IP address itself is not stored. It is not possible for us to personally identify you or create cross-website tracking profiles.
              </p>

              <h3 className="font-bold text-zinc-100 mt-6 mb-2">Legal basis</h3>
              <p>
                Since no tracking cookies are used and the data processing is highly anonymized, Vercel Analytics is used without consent on the basis of our legitimate interest in a statistical evaluation of user behavior to optimize our web presence (Art. 6 Para. 1 lit. f GDPR).
              </p>

              <h3 className="font-bold text-zinc-100 mt-6 mb-2">Data processing agreement (DPA) and data transfer</h3>
              <p>
                We have concluded a data processing agreement (DPA) with Vercel in accordance with Art. 28 GDPR. This ensures that Vercel processes the data strictly according to our instructions and in compliance with the GDPR. Since Vercel is a US company, data processing in the USA cannot be excluded. Vercel Inc. is certified under the EU-US Data Privacy Framework (DPF). In addition, data transfer is secured by the conclusion of standard contractual clauses (SCC) of the EU Commission to ensure an adequate level of data protection.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-200 mb-4">5. Plugins and Tools</h2>

              <h3 className="font-bold text-zinc-100 mt-6 mb-2">YouTube Embedded Videos</h3>
              <p>
                We embed YouTube videos on our website to showcase projects. The operator of the pages is Google Ireland Limited ("Google"), Gordon House, Barrow Street, Dublin 4, Ireland.
              </p>
              <p className="mt-4">
                When you play a YouTube video on our site, a connection to the YouTube servers is established. This tells the YouTube server which of our pages you have visited. If you are logged into your YouTube account, you enable YouTube to explicitly assign your browsing behavior to your personal profile. You can prevent this by logging out of your YouTube account before playing a video.
              </p>
              <p className="mt-4">
                For more information on how user data is handled, please consult the YouTube Data Privacy Declaration under: <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>.
              </p>

              <h3 className="font-bold text-zinc-100 mt-6 mb-2">External Links</h3>
              <p>
                Our website contains links to external platforms and social networks (such as GitHub, LinkedIn, Instagram, etc.). We explicitly state that we have no influence over whether their operators comply with data protection regulations. When you click on such a link, you leave our site, and the privacy policies of the respective external operators apply.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-200 mb-4">6. Your Rights</h2>
              <p>
                Within the framework of the applicable legal provisions, you have the right at any time to free information about your stored personal data, its origin and recipient and the purpose of the data processing and, if applicable, a right to correction, blocking or deletion of this data. You can contact us at any time if you have further questions on the subject of personal data.
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
