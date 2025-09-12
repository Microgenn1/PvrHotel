'use client'

import { useState } from 'react'
 

export default function BookNow() {
  const [formData, setFormData] = useState({
    roomType: '',
    checkIn: '',
    checkOut: '',
    rooms: '',
    adults: '',
    children: '',
    name: '',
    email: '',
    phone: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic validation
    if (
      !formData.roomType ||
      !formData.checkIn ||
      !formData.checkOut ||
      !formData.name ||
      !formData.email ||
      !formData.phone
    ) {
      Swal.fire('Error', 'Please fill all required fields!', 'error')
      return
    }

    const form = e.target
    const formDataObj = new FormData(form)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataObj,
      })

      const result = await response.json()

      if (result.success) {
        Swal.fire('Success!', 'Your reservation has been sent.', 'success')
        setFormData({
          roomType: '',
          checkIn: '',
          checkOut: '',
          rooms: '',
          adults: '',
          children: '',
          name: '',
          email: '',
          phone: '',
        })
      } else {
        Swal.fire('Error', result.message || 'Submission failed.', 'error')
      }
    } catch (error) {
      Swal.fire('Error', 'Something went wrong!', 'error')
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/hotel-bg.jpg')" }}
    >
      <div className="bg-black/70 p-8 rounded-2xl shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Make Your Reservation
        </h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Web3Forms Access Key */}
          <input type="hidden" name="access_key" value="657d7b4e-dc5c-454d-8497-255a725632aa" />

          {/* Room Type */}
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="col-span-2 p-3 rounded-full bg-white/90"
            required
          >
            <option value="">Room Type</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
            <option value="Standard">Standard</option>
          </select>

          {/* Check-In & Check-Out */}
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="p-3 rounded-full bg-white/90"
            required
          />
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="p-3 rounded-full bg-white/90"
            required
          />

          {/* Rooms, Adults, Children */}
          <div className="col-span-2 flex flex-col md:flex-row gap-4">
            <input
              type="number"
              name="rooms"
              placeholder="No of rooms"
              value={formData.rooms}
              onChange={handleChange}
              className="flex-1 p-3 rounded-full bg-white/90"
            />
            <input
              type="number"
              name="adults"
              placeholder="No of adults"
              value={formData.adults}
              onChange={handleChange}
              className="flex-1 p-3 rounded-full bg-white/90"
            />
            <input
              type="number"
              name="children"
              placeholder="No of children"
              value={formData.children}
              onChange={handleChange}
              className="flex-1 p-3 rounded-full bg-white/90"
            />
          </div>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
            className="col-span-2 p-3 rounded-full bg-white/90"
            required
          />

          {/* Email & Phone */}
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-full bg-white/90"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 rounded-full bg-white/90"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="col-span-2 bg-orange-600 text-white font-bold py-3 rounded-full hover:bg-orange-700 transition"
          >
            BOOK NOW
          </button>
        </form>
      </div>
    </div>
  )
}

