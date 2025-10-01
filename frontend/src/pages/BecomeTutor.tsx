import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function BecomeTutor() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 mt-15">
      {/* Hero Section */}
      <div className="bg-emerald-600 text-white py-16 px-6 text-center">
        <h1 className="text-5xl font-">Teach. Inspire. <br /> Earn with Flexibility.</h1>
        <p className="mt-4 text-lg text-emerald-100 max-w-2xl mx-auto">
          Become part of India’s fastest growing tutoring platform. Share
              your knowledge with students and get paid securely.
        </p>
      </div>

      {/* Why Become Tutor */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Flexible Schedule",
            desc: "Teach when it suits you. Morning, evening, or weekends.",
          },
          {
            title: "Earn Income",
            desc: "Set your hourly rate and get paid directly for your sessions.",
          },
          {
            title: "Impact Students",
            desc: "Help learners achieve academic success and personal growth.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-emerald-700">{item.title}</h3>
            <p className="mt-3 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto py-12 px-6">
        {/* ✅ Success Screen */}
        {submitted ? (
          <div className="bg-white shadow-lg rounded-2xl p-12 text-center">
            <CheckCircle2 className="w-20 h-20 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-800">Application Submitted!</h2>
            <p className="text-gray-600 mt-3 max-w-md mx-auto">
              🎉 Thank you for applying to become a tutor at <span className="font-semibold text-emerald-600">KG to PG</span>.  
              Our team will review your profile and get back to you within 2–3 business days.
            </p>
            <button
              onClick={() => {
                setStep(1);
                setSubmitted(false);
              }}
              className="mt-8 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <>
            {/* Stepper */}
            <div className="flex justify-between items-center mb-10">
              {["Personal Info", "Teaching Profile"].map((label, i) => (
                <div
                  key={i}
                  className={`flex-1 text-center ${
                    step === i + 1 ? "text-emerald-700" : "text-gray-500"
                  }`}
                >
                  <div
                    className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 ${
                      step === i + 1
                        ? "border-emerald-600 bg-emerald-50"
                        : "border-gray-300"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <p className="mt-2 text-sm font-medium">{label}</p>
                </div>
              ))}
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <div className="bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Personal Information
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <input type="text" placeholder="Full Name" className="border rounded-lg px-4 py-2 focus:outline-emerald-600" />
                  <input type="email" placeholder="Email" className="border rounded-lg px-4 py-2 focus:outline-emerald-600" />
                  <input type="text" placeholder="Phone Number" className="border rounded-lg px-4 py-2 focus:outline-emerald-600" />
                  <input type="text" placeholder="City" className="border rounded-lg px-4 py-2 focus:outline-emerald-600" />
                </div>
                <div className="flex justify-end mt-8">
                  <button
                    onClick={() => setStep(2)}
                    className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Teaching Profile
                </h2>
                <div className="grid gap-4">
                  <input type="text" placeholder="Subjects you teach (e.g. Math, English)" className="border rounded-lg px-4 py-2 focus:outline-emerald-600" />
                  <input type="number" placeholder="Years of experience" className="border rounded-lg px-4 py-2 focus:outline-emerald-600" />
                  <textarea placeholder="Describe your teaching style..." rows={4} className="border rounded-lg px-4 py-2 focus:outline-emerald-600"></textarea>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Availability (e.g. Weekdays, Evenings)" className="border rounded-lg px-4 py-2 focus:outline-emerald-600" />
                    <input type="number" placeholder="Hourly Rate (₹)" className="border rounded-lg px-4 py-2 focus:outline-emerald-600" />
                  </div>
                  <input type="url" placeholder="Demo class link (optional)" className="border rounded-lg px-4 py-2 focus:outline-emerald-600" />
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
