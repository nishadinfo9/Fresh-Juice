import React, { useRef, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../Logo/Logo";

const Footer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRef = useRef();
  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Story", href: "#about" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "Juices", href: "#shop" },
        { label: "Smoothies", href: "#shop" },
        { label: "Bowls", href: "#shop" },
        { label: "Subscriptions", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQ", href: "#" },
        { label: "Shipping", href: "#delivery" },
        { label: "Returns", href: "#" },
        { label: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    e.preventDefault();

    console.log(inputRef.current.value);
    setTimeout(() => setIsSubmitting(false), 200);
    inputRef.current.value = "";
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              <Logo />
            </h3>
            <p className="text-gray-400 mb-6">
              Bringing fresh, organic juices and smoothies to your doorstep
              since 2020.
            </p>
            <form
              onSubmit={handleSubmit}
              className="bg-white h-10 text-black flex items-center justify-between rounded-full"
            >
              <input
                className="w-full h-full outline-none px-5"
                type="email"
                name="email"
                ref={inputRef}
                required
                placeholder="Enter your email"
              />
              <button
                disabled={isSubmitting}
                type="submit"
                className="text-lg disabled:bg-gray-500 h-full cursor-pointer px-3 bg-primary-500 rounded-r-full"
              >
                {isSubmitting ? "subscribing" : "subscribe"}
              </button>
            </form>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold text-lg mb-4">{section.title}</h4>
              <ul className="-space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors min-h-[44px] inline-flex items-center"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 FreshJuice. All rights reserved.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors min-h-[44px] min-w-[44px]"
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
