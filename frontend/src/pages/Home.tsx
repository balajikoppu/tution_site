import  { useState } from 'react'



const Home = () => {
  const [role, setRole] = useState<"tutor" | "student">("tutor");

  const handleSearch = () => {
    // Implement search functionality here
    console.log(`Searching for ${role}s in Hyderabad`);
    
  }

  const [activeTab, setActiveTab] = useState<"Tutor" | "Student">("Student");

  interface Testimonial {
  id: number;
  name: string;
  role: "Tutor" | "Student";
  review: string;
  rating: number;
  avatar?: string;
}

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ananya Verma",
      role: "Student",
      review:
        "Found the perfect Math tutor within hours! The platform made everything so simple.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Ravi Kumar",
      role: "Tutor",
      review:
        "Great way to connect with motivated students. My schedule is now fully booked!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      id: 3,
      name: "Simran Kaur",
      role: "Student",
      review:
        "I improved my English grades a lot after finding a tutor here. Highly recommend!",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 4,
      name: "Arjun Nair",
      role: "Tutor",
      review:
        "Love the clean interface and how easy it is to connect with learners nearby.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    },
  ];

  
  return (
    <div className="bg-white/20">
      <section className="bg-gray-light py-20 text-center">
        <h1 className="text-5xl font-extrabold text-slate">
          Learning Made Simple. Teaching Made Rewarding
        </h1>
        <p className="mt-4 text-lg text-gray max-w-2xl mx-auto">
          Connect with trusted tutors and motivated students in your city. Whether you’re here to teach or to learn, we make the journey fast, simple, and secure.
        </p>
        {/*Search Bar*/}
        <div className="mt-8 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-2 bg-white/80 shadow-lg rounded-xl p-4">
          <input 
          type="text"
          value="Hyderabad"
          disabled
          className="flex-1 p-4 w-1/2 border border-gray font-semibold rounded-lg shadow-sm focus:outline-none cursor-not-allowed"
          />
          <select 
          value={role}
          onChange={(e) => setRole(e.target.value as "tutor" | "student")}
          className="p-4  border border-gray rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="tutor">Tutors</option>
            <option value="student">Students</option>
          </select>
          <input
            type="text"
            placeholder="Search for tutors or subjects"
            
            className=" p-4 w-1/2 border border-gray rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
          onClick={handleSearch} 
          className=" px-6 py-4 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:text-black focus:outline-none focus:ring-2 focus:ring-black"
          >
            Search
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate">Why Choose Us?</h2>
          <p className="mt-2 text-gray">
            We make learning easy, accessible, and personalized for every
            student.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-light rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-slate">
                📚 Expert Tutors
              </h3>
              <p className="mt-2 text-gray">
                Learn from experienced professionals and subject matter experts.
              </p>
            </div>
            <div className="p-6 bg-gray-light rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-slate">
                🌍 Flexible Learning
              </h3>
              <p className="mt-2 text-gray">
                Study anytime, anywhere, with tutors from around the world.
              </p>
            </div>
            <div className="p-6 bg-gray-light rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-slate">
                🎯 Personalized Plans
              </h3>
              <p className="mt-2 text-gray">
                Get customized learning paths designed to suit your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tutor Cards */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate text-center">
            Popular Tutors
          </h2>
          <p className="text-gray text-center mt-2">
            Meet our top-rated mentors
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-lg p-6 text-center transition"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-light mb-4" />
                <h3 className="text-xl font-semibold text-slate">Tutor {i}</h3>
                <p className="text-gray">Subject Specialist</p>
                <button className="mt-4 bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent-hover">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

            <section className="bg-gray-light py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-slate">
            What Our Community Says
          </h2>
          <p className="mt-4 text-gray max-w-2xl mx-auto">
            Real stories from students and tutors who found success on our
            platform.
          </p>

          {/* Tabs for Tutor / Student */}
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("Student")}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                activeTab === "Student"
                  ? "bg-emerald-600 text-white shadow"
                  : "bg-white border text-gray hover:bg-gray-100"
              }`}
            >
              Students
            </button>
            <button
              onClick={() => setActiveTab("Tutor")}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                activeTab === "Tutor"
                  ? "bg-emerald-600 text-white shadow"
                  : "bg-white border text-gray hover:bg-gray-100"
              }`}
            >
              Tutors
            </button>
          </div>

          {/* Testimonials Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials
              .filter((t) => t.role === activeTab)
              .map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-left"
                >
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg text-slate">
                        {t.name}
                      </h3>
                      <p className="text-sm text-gray">{t.role}</p>
                    </div>
                  </div>

                  {/* Review */}
                  <p className="mt-4 text-gray leading-relaxed">{t.review}</p>

                  {/* Rating */}
                  <div className="mt-4 flex gap-1 text-accent">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home