
import { Search, CalendarCheck, BookOpen } from "lucide-react"; // icons

export default function HowItWorks() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 mt-10">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How <span className="text-green-600">It Works</span>
        </h1>
        <p className="text-lg text-gray-600">
          Finding the right tutor has never been easier. Just follow these simple steps 
          and start learning today!
        </p>
      </div>

      {/* Steps Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Step 1 */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 flex items-center justify-center rounded-full mx-auto mb-6">
            <Search size={32} />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Search for Tutors
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Use our powerful search to find tutors by subject, location, or skill. 
            Browse detailed profiles and check reviews.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 flex items-center justify-center rounded-full mx-auto mb-6">
            <CalendarCheck size={32} />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Book a Demo
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Connect with your preferred tutor and schedule a free or paid demo session 
            to experience their teaching style.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 flex items-center justify-center rounded-full mx-auto mb-6">
            <BookOpen size={32} />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Start Learning
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Once you’re satisfied, book regular sessions and start your learning journey 
            with full flexibility and trusted tutors.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to Begin?
        </h2>
        <p className="text-gray-600 mb-6">
          Join thousands of students already learning with{" "}
          <span className="text-green-600 font-semibold">KG to PG</span>.
        </p>
        <a
          href="/signup"
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
