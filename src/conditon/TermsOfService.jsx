import React from 'react';
import { Scale, AlertCircle, Calendar, Code } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 md:pt-55 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="bg-slate-950 rounded-2xl p-10 text-white mb-10 shadow-xl border-b-4 border-blue-600">
          <div className="flex items-center gap-3 mb-4">
            <Scale size={32} className="text-blue-500" />
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Terms of Service</h1>
          </div>
          <p className="text-slate-400 font-medium font-mono">Document Ref: TOS-2026-GAD</p>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 space-y-12">
          
          <section className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
            <h2 className="text-xl font-bold text-red-900 mb-2 flex items-center gap-2">
              <AlertCircle size={20} /> Medical Disclaimer
            </h2>
            <p className="text-red-800 text-sm leading-relaxed">
              The information provided on this website is for general educational purposes only. It is <strong>not</strong> a substitute for professional medical advice, diagnosis, or treatment. Always consult with our specialists for any health concerns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-blue-900 mb-4">1. Use of Website</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing this website, you agree to comply with these terms. The content, including doctor profiles and treatment descriptions, is the intellectual property of <strong>GAD Advanced Clinics</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-blue-900 mb-4 flex items-center gap-2">
              <Calendar className="text-blue-600" size={24} /> 2. Appointment Booking
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Submitting an appointment request through the "Book Appointment" form does not constitute a guaranteed slot. Our staff will contact you via the provided phone number to finalize the schedule based on doctor availability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-blue-900 mb-4 flex items-center gap-2">
              <Code className="text-blue-600" size={24} /> 3. Development Credits
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This website has been designed and developed by <strong>Alomonx</strong>. The technical architecture and user interface are protected under development agreements.
            </p>
          </section>

          <section className="text-center pt-10">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
              ⚖️ Use of this site constitutes acceptance of these terms. ⚖️
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;