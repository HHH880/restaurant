import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin, Phone, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const featuredDishes = [
    {
      name: "Osso Buco alla Milanese",
      description: "Braised veal shanks with saffron risotto, a true Lombard classic",
      price: "$38",
      image: "https://images.pexels.com/photos/11163223/pexels-photo-11163223.jpeg"
    },
    {
      name: "Linguine alle Vongole",
      description: "Fresh clams with white wine, garlic, and Italian parsley",
      price: "$28",
      image: "https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg"
    },
    {
      name: "Tiramisu della Casa",
      description: "Classic Italian dessert with mascarpone and espresso",
      price: "$12",
      image: "https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Benvenuti a<br />
            <span className="text-gold">Bella Vista</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cream-200 max-w-2xl mx-auto">
            Where authentic Italian tradition meets contemporary elegance in the heart of Little Italy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/reservations"
              className="bg-burgundy hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Make a Reservation
            </Link>
            <Link
              to="/menu"
              className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-burgundy px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurant Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-burgundy mb-4">
              An Unforgettable Culinary Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the finest Italian cuisine crafted with passion, tradition, and the freshest ingredients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-burgundy transition-colors duration-300">
                <Star className="text-burgundy group-hover:text-white" size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-burgundy mb-4">Michelin Recognized</h3>
              <p className="text-gray-600">
                Our commitment to culinary excellence has earned recognition from the world's most prestigious dining guide.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-burgundy transition-colors duration-300">
                <Clock className="text-burgundy group-hover:text-white" size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-burgundy mb-4">Three Generations</h3>
              <p className="text-gray-600">
                Family recipes passed down through generations, bringing authentic flavors from the hills of Tuscany to your table.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-burgundy transition-colors duration-300">
                <MapPin className="text-burgundy group-hover:text-white" size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-burgundy mb-4">Imported Ingredients</h3>
              <p className="text-gray-600">
                We source the finest ingredients directly from Italy, including San Marzano tomatoes, Parmigiano-Reggiano, and estate olive oils.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-burgundy mb-4">
              Chef's Featured Creations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our signature dishes that capture the essence of Italian culinary artistry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-burgundy text-white px-3 py-1 rounded-full font-semibold">
                    {dish.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-burgundy mb-2">{dish.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center bg-burgundy hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Full Menu
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-burgundy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Book Your Table Tonight
            </h2>
            <p className="text-xl text-cream-200 mb-8">
              Join us for an evening of exceptional Italian cuisine, carefully curated wines, and warm hospitality in an elegant atmosphere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/reservations"
                className="bg-gold hover:bg-yellow-500 text-burgundy px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Reserve Now
              </Link>
              <div className="flex items-center space-x-2 text-cream-200">
                <Phone size={20} />
                <span className="text-lg">(555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;