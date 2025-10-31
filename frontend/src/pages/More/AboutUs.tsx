

export default function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 mt-10">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About <span className="text-green-600">KG to PG</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We connect students and parents with the best tutors across India. 
          Our mission is to make quality education accessible to everyone, from 
          Kindergarten to Postgraduate level.
        </p>
      </div>

      {/* Mission / Vision Section */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">🎯 Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To empower students by giving them access to the best learning 
            resources and expert tutors, helping them achieve academic 
            excellence and career success.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">🌱 Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To become India’s most trusted tutoring platform where every learner 
            finds the right mentor to unlock their full potential.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-green-50 py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-green-600">10K+</h3>
            <p className="text-gray-700">Verified Tutors</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-green-600">50K+</h3>
            <p className="text-gray-700">Students Served</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-green-600">200+</h3>
            <p className="text-gray-700">Cities Covered</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Example Team Member */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-100"
            />
            <h3 className="text-xl font-semibold text-gray-800">Rohit Sharma</h3>
            <p className="text-green-600 text-sm">Founder & CEO</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-100"
            />
            <h3 className="text-xl font-semibold text-gray-800">Ananya Gupta</h3>
            <p className="text-green-600 text-sm">Head of Operations</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-100"
            />
            <h3 className="text-xl font-semibold text-gray-800">Vikram Patel</h3>
            <p className="text-green-600 text-sm">Tech Lead</p>
          </div>
        </div>
      </div>
    </div>
  );
}
