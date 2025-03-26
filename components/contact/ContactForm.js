"use client";

const ContactForm = ({ formData, errors, isLoading, submitStatus, handleChange, handleSend }) => (
  <div className="bg-[#1e1e1e] rounded-xl p-6 shadow-xl border border-[#3c3c3c] w-full">
    <div className="mb-4">
      <label htmlFor="name" className="block mb-2 text-sm font-medium">
        Your Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="John Doe"
        className={`w-full p-3 rounded-md bg-[#2b2b2b] border ${
          errors.name ? "border-red-500" : "border-[#3c3c3c]"
        } text-white focus:outline-none focus:ring-2 focus:ring-[#a78bfa]/50 transition`}
        aria-invalid={errors.name ? "true" : "false"}
        aria-describedby={errors.name ? "name-error" : undefined}
      />
      {errors.name && (
        <p id="name-error" className="mt-1 text-sm text-red-500">
          {errors.name}
        </p>
      )}
    </div>

    <div className="mb-4">
      <label htmlFor="email" className="block mb-2 text-sm font-medium">
        Your Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="your.email@example.com"
        className={`w-full p-3 rounded-md bg-[#2b2b2b] border ${
          errors.email ? "border-red-500" : "border-[#3c3c3c]"
        } text-white focus:outline-none focus:ring-2 focus:ring-[#a78bfa]/50 transition`}
        aria-invalid={errors.email ? "true" : "false"}
        aria-describedby={errors.email ? "email-error" : undefined}
      />
      {errors.email && (
        <p id="email-error" className="mt-1 text-sm text-red-500">
          {errors.email}
        </p>
      )}
    </div>

    <div className="mb-6">
      <label htmlFor="message" className="block mb-2 text-sm font-medium">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        placeholder="Write your message here..."
        className={`w-full p-3 rounded-md bg-[#2b2b2b] border ${
          errors.message ? "border-red-500" : "border-[#3c3c3c]"
        } text-white focus:outline-none focus:ring-2 focus:ring-[#a78bfa]/50 transition`}
        aria-invalid={errors.message ? "true" : "false"}
        aria-describedby={errors.message ? "message-error" : undefined}
      />
      {errors.message && (
        <p id="message-error" className="mt-1 text-sm text-red-500">
          {errors.message}
        </p>
      )}
    </div>

    {submitStatus === "success" && (
      <div className="mb-4 p-3 bg-green-500/10 border border-green-500 rounded-md text-green-500">
        Message sent successfully!
      </div>
    )}

    {submitStatus === "error" && (
      <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded-md text-red-500">
        There was an error sending your message. Please try again.
      </div>
    )}

    <button
      onClick={handleSend}
      disabled={isLoading}
      className={`w-full px-6 py-3 bg-[#a78bfa]/10 border border-[#a78bfa] text-white font-semibold rounded-md transition-all duration-300 ${
        isLoading
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-[#a78bfa] hover:text-black hover:shadow-md"
      }`}
      aria-busy={isLoading}
    >
      {isLoading ? "Sending..." : "Send Message"}
    </button>
  </div>
);

export default ContactForm; 