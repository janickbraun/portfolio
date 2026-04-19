"use client";

import { ResumeList } from "@/components/ui/ResumeList";

export function ResumeSection() {
  return (
    <section id="resume" className="py-24 container mx-auto max-w-5xl px-6">
      <ResumeList />
    </section>
  );
}
