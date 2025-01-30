"use client"

import { useState, useEffect } from "react"
import { BASE_URL } from "../constants/constants";


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid"
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number is invalid"
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required"
    if (!formData.message.trim()) errors.message = "Message is required"
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formErrors = validateForm()
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true)
      try {
        console.log("Sending request to API new")
        console.log(JSON.stringify(formData))
        const post_url = `${BASE_URL}/contact/user/`
        console.log("post_url", post_url)
        const response = await fetch(post_url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
        if (response.ok) {
          setSubmitStatus("success")
          setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
        } else {
          throw new Error("Form submission failed")
        }
      } catch (error) {
        console.log("Error", error)
        setSubmitStatus("error")
      } finally {
        setIsSubmitting(false)
      }
    } else {
      setErrors(formErrors)
    }
  }

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus("")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  return (
    <section className="py-5 bg-light">
      <div className="container bg-white text-center shadow border-0">
        {/* Title and Description */}
        <div className="text-center mb-5">
          <h1
            className="mb-3 mt-2 p-3 fw-bold"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#0a0a0a" }}
          >
            Connect with Us for Your Dream Design
          </h1>
          <p className="text-muted" style={{ fontSize: "1.2rem" }}>
            Got questions or need help with your interior design project? We're here to assist you with tailored
            solutions every step of the way!
          </p>
        </div>

        {/* Contact Section */}
        <div className="row">
          {/* Left Column: Logo and Form */}
          <div className="col-md-6 mb-4">
            {/* Contact Form */}
            <form onSubmit={handleSubmit}>
              {submitStatus === "success" && (
                <div className="alert alert-success" role="alert">
                  Message sent successfully!
                </div>
              )}
              {submitStatus === "error" && (
                <div className="alert alert-danger" role="alert">
                  An error occurred. Please try again.
                </div>
              )}
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                  placeholder="Your Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
              </div>
              <div className="mb-3">
                <textarea
                  className={`form-control ${errors.message ? "is-invalid" : ""}`}
                  rows="4"
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>
              <button type="submit" className="btn btn-dark w-100" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right Column: Map */}
          <div className="col-md-6">
            <div className="ratio ratio-16x9 shadow-sm rounded mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.6528360033176!2d85.32318277631136!3d27.604290830027836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb17514fd77df7%3A0x4de5856e995c869d!2sIdeal%20interior%20pvt%20ltd!5e0!3m2!1sen!2snp!4v1737868293210!5m2!1sen!2snp"
                allowFullScreen=""
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
