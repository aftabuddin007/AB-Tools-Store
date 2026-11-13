import React from "react";

const faqData = [
  {
    question: "How do I download and install apps?",
    answer:
      "Browse or search for an app, open its details page, and click the 'Install' or 'Get' button. Once downloaded, the app will be ready to launch on your device.",
  },
  {
    question: "Are all apps on this store safe and verified?",
    answer:
      "Yes. Every submitted app undergoes automated security scans and manual review to ensure it is free from malware and safe for users.",
  },
  {
    question: "How do I update my installed apps?",
    answer:
      "Navigate to your Profile and open 'My Apps' to see available updates. You can update apps individually or select 'Update All'.",
  },
  {
    question: "Can I get a refund for a paid app or in-app purchase?",
    answer:
      "You can request a refund within 48 hours of purchase through your 'Order History' page, subject to our refund policy.",
  },
  {
    question: "How can I publish my own app on the store?",
    answer:
      "Register for a Developer Account, complete the verification steps, and upload your app build along with icons, screenshots, and a description.",
  },
];

const AppStoreFAQ = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-sm opacity-70 mt-2">
          Quick answers about downloading, updating, and publishing apps.
        </p>
      </div>

      {/* Collapse List */}
      <div className="space-y-3">
        {faqData.map((faq, index) => (
          <div
            key={index}
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 border-base-300 border"
          >
            {/* Radio input keeps only one item open at a time */}
            <input
              type="radio"
              name="appstore-faq"
              defaultChecked={index === 0}
            />
            <div className="collapse-title font-semibold">{faq.question}</div>
            <div className="collapse-content text-sm">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppStoreFAQ;