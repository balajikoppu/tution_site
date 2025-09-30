import { useState } from "react";
import {Link } from "react-router-dom";
import { Star, MapPin, Clock, Search, SlidersHorizontal, X } from "lucide-react";

const tutors = [
  {
    id: 1,
    name: "Ravi Kumar",
    subject: ["Mathematics", "Algebra"],
    location: "Hyderabad",
    rate: 500,
    rating: 4.8,
    experience: "5 years",
    badge: "Top Rated",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Anjali Sharma",
    subject: ["Physics", "Chemistry"],
    location: "Delhi",
    rate: 600,
    rating: 4.6,
    experience: "3 years",
    badge: "New Tutor",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    subject: ["English", "IELTS"],
    location: "Mumbai",
    rate: 400,
    rating: 4.9,
    experience: "6 years",
    badge: "Top Rated",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

export default function FindTutor() {
  const [sortBy, setSortBy] = useState("rating");
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredTutors = tutors
    .filter((tutor) =>
      tutor.name.toLowerCase().includes(search.toLowerCase()) ||
      tutor.subject.some((s) =>
        s.toLowerCase().includes(search.toLowerCase())
      ) ||
      tutor.location.toLowerCase().includes(search.toLowerCase())
    )
    .filter((tutor) =>
      subjectFilter ? tutor.subject.includes(subjectFilter) : true
    )
    .filter((tutor) =>
      locationFilter ? tutor.location === locationFilter : true
    )
    .filter((tutor) =>
      ratingFilter ? tutor.rating >= parseFloat(ratingFilter) : true
    )
    .filter((tutor) =>
      priceFilter ? tutor.rate <= parseInt(priceFilter) : true
    )
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "price-low") return a.rate - b.rate;
      if (sortBy === "price-high") return b.rate - a.rate;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Search + Filter Button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search tutors by subject, name, or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-emerald-400 focus:border-emerald-500 shadow-sm"
            />
          </div>

          {/* Filter Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 shadow"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>

        {/* Tutor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTutors.map((tutor) => (
            <div
              key={tutor.id}
              className="bg-white/80 backdrop-blur-lg border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <img
                  src={tutor.avatar}
                  alt={tutor.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    {tutor.name}
                    {tutor.badge && (
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                        {tutor.badge}
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-500">{tutor.experience} experience</p>
                </div>
              </div>

              {/* Subjects */}
              <div className="mt-4 flex flex-wrap gap-2">
                {tutor.subject.map((subj, i) => (
                  <span
                    key={i}
                    className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200"
                  >
                    {subj}
                  </span>
                ))}
              </div>

              {/* Info */}
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" /> {tutor.location}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600" /> ₹{tutor.rate}/hr
                </p>
                <p className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" /> {tutor.rating} / 5
                </p>
              </div>

              {/* Actions */}
              <div className="mt-6 flex justify-between items-center">
                <Link
                to={`/tutor/${tutor.id}`}>
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 shadow">
                        View Profile
                    </button>
                
                </Link>
                <button className="text-sm text-emerald-600 hover:underline font-medium">
                  Book Demo →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium">
            Load More Tutors
          </button>
        </div>
      </div>

      {/* Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-end z-50">
          <div className="w-full md:w-80 bg-white h-full shadow-lg p-6 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-6 h-6 text-gray-600 hover:text-gray-800" />
              </button>
            </div>

            {/* Filter Options */}
            <div className="flex flex-col gap-4 flex-1">
              <select
                value={subjectFilter}
                onChange={(e) => setSubjectFilter(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm"
              >
                <option value="">All Subjects</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="English">English</option>
                <option value="IELTS">IELTS</option>
              </select>

              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm"
              >
                <option value="">All Locations</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
              </select>

              <select
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm"
              >
                <option value="">All Ratings</option>
                <option value="4.5">4.5 & above</option>
                <option value="4.0">4.0 & above</option>
                <option value="3.5">3.5 & above</option>
              </select>

              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm"
              >
                <option value="">Any Price</option>
                <option value="500">Up to ₹500/hr</option>
                <option value="1000">Up to ₹1000/hr</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-4">
              <button
                onClick={() => {
                  setSubjectFilter("");
                  setLocationFilter("");
                  setRatingFilter("");
                  setPriceFilter("");
                  setSortBy("rating");
                }}
                className="flex-1 border border-gray-300 text-gray-600 py-2 rounded-lg hover:bg-gray-100"
              >
                Reset
              </button>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="flex-1 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
