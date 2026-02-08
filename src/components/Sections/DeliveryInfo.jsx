import React from "react";
import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const DeliveryInfo = () => {
  return (
    <section
      id="delivery"
      className="py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Fresh Delivery
              <span className="block text-primary-600">Right to Your Door</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Download our app and get your favorite juices, smoothies, and
              bowls delivered fresh within hours. Track your order in real-time
              and enjoy exclusive app-only deals.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚚</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Same-Day Delivery
                  </h3>
                  <p className="text-gray-600">
                    Order before 2 PM for same-day delivery
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">❄️</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Temperature Controlled
                  </h3>
                  <p className="text-gray-600">
                    Insulated packaging keeps products fresh
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Real-Time Tracking
                  </h3>
                  <p className="text-gray-600">
                    Know exactly when your order will arrive
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-sm text-gray-600 mb-4">
                Download our app now:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors min-h-[44px] space-x-3"
                >
                  <FaApple className="text-2xl" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors min-h-[44px] space-x-3"
                >
                  <FaGooglePlay className="text-2xl" />
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm">
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  <div className="h-full bg-gradient-to-b from-primary-50 to-white p-6 flex flex-col items-center justify-center">
                    <div className="text-8xl mb-4">📱</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      FreshJuice App
                    </h3>
                    <p className="text-gray-600 text-center">
                      Order, Track, Enjoy
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-8 -right-8 md:w-64 md:h-64 bg-primary-300 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -z-10 -top-8 -left-8 md:w-64 md:h-64 bg-secondary-300 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;
