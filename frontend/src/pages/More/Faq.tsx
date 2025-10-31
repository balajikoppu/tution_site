import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I register as a student?",
    answer: "Click on the 'Sign Up' button on the top right, fill in your details, and confirm your email.",
  },
  {
    question: "How can I find a tutor?",
    answer: "Go to the 'Find Tutor' page, filter by subject, location, or availability, and select the tutor that suits you.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept UPI, Debit/Credit cards, and net banking. You can choose your preferred option at checkout.",
  },
  {
    question: "Can I reschedule a class?",
    answer: "Yes, you can reschedule a class at least 24 hours in advance from your dashboard.",
  },
  {
    question: "How do I contact support?",
    answer: "You can reach us via the 'Contact Us' page or use this chat icon at the bottom-right.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    setMessages([...messages, message]);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-10 sm:p-12">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        FAQ / Help Center
      </h1>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-2xl mx-auto space-y-4">
        {filteredFaqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full text-left p-4 flex justify-between items-center bg-white hover:bg-gray-50 rounded-lg focus:outline-none"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <span className="text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 border-t border-gray-200 bg-gray-50 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
        {filteredFaqs.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            No results found for "{search}".
          </p>
        )}
      </div>

      {/* Contact Support Link */}
      <div className="text-center mt-12">
        <a
          href="/contact"
          className="text-blue-600 font-medium hover:underline"
        >
          Still need help? Contact support
        </a>
      </div>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {chatOpen && (
          <div className="w-80 bg-white shadow-lg rounded-xl flex flex-col">
            <div className="bg-blue-600 text-white p-4 rounded-t-xl flex justify-between items-center">
              <span>Support Chat</span>
              <button
                onClick={() => setChatOpen(false)}
                className="text-white font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-4 flex-1 overflow-y-auto h-64 space-y-2">
              {messages.length === 0 && (
                <p className="text-gray-400 text-sm">
                  Start the conversation...
                </p>
              )}
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className="bg-blue-100 text-gray-800 p-2 rounded-lg self-end"
                >
                  {msg}
                </div>
              ))}
            </div>
            <div className="flex border-t border-gray-200">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 p-2 focus:outline-none"
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white px-4"
              >
                Send
              </button>
            </div>
          </div>
        )}
        {!chatOpen && (
          <button
            onClick={() => setChatOpen(true)}
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            💬
          </button>
        )}
      </div>
    </div>
  );
}
