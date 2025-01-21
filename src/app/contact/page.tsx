// app/contact/page.tsx
"use client";

import { ContactForm } from "./contact-form";
import { Toaster } from "@/components/ui/toaster";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
    
     
        <ContactForm />
    
      <Toaster />
    </div>
  );
}