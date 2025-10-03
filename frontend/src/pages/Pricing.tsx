import { useState } from "react";
import { useNavigate } from "react-router-dom"; // if using React Router

export default function PricingPage() {
  const [role, setRole] = useState("student"); // "student" or "tutor"
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const navigate = useNavigate();

  const studentPlans = [
    {
      name: "Free",
      price: "₹0",
      features: ["Search Tutors", "Basic Filters", "View Tutor Profiles"],
    },
    {
      name: "Standard",
      price: "₹499 / month",
      features: ["Everything in Free", "Book Demo Classes", "Priority Tutor Matching", "Email Support"],
    },
    {
      name: "Premium",
      price: "₹999 / month",
      features: ["Everything in Standard", "Unlimited Bookings", "1:1 Dedicated Support", "Featured Tutor Access"],
    },
  ];

  const tutorPlans = [
    {
      name: "Starter",
      price: "₹0",
      features: ["Create Profile", "Respond to Inquiries", "Basic Visibility"],
    },
    {
      name: "Pro",
      price: "₹799 / month",
      features: ["Everything in Starter", "Priority Listings", "Analytics Dashboard", "Direct Messaging"],
    },
    {
      name: "Elite",
      price: "₹1499 / month",
      features: ["Everything in Pro", "Featured Listings", "Unlimited Bookings", "Dedicated Support"],
    },
  ];

  const plans = role === "student" ? studentPlans : tutorPlans;

  // Default plan mapping when switching roles
  const defaultPlanForRole = {
    student: "Standard",
    tutor: "Pro",
  };

  const handlePlanClick = (planName: string) => {
    if (plans.some((p) => p.name === planName)) {
      setSelectedPlan(planName);
    } else {
      const newRole = role === "student" ? "tutor" : "student";
      setRole(newRole);
      setSelectedPlan(defaultPlanForRole[newRole]);
    }
  };

  const goToPayment = () => {
    // Pass role & plan as query params or state
    navigate(`/payment?role=${role}&plan=${selectedPlan}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6 flex flex-col items-center">
      {/* Role Toggle */}
      <div className="text-center mb-10">
        <div className="inline-flex rounded-full bg-[#E5E7EB] p-1">
          <button
            onClick={() => setRole("student")}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              role === "student"
                ? "bg-[#16A34A] text-white"
                : "text-[#111827] hover:bg-[#D1FAE5]"
            }`}
          >
            For Student
          </button>
          <button
            onClick={() => setRole("tutor")}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              role === "tutor"
                ? "bg-[#16A34A] text-white"
                : "text-[#111827] hover:bg-[#D1FAE5]"
            }`}
          >
            For Tutor
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#111827]">
          Flexible Pricing for {role === "student" ? "Students" : "Tutors"}
        </h1>
        <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
          {role === "student"
            ? "Whether you're just starting or want unlimited access, we have a plan that fits your learning needs."
            : "Grow your tutoring business with flexible plans designed for you."}
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto w-full">
        {plans.map((plan) => (
          <div
            key={plan.name}
            onClick={() => handlePlanClick(plan.name)}
            className={`cursor-pointer relative rounded-3xl p-8 shadow-md border transition-transform duration-300 hover:scale-105 hover:shadow-lg ${
              selectedPlan === plan.name
                ? "border-[#16A34A] bg-white ring-2 ring-[#16A34A]"
                : "border-gray-200 bg-white"
            }`}
          >
            
            {selectedPlan === plan.name && (
              <span className="absolute top-0 right-0 bg-[#FBBF24] text-[#111827] text-xs font-semibold px-3 py-1 rounded-bl-xl rounded-tr-3xl">
                Selected
              </span>
            )}
            <h2 className="text-2xl font-bold text-[#111827]">{plan.name}</h2>
            <p className="text-4xl font-extrabold text-[#16A34A] mt-4">{plan.price}</p>

            <ul className="mt-8 space-y-4 text-[#111827]">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#22C55E]/20 text-[#22C55E] text-sm">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      {selectedPlan && (
        <div className="mt-12">
          <button
            onClick={goToPayment}
            className="bg-[#16A34A] hover:bg-[#22C55E] text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-md transition-all"
          >
            Continue to Payment
          </button>
        </div>
      )}
    </div>
  );
}
