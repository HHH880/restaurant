import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'food', name: 'Cuisine' },
    { id: 'restaurant', name: 'Restaurant' },
    { id: 'events', name: 'Events' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
      alt: 'Signature Pasta Dish',
      category: 'food',
      title: 'Pappardelle al Cinghiale',
      description: 'Our signature wild boar ragu with hand-cut pasta'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg',
      alt: 'Elegant Dining Room',
      category: 'restaurant',
      title: 'Main Dining Room',
      description: 'Intimate dining experience with warm Italian ambiance'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg',
      alt: 'Tiramisu Dessert',
      category: 'food',
      title: 'Tiramisu della Casa',
      description: 'Classic Italian dessert made fresh daily'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg',
      alt: 'Fresh Seafood Pasta',
      category: 'food',
      title: 'Linguine alle Vongole',
      description: 'Fresh clams with white wine and herbs'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg',
      alt: 'Wine Selection',
      category: 'restaurant',
      title: 'Italian Wine Collection',
      description: 'Curated selection of Italian wines'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/11163223/pexels-photo-11163223.jpeg',
      alt: 'Osso Buco',
      category: 'food',
      title: 'Osso Buco alla Milanese',
      description: 'Braised veal shanks with saffron risotto'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
      alt: 'Chef at work',
      category: 'restaurant',
      title: 'Open Kitchen',
      description: 'Watch our chefs create culinary masterpieces'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
      alt: 'Italian ingredients',
      category: 'food',
      title: 'Fresh Ingredients',
      description: 'Imported Italian ingredients and local seasonal produce'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      alt: 'Private dining event',
      category: 'events',
      title: 'Private Dining',
      description: 'Intimate celebrations in our private dining room'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      alt: 'Wedding reception',
      category: 'events',
      title: 'Wedding Reception',
      description: 'Elegant venue for your special celebrations'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg',
      alt: 'Chef presentation',
      category: 'events',
      title: 'Culinary Events',
      description: 'Special chef presentations and wine tastings'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg',
      alt: 'Bar area',
      category: 'restaurant',
      title: 'Italian Bar',
      description: 'Craft cocktails and Italian aperitivos'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(newIndex);
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
            <h1 className="text-5xl font-serif font-bold mb-6">Gallery</h1>
            <p className="text-xl text-cream-200">
              Step inside Bella Vista and discover the artistry of authentic Italian cuisine and elegant ambiance
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="bg-white py-8 sticky top-20 z-40 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-burgundy text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => openLightbox(index)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-lg font-semibold">{image.title}</p>
                      <p className="text-sm text-cream-200">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronLeft size={48} />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronRight size={48} />
            </button>

            {/* Image */}
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <h3 className="text-xl font-semibold mb-2">{filteredImages[selectedImage].title}</h3>
              <p className="text-cream-200">{filteredImages[selectedImage].description}</p>
              <p className="text-sm text-gray-400 mt-2">
                {selectedImage + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-burgundy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Experience Bella Vista Tonight
            </h2>
            <p className="text-xl text-cream-200 mb-8">
              From intimate dinners to special celebrations, create your own memorable moments with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold hover:bg-yellow-500 text-burgundy px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Make a Reservation
              </button>
              <button className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-burgundy px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;