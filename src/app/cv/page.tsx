import { Metadata } from "next";
import { ResumeList } from "@/components/ui/ResumeList";

export const metadata: Metadata = {
  title: "Resume",
  description: "My professional and educational journey.",
};

export default function CVPage() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-12 md:py-24">
      <ResumeList 
        title="Resume"
        subtitle="A summary of my roles and involvements across a professional timeline."
      />
    </div>
  );
}
