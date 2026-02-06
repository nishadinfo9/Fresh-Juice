import React from "react";
import { motion } from "framer-motion";
import Button from "../UI/Button";

const HealthBenefits = () => {
  const benefits = [
    {
      icon: "💪",
      title: "Boost Energy",
      description:
        "Natural sugars and vitamins provide sustained energy throughout your day",
    },
    {
      icon: "🛡️",
      title: "Strengthen Immunity",
      description:
        "Packed with vitamin C and antioxidants to support your immune system",
    },
    {
      icon: "✨",
      title: "Radiant Skin",
      description:
        "Essential nutrients promote healthy, glowing skin from within",
    },
    {
      icon: "🧠",
      title: "Mental Clarity",
      description:
        "Brain-boosting nutrients help improve focus and cognitive function",
    },
  ];

  return (
    <section
      id="nutrition"
      className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Health Benefits
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every sip is packed with nutrients your body craves
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="text-6xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-12 md:p-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Your Wellness Journey Today
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of happy customers who have transformed their
              health with our fresh juices and smoothies
            </p>
            <Button
              text="Explore Our Menu"
              variant="secondary"
              size="large"
              className=""
              onClick={() =>
                document
                  .querySelector("#shop")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HealthBenefits;
