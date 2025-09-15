"use client"

import { useState } from "react"

export default function ContactUsSection() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "cdeea7e2-430c-48cc-9578-577b95d64602",
        name: e.target.name.value,
        mobile: e.target.mobile.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    })

    const result = await response.json()
    setLoading(false)

    if (result.success) {
      alert("✅ Message Sent Successfully!")
      e.target.reset()
    } else {
      alert("❌ Something went wrong. Please try again.")
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-gray-50 py-16 flex justify-center items-center"
      style={{
        backgroundImage: "url('/assets/worldmap.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center w-full">
        <h2 className="font-serif text-cormorant text-2xl font-bold text-gray-800 uppercase mb-6">
          Contact Us
        </h2>

         <div className="bg-white/90 shadow-lg rounded-2xl w-full max-w-2xl lg:max-w-3xl p-8 mx-auto">
          <h3 className="text-lg font-semibold text-gray-700 mb-6">
            Get in Touch
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-indigo-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Mobile no</label>
              <input
                type="text"
                name="mobile"
                required
                className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-indigo-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">E-mail</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-indigo-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="3"
                required
                className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-indigo-300"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between pt-4">
              <button
                type="reset"
                className="px-6 py-2 border border-indigo-600 text-indigo-600 font-semibold rounded hover:bg-indigo-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
