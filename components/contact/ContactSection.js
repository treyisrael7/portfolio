"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ContactForm from "./ContactForm";
import NatureImages from "./NatureImages";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSend = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    setSubmitStatus(null);

    try {
      emailjs.init("99p9RacL7Km7Ima27");

      await emailjs.send("service_is4iwua", "template_vg0o34f", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        title: "New Portfolio Contact",
        time: new Date().toLocaleString(),
      });

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email error:", error);
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="relative py-24 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 relative"
        >
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#a78bfa] rounded opacity-50" />
          <h2 className="text-2xl sm:text-3xl font-bold text-left tracking-wide mb-2">
            Contact Me
          </h2>
          <p className="text-gray-400 max-w-md">
            Want to get in touch? Send me a message — I&apos;d love to hear from
            you!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:max-w-xl"
          >
            <ContactForm
              formData={formData}
              errors={errors}
              isLoading={isLoading}
              submitStatus={submitStatus}
              handleChange={handleChange}
              handleSend={handleSend}
            />
          </motion.div>

          <NatureImages />
        </div>
      </div>
    </motion.section>
  );
}
