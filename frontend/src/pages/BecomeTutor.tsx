import { useState } from "react";
import { ArrowRight, CheckCircle, BookOpen, Clock, Users } from "lucide-react";

export default function BecomeTutor() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-gray-100 mt-15">
      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-4xl font-bold mb-4">
            Share Your Knowledge. Inspire Students.
          </h1>
          <p className="text-lg mb-6">
            Join thousands of tutors and teach with flexibility, while earning
            securely.
          </p>
          <a href="#application">
            <button className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-xl shadow hover:bg-gray-100 transition">
              Start Application
            </button>
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-6">
        {[
          { icon: Users, text: "Find students near you" },
          { icon: BookOpen, text: "Teach subjects you love" },
          { icon: Clock, text: "Flexible schedules" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 text-center space-y-3"
          >
            <item.icon className="w-10 h-10 text-emerald-600 mx-auto" />
            <p className="font-medium">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Application Form */}
      <section id="application" className="max-w-3xl mx-auto py-12 px-6">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Tutor Application</h2>

          {/* Step Progress */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`flex-1 text-center ${
                  step >= s ? "text-emerald-600" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
                    step >= s ? "bg-emerald-600 text-white" : "bg-gray-200"
                  }`}
                >
                  {step > s ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <span>{s}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Step Content */}
          {step === 1 && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Location (City, State)"
                className="w-full p-3 border rounded-lg"
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Highest Qualification"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Subjects you teach"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="number"
                placeholder="Years of Experience"
                className="w-full p-3 border rounded-lg"
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Available Days (e.g., Mon–Fri)"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Available Time Slots"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="number"
                placeholder="Hourly Rate (₹)"
                className="w-full p-3 border rounded-lg"
              />
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <label className="block text-gray-600">
                Upload Resume / Certificates
              </label>
              <input
                type="file"
                className="w-full p-2 border rounded-lg"
              />
              <textarea
                placeholder="Any additional notes..."
                className="w-full p-3 border rounded-lg"
              ></textarea>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="ml-auto px-6 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 flex items-center gap-2"
              >
                Next <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button className="ml-auto px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
                Submit Application
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-emerald-600 text-white py-10 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Inspire Students?</h2>
        <p className="mb-6">Join our growing network of passionate tutors.</p>
        <button className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-xl shadow hover:bg-gray-100 transition">
          Become a Tutor Now
        </button>
      </section>
    </div>
  );
}
