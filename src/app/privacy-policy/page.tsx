import { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How I handle your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn delay={0.1}>
          <h1 className="text-4xl font-bold text-zinc-50 mb-12 tracking-tight">Privacy Policy</h1>
          
          <div className="space-y-12 text-zinc-400 leading-relaxed text-sm">
            <section>
              <h2 className="text-xl font-bold text-zinc-200 mb-4 uppercase tracking-widest text-[13px]">1. An overview of data protection</h2>
              <h3 className="font-bold text-zinc-100 mt-6 mb-2">General information</h3>
              <p>
                The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit this website. The term “personal data” comprises all data that can be used to personally identify you. For detailed information about the subject matter of data protection, please consult our Data Protection Declaration, which we have included beneath this copy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-200 mb-4 uppercase tracking-widest text-[13px]">2. Data recording on this website</h2>
              <h3 className="font-bold text-zinc-100 mt-6 mb-2">Who is the responsible party for the recording of data on this website?</h3>
              <p>
                The data on this website are processed by the website operator. Their contact details can be found in the section "Information about the responsible party (referred to as the "controller" in the GDPR)" in this Privacy Policy.
              </p>
              
              <h3 className="font-bold text-zinc-100 mt-6 mb-2">How do we record your data?</h3>
              <p>
                On the one hand, your data are collected when you communicate them to us. This can, for instance, be data you enter into a contact form.
              </p>
              <p className="mt-4">
                Other data are recorded by our IT systems automatically or after you consent to its recording during your website visit. This data comprises primarily technical information (e.g., web browser, operating system, or time the site was accessed). This information is recorded automatically when you access this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-200 mb-4 uppercase tracking-widest text-[13px]">3. Rights of the Data Subject</h2>
              <p>
                You have the right to receive information about the source, recipient, and purposes of your archived personal data at any time without having to pay a fee for such disclosures. You also have the right to demand that your data are rectified or eradicated. If you have given your consent to data processing, you have the option to revoke this consent at any time, which shall affect all future data processing. Moreover, you have the right to demand that the processing of your data be restricted under certain circumstances. Furthermore, you have the right to log a complaint with the competent supervising agency.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-200 mb-4 uppercase tracking-widest text-[13px]">4. Hosting and Content Delivery Networks (CDN)</h2>
              <p>
                We are hosting the content of our website with the following provider:
              </p>
              <h3 className="font-bold text-zinc-100 mt-4 mb-2">External Hosting</h3>
              <p>
                This website is hosted externally. Personal data collected on this website are stored on the servers of the host. These may include, but are not limited to, IP addresses, contact requests, metadata and communications, contract information, contact details, web page access, and other data generated through a website.
              </p>
              <p className="mt-4">
                External hosting is used for the purpose of fulfilling the contract with our potential and existing customers (Art. 6(1)(b) GDPR) and in the interest of a secure, fast, and efficient provision of our online services by a professional provider (Art. 6(1)(f) GDPR).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-200 mb-4 uppercase tracking-widest text-[13px]">5. Analytics and third-party tools</h2>
              <p>
                When you visit this website, your surfing behavior may be statistically analyzed. This happens primarily with cookies and with so-called analysis programs. As a rule, the analysis of your surfing behavior is anonymous; the surfing behavior cannot be traced back to you.
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
