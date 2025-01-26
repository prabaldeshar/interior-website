const ContactUs = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container bg-white text-center shadow border-0">
                {/* Title and Description */}
                <div className="text-center mb-5">
                    <h1 className="mb-3 mt-2 p-3 fw-bold" style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#0a0a0a"}}>Get in Touch</h1>
                    <p className="text-muted" style={{ fontSize: "1.2rem" }}>
                        Have questions or need assistance with your interior design project? We're here to help! Let us guide you with personalized solutions tailored to your needs.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="row">
                    {/* Left Column: Logo and Form */}
                    <div className="col-md-6 mb-4">
                        {/* Logo */}


                        {/* Contact Form */}
                        <form>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    className="form-control"
                                    rows="4"
                                    placeholder="Message"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark w-100">Send Message</button>
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
    );
};

export default ContactUs;
