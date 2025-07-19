import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-burgundy text-white">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-serif font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-cream-200">
              We'd love to hear from you. Contact us for reservations, inquiries, or just to say hello.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-burgundy transition-colors duration-300">
                <MapPin className="text-burgundy group-hover:text-white" size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-burgundy mb-4">Location</h3>
              <div className="text-gray-600">
                <p>123 Little Italy Street</p>
                <p>New York, NY 10013</p>
                <p className="mt-2 text-sm">Between Mulberry & Mott Street</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-burgundy transition-colors duration-300">
                <Phone className="text-burgundy group-hover:text-white" size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-burgundy mb-4">Phone</h3>
              <div className="text-gray-600">
                <p className="text-lg font-medium">(555) 123-4567</p>
                <p className="mt-2 text-sm">Reservations & Inquiries</p>
                <p className="text-sm">Mon-Sun: 4:00 PM - 10:00 PM</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-burgundy transition-colors duration-300">
                <Mail className="text-burgundy group-hover:text-white" size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-burgundy mb-4">Email</h3>
              <div className="text-gray-600">
                <p>info@bellavistany.com</p>
                <p>reservations@bellavistany.com</p>
                <p className="mt-2 text-sm">We typically respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Hours */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-serif font-bold text-burgundy mb-6">
                  Send us a Message
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="reservation">Reservation Inquiry</option>
                        <option value="private-events">Private Events</option>
                        <option value="catering">Catering Services</option>
                        <option value="feedback">Feedback</option>
                        <option value="employment">Employment</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-colors resize-none"
                        placeholder="Please share your message, questions, or special requests..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-burgundy hover:bg-red-800 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                    >
                      <Send size={20} />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Hours & Additional Info */}
              <div className="space-y-8">
                {/* Hours */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-serif font-bold text-burgundy mb-6 flex items-center">
                    <Clock className="mr-2" size={24} />
                    Operating Hours
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium">Monday - Thursday</span>
                      <span className="text-gray-600">5:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium">Friday - Saturday</span>
                      <span className="text-gray-600">5:00 PM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium">Sunday</span>
                      <span className="text-gray-600">5:00 PM - 10:00 PM</span>
                    </div>
                    <div className="mt-4 p-4 bg-cream-50 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <strong>Note:</strong> We are closed on Thanksgiving Day and Christmas Day. 
                        Holiday hours may vary - please call ahead.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Transportation */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-serif font-bold text-burgundy mb-6">
                    Getting Here
                  </h3>
                  <div className="space-y-4 text-gray-600">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Subway</h4>
                      <p className="text-sm">6 train to Spring St station (2 blocks)</p>
                      <p className="text-sm">N/Q/R/W/J/Z to Canal St station (3 blocks)</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Parking</h4>
                      <p className="text-sm">Street parking available (meters until 7 PM)</p>
                      <p className="text-sm">Nearby garage: 95 Mott Street</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Accessibility</h4>
                      <p className="text-sm">Wheelchair accessible entrance and restrooms</p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-serif font-bold text-burgundy mb-6">
                    Find Us
                  </h3>
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin size={48} className="mx-auto mb-2" />
                      <p className="font-medium">Interactive Map</p>
                      <p className="text-sm">123 Little Italy Street, NY 10013</p>
                      <button className="mt-4 bg-burgundy text-white px-4 py-2 rounded text-sm hover:bg-red-800 transition-colors">
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;