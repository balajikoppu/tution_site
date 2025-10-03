import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { LockClosedIcon, CreditCardIcon, BanknotesIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/solid";

export default function PaymentPage() {
  const [searchParams] = useSearchParams();
  const [method, setMethod] = useState("card"); // default method

  const role = searchParams.get("role") || "student";
  const planName = searchParams.get("plan");

  const studentPlans = {
    Free: { price: "₹0", features: ["Search Tutors", "Basic Filters", "View Tutor Profiles"] },
    Standard: {
      price: "₹499 / month",
      features: ["Everything in Free", "Book Demo Classes", "Priority Tutor Matching", "Email Support"],
    },
    Premium: {
      price: "₹999 / month",
      features: ["Everything in Standard", "Unlimited Bookings", "1:1 Dedicated Support", "Featured Tutor Access"],
    },
  };

  const tutorPlans = {
    Starter: { price: "₹0", features: ["Create Profile", "Respond to Inquiries", "Basic Visibility"] },
    Pro: {
      price: "₹799 / month",
      features: ["Everything in Starter", "Priority Listings", "Analytics Dashboard", "Direct Messaging"],
    },
    Elite: {
      price: "₹1499 / month",
      features: ["Everything in Pro", "Featured Listings", "Unlimited Bookings", "Dedicated Support"],
    },
  };
  
  const plan = role === "student" ? studentPlans[planName] : tutorPlans[planName];

  if (!plan) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-3xl font-bold text-red-600">Invalid Plan Selected</h1>
        <p className="mt-2 text-gray-600">Please go back and choose a valid plan.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 mt-10">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        
        {/* RIGHT: Order Summary */}
        <div className="bg-gray-50 p-10 border-l border-gray-100 flex flex-col justify-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Your Plan</h2>
          <h3 className="text-lg font-semibold text-green-600">{planName} Plan</h3>
          <p className="text-3xl font-extrabold text-gray-900 mt-2">{plan.price}</p>
          <ul className="mt-6 space-y-2 text-gray-700">
            {plan.features.map((f:string , i: number) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
        
        {/* LEFT: Payment Form */}
        <div className="p-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>

          {/* Payment Method Tabs */}
          <div className="flex gap-3 mb-8">
            <button
              onClick={() => setMethod("card")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${
                method === "card" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              <CreditCardIcon className="w-5 h-5" />
              Card
            </button>
            <button
              onClick={() => setMethod("upi")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${
                method === "upi" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              <DevicePhoneMobileIcon className="w-5 h-5" />
              UPI
            </button>
            <button
              onClick={() => setMethod("netbanking")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${
                method === "netbanking" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              <BanknotesIcon className="w-5 h-5" />
              Net Banking
            </button>
            <button
              onClick={() => setMethod("wallet")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${
                method === "wallet" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              <img src="https://img.icons8.com/color/48/paytm.png" alt="Wallet" className="h-5" />
              Wallet
            </button>
          </div>

          {/* Dynamic Payment Form */}
          <form className="space-y-6">
            {method === "card" && (
              <>
                <div className="relative">
                  <input type="text" placeholder="Card Number" className="w-full border-b-2 border-gray-300 focus:border-green-600 outline-none py-3" required />
                </div>
                <div className="flex space-x-4">
                  <input type="text" placeholder="MM/YY" className="w-1/2 border-b-2 border-gray-300 focus:border-green-600 outline-none py-3" required />
                  <input type="text" placeholder="CVC" className="w-1/2 border-b-2 border-gray-300 focus:border-green-600 outline-none py-3" required />
                </div>
              </>
            )}

            {method === "upi" && (
              <div className="relative">
                <input type="text" placeholder="Enter UPI ID (e.g. user@upi)" className="w-full border-b-2 border-gray-300 focus:border-green-600 outline-none py-3" required />
              </div>
            )}

            {method === "netbanking" && (
              <div className="relative">
                <select className="w-full border-b-2 border-gray-300 focus:border-green-600 outline-none py-3" required>
                  <option value="">Select Bank</option>
                  <option value="hdfc">HDFC Bank</option>
                  <option value="sbi">SBI</option>
                  <option value="icici">ICICI Bank</option>
                  <option value="axis">Axis Bank</option>
                </select>
              </div>
            )}

            {method === "wallet" && (
              <div className="relative">
                <select className="w-full border-b-2 border-gray-300 focus:border-green-600 outline-none py-3" required>
                  <option value="">Choose Wallet</option>
                  <option value="paytm">Paytm</option>
                  <option value="phonepe">PhonePe</option>
                  <option value="amazonpay">Amazon Pay</option>
                </select>
              </div>
            )}

            <button
              type="submit"
              className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-green-600 to-green-500 hover:to-green-700 text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg transition-transform transform hover:scale-105"
            >
              <LockClosedIcon className="w-5 h-5" />
              Pay {plan.price}
            </button>
          </form>

          {/* Trust Signals */}
          <div className="mt-6 flex items-center justify-center space-x-4 text-gray-400 text-sm">
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6" />
            <img src="https://img.icons8.com/color/48/mastercard.png" alt="MasterCard" className="h-6" />
            <img src="https://img.icons8.com/color/48/google-pay.png" alt="Google Pay" className="h-6" />
            <span>Secure Payment</span>
          </div>
        </div>

        
      </div>
    </div>
  );
}
