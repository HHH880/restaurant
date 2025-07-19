import React from 'react';
import { Award, Heart, Users, Utensils } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-burgundy text-white">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-serif font-bold mb-6">Our Story</h1>
            <p className="text-xl text-cream-200">
              A tale of passion, tradition, and culinary excellence spanning three generations
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-burgundy mb-6">
                From Tuscany to Little Italy
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Bella Vista was born from a dream that began in the rolling hills of Tuscany in 1952. 
                  Our founder, Giuseppe Benedetto, learned the art of traditional Italian cooking from his 
                  nonna in the small village of Montalcino, where every meal was a celebration of family, 
                  tradition, and the finest local ingredients.
                </p>
                <p>
                  In 1978, Giuseppe brought his family recipes and culinary passion to New York's Little Italy, 
                  opening the first Bella Vista with nothing but determination and a wood-fired oven that had 
                  been carefully transported from his hometown. What started as a small trattoria has grown 
                  into one of the city's most beloved Italian restaurants.
                </p>
                <p>
                  Today, under the guidance of Giuseppe's son Marco and grandson Antonio, Bella Vista continues 
                  to honor those time-tested traditions while embracing contemporary techniques and presentations. 
                  Every dish tells a story, every ingredient is chosen with care, and every guest is treated like family.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg" 
                alt="Traditional Italian cooking"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-burgundy">45+</div>
                  <div className="text-sm text-burgundy">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-burgundy mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Bella Vista
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-burgundy mb-4">Passion</h3>
              <p className="text-gray-600">
                Every dish is prepared with love and dedication, honoring the traditions passed down through generations.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-burgundy mb-4">Quality</h3>
              <p className="text-gray-600">
                We source only the finest ingredients, many imported directly from Italy, to ensure authentic flavors.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-burgundy mb-4">Family</h3>
              <p className="text-gray-600">
                Every guest is welcomed like family, creating memorable experiences that bring people together.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-burgundy mb-4">Tradition</h3>
              <p className="text-gray-600">
                We honor authentic Italian cooking methods while embracing innovation and contemporary presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-burgundy mb-4">
              Meet Our Executive Chef
            </h2>
            <p className="text-xl text-gray-600">
              Carrying forward a legacy of culinary excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-serif font-bold text-burgundy mb-4">
                  Chef Antonio Benedetto
                </h3>
                <p className="text-xl text-gold mb-6 font-medium">
                  Third Generation Chef & Owner
                </p>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Born into a family of restaurateurs, Chef Antonio Benedetto represents the third generation 
                    of culinary excellence at Bella Vista. After training at the prestigious Culinary Institute 
                    of America and spending two years in Italy studying under renowned chefs in Rome and Bologna, 
                    Antonio returned to honor his family's legacy while bringing fresh innovation to traditional recipes.
                  </p>
                  <p>
                    His philosophy centers on respecting the integrity of classic Italian cuisine while 
                    incorporating modern techniques and seasonal ingredients. Under his leadership, Bella Vista 
                    has received numerous accolades, including recognition in the Michelin Guide and James Beard 
                    Award nominations.
                  </p>
                  <p>
                    When not in the kitchen, Chef Antonio can be found visiting local farms, sourcing the finest 
                    seasonal produce, or traveling to Italy to discover new inspirations for his ever-evolving menu.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-cream-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-burgundy">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-cream-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-burgundy">James Beard</div>
                    <div className="text-sm text-gray-600">Nominee</div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg" 
                  alt="Chef Antonio Benedetto"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-burgundy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-cream-200">
              Our commitment to excellence has been recognized by industry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-burgundy" size={36} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Michelin Guide</h3>
              <p className="text-cream-200 text-sm">Featured Restaurant 2023</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-burgundy" size={36} />
              </div>
              <h3 className="text-lg font-semibold mb-2">James Beard</h3>
              <p className="text-cream-200 text-sm">Outstanding Service Nominee</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-burgundy" size={36} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Wine Spectator</h3>
              <p className="text-cream-200 text-sm">Award of Excellence</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-burgundy" size={36} />
              </div>
              <h3 className="text-lg font-semibold mb-2">OpenTable</h3>
              <p className="text-cream-200 text-sm">Diners' Choice Winner</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;