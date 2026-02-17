import React from 'react';
import { ShieldCheck, Lock, Eye, Database } from 'lucide-react';

const PrivacyPolicy = () => {
  const currentYear = new Date().getFullYear();

//   pt-32 md:pt-60 pb-20
  return (
    <div className="bg-slate-50 min-h-screen pt-32 md:pt-55 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="bg-blue-900 rounded-2xl p-10 text-white mb-10 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck size={32} className="text-blue-400" />
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Privacy Policy</h1>
          </div>
          <p className="text-blue-100 font-medium">Last Updated: February 17, 2026</p>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 space-y-10 text-gray-700">
          <section>
            <h2 className="text-2xl font-black text-blue-900 mb-4 flex items-center gap-2">
              <Eye className="text-blue-600" size={24} /> 1. Information We Collect
            </h2>
            <p className="leading-relaxed">
              At <strong>GAD Advanced Clinics</strong>, we collect personal information that you voluntarily provide to us when you express interest in obtaining information about us or our services, or when you book an appointment.
            </p>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li><strong>Contact Data:</strong> Name, phone number, and email address.</li>
              <li><strong>Appointment Details:</strong> Preferred date, time, and specific medical specialty (Orthopaedic or Gynaecology).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-blue-900 mb-4 flex items-center gap-2">
              <Database className="text-blue-600" size={24} /> 2. How Your Data is Used
            </h2>
            <p className="leading-relaxed">
              Your information is used strictly for clinical purposes:
            </p>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>To facilitate appointment scheduling with <strong>Dr. Parvinder Singh Arora</strong> or <strong>Dr. Simrandeep Kaur</strong>.</li>
              <li>To send reminders via SMS or Email regarding your visit.</li>
              <li>To maintain our internal patient records for follow-up care.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-blue-900 mb-4 flex items-center gap-2">
              <Lock className="text-blue-600" size={24} /> 3. Data Security
            </h2>
            <p className="leading-relaxed">
              We implement a variety of security measures to maintain the safety of your personal information. Our website is maintained by <strong>Alomonx</strong>, ensuring that technical safeguards are up-to-date. We do not sell or trade your personal data to outside parties.
            </p>
          </section>

          <footer className="pt-10 border-t border-slate-100 text-sm italic text-gray-500">
            © {currentYear} GAD Advanced Clinics. For any privacy-related queries, please contact our administration.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;