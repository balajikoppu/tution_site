import { useState } from "react";

interface ChatMessage {
  text: string;
  from: "user" | "bot";
}

const faqs = [
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

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Chat states
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const botReply = (userMsg: string) => {
    const found = faqs.find(
      (faq) =>
        faq.question.toLowerCase().includes(userMsg.toLowerCase()) ||
        faq.answer.toLowerCase().includes(userMsg.toLowerCase())
    );
    return found
      ? found.answer
      : "Sorry, I couldn't find an answer. Please contact support.";
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    setMessages([...messages, { text: chatInput, from: "user" }]);
    const userMessage = chatInput;
    setChatInput("");

    setTimeout(() => {
      const reply = botReply(userMessage);
      setMessages((prev) => [...prev, { text: reply, from: "bot" }]);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-100 mt-10 p-6 sm:p-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions or feedback? We’d love to hear from you! Fill out the form or reach us directly:
          </p>
          <div className="space-y-3">
            <p><span className="font-medium">Address:</span> 123 Tuition Street, Education City</p>
            <p><span className="font-medium">Phone:</span> +91 98765 43210</p>
            <p><span className="font-medium">Email:</span> support@tutionsite.com</p>
          </div>
          <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            Map Placeholder
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {submitted && (
            <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
              Thank you! Your message has been sent.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
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
                  className={`${
                    msg.from === "user"
                      ? "bg-blue-100 self-end text-gray-800"
                      : "bg-gray-200 self-start text-gray-800"
                  } p-2 rounded-lg max-w-[80%]`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="flex border-t border-gray-200">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
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
