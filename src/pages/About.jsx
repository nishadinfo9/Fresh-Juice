import { motion } from "framer-motion";

const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "👩‍💼",
      bio: "Passionate about health and wellness",
    },
    {
      name: "Mike Chen",
      role: "Head Chef",
      image: "👨‍🍳",
      bio: "Expert in nutrition and flavor",
    },
    {
      name: "Emma Davis",
      role: "Operations Manager",
      image: "👩‍💻",
      bio: "Ensuring quality in every bottle",
    },
  ];

  const values = [
    {
      icon: "🌱",
      title: "Organic",
      description: "100% certified organic ingredients from local farms",
    },
    {
      icon: "♻️",
      title: "Sustainable",
      description: "Eco-friendly packaging and carbon-neutral delivery",
    },
    {
      icon: "❤️",
      title: "Community",
      description: "Supporting local farmers and giving back",
    },
    {
      icon: "✨",
      title: "Quality",
      description: "Cold-pressed within 24 hours of harvest",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About FreshJuice
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make healthy living accessible, delicious, and
            sustainable for everyone.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
              <span className="text-9xl">🌿</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2020 by health enthusiast Sarah Johnson, FreshJuice
              started as a small juice bar in downtown. What began as a passion
              project quickly grew into a movement.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, we partner with over 50 local organic farms, deliver to
              thousands of homes daily, and remain committed to our founding
              principles: fresh, organic, and sustainable.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every bottle tells a story of dedication, from the farmers who
              grow our ingredients to the team that crafts each blend with care.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 text-center"
              >
                <div className="text-8xl mb-4">{member.image}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
