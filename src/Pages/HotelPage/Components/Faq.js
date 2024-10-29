import React, { useState } from "react";

const Faq = () => {
  const data = [
    {
      id: "1",
      question: "How and when do I pay?",
      answer:
        "Since This option is a non-refundable reservation And there is no cancellation opportunity, payment is usually processed at the time of booking or shortly thereafter.",
    },
    {
      id: "2",
      question: "Is there Anti-Allergic Meal?",
      answer:
        "To inquire about anti-allergic meal options, it's recommended to contact the hotel directly or check their dining services information on their website or booking platform. They can provide details on specific dietary accommodations they offer.",
    },
    {
      id: "3",
      question: "Does the hotel have a pool?",
      answer:
        "To confirm if the hotel has a pool, it's best to check directly with the hotel's website, call their front desk, or consult their amenities list on booking platforms.",
    },
    {
      id: "4",
      question: "Any Identification Documents Is Necessary",
      answer:
        "Identification documents such as a passport, national ID card, or driver's license are usually required for hotel bookings to verify identity and fulfill legal requirements.",
    },
    {
      id: "5",
      question: "What are the check-in and check-out times?",
      answer:
        "Check-in time at most hotels is typically around 3:00 PM, while check-out is generally by 11:00 AM. Specific times may vary, so it's advisable to check with the hotel directly for exact details.",
    },
    {
      id: "6",
      question: "Why was I charged?",
      answer:
        "You were charged for your hotel booking due to the hotel's policy requiring a deposit or full payment at the time of reservation, or possibly due to a cancellation fee if applicable.",
    },
    {
      id: "7",
      question: "Is there a spa?",
      answer:
        "Absolutely! There is indeed a spa facility available for you to enjoy.",
    },
  ];

  const [select, setSelect] = useState();

  const handleSelect = (i) => {
    if (select === i) {
      return setSelect();
    }
    setSelect(i);
  };

  return (
    <div className="faq">
      <div className="heading">
        <h3>The Most Frequented Questions Asked by Traveler's</h3>
      </div>
      <div className="faq-items">
        {data.map((item, i) => {
          return (
            <div className="faq-data" key={i} onClick={() => handleSelect(i)}>
              <div className="question">
                <h5>{item.question}</h5>
                <img
                  src={require("../../../assets/uparrow.png")}
                  alt=""
                  className={select === i ? "reverse" : ""}
                />
              </div>
              <div className={select === i ? "answers show" : "answers"}>
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
