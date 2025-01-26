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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345095523!2d144.9537353155046!3d-37.81720987975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b4fbd5f1e0c!2sEnvato!5e0!3m2!1sen!2sau!4v1614238422433!5m2!1sen!2sau"
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
