import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, CheckCircle } from 'lucide-react';

const Reservations: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    specialRequests: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a server
    setIsSubmitted(true);
  };

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', 
    '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'
  ];

  const occasions = [
    'Regular Dining', 'Birthday', 'Anniversary', 'Date Night', 
    'Business Dinner', 'Special Celebration', 'Other'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
          <CheckCircle className="text-green-500 mx-auto mb-6" size={64} />
          <h2 className="text-2xl font-serif font-bold text-burgundy mb-4">
            Reservation Confirmed!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you, {formData.firstName}! Your reservation for {formData.guests} guests on{' '}
            {new Date(formData.date).toLocaleDateString()} at {formData.time} has been confirmed.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            You will receive a confirmation email shortly. If you need to make any changes, 
            please call us at (555) 123-4567.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                guests: '2',
                occasion: '',
                specialRequests: ''
              });
            }}
            className="bg-burgundy hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Make Another Reservation
          </button>
        </div>
      </div>
    );
  }

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
            <h1 className="text-5xl font-serif font-bold mb-6">Reserve Your Table</h1>
            <p className="text-xl text-cream-200">
              Join us for an unforgettable evening of authentic Italian cuisine and warm hospitality
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-serif font-bold text-burgundy mb-6">
                  Reservation Details
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
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
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Reservation Details */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="inline mr-1" size={16} />
                        Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                        <Clock className="inline mr-1" size={16} />
                        Time *
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-colors"
                      >
                        <option value="">Select Time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                        <Users className="inline mr-1" size={16} />
                        Guests *
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-colors"
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                          <option key={num} value={num.toString()}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-2">
                      Occasion
                    </label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-colors"
                    >
                      <option value="">Select Occasion</option>
                      {occasions.map((occasion) => (
                        <option key={occasion} value={occasion}>{occasion}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests or Dietary Restrictions
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-colors resize-none"
                      placeholder="Please let us know about any allergies, dietary restrictions, or special occasions..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-burgundy hover:bg-red-800 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Confirm Reservation
                  </button>
                </form>
              </div>

              {/* Information Sidebar */}
              <div className="space-y-8">
                {/* Hours & Contact */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-serif font-bold text-burgundy mb-6">
                    Hours & Contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="text-burgundy" size={20} />
                      <div>
                        <p className="font-medium">Dinner Service</p>
                        <p className="text-gray-600">Monday - Sunday: 5:00 PM - 11:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="text-burgundy" size={20} />
                      <div>
                        <p className="font-medium">Phone Reservations</p>
                        <p className="text-gray-600">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="text-burgundy" size={20} />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">reservations@bellavistany.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Policies */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-serif font-bold text-burgundy mb-6">
                    Reservation Policies
                  </h3>
                  <div className="space-y-4 text-gray-600">
                    <div>
                      <h4 className="font-medium text-gray-900">Cancellation Policy</h4>
                      <p className="text-sm">Please provide at least 24 hours notice for cancellations.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Large Parties</h4>
                      <p className="text-sm">For parties of 8 or more, please call us directly at (555) 123-4567.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Dress Code</h4>
                      <p className="text-sm">Smart casual attire. We kindly ask that guests refrain from wearing athletic wear.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Seating</h4>
                      <p className="text-sm">Tables are held for 15 minutes past reservation time. Please call if running late.</p>
                    </div>
                  </div>
                </div>

                {/* Special Events */}
                <div className="bg-burgundy text-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-serif font-bold mb-4">
                    Private Events
                  </h3>
                  <p className="text-cream-200 mb-4">
                    Looking to host a special event? Our private dining room accommodates up to 40 guests for intimate celebrations.
                  </p>
                  <button className="bg-gold hover:bg-yellow-500 text-burgundy px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                    Inquire About Private Dining
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservations;