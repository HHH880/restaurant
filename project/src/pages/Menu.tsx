import React, { useState } from 'react';
import { Leaf, Wine, Star } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('antipasti');

  const categories = [
    { id: 'antipasti', name: 'Antipasti', icon: '🍅' },
    { id: 'primi', name: 'Primi Piatti', icon: '🍝' },
    { id: 'secondi', name: 'Secondi Piatti', icon: '🥩' },
    { id: 'dolci', name: 'Dolci', icon: '🍮' },
    { id: 'beverages', name: 'Beverages', icon: '🍷' }
  ];

  const menuItems = {
    antipasti: [
      {
        name: "Antipasto della Casa",
        description: "Selection of Italian cured meats, aged cheeses, marinated vegetables, and olives",
        price: "$24",
        dietary: ["gluten-free"],
        signature: true
      },
      {
        name: "Burrata con Prosciutto",
        description: "Creamy burrata cheese with Parma prosciutto, arugula, and fig balsamic glaze",
        price: "$18",
        dietary: ["vegetarian"]
      },
      {
        name: "Crudo di Tonno",
        description: "Yellowfin tuna crudo with Sicilian capers, blood orange, and extra virgin olive oil",
        price: "$22",
        dietary: ["gluten-free"]
      },
      {
        name: "Arancini Siciliani",
        description: "Traditional stuffed rice balls with ragu, mozzarella, and peas",
        price: "$16",
        dietary: ["vegetarian"]
      },
      {
        name: "Bruschetta Trilogy",
        description: "Three varieties: classic tomato basil, mushroom truffle, and whipped ricotta with honey",
        price: "$14",
        dietary: ["vegetarian"]
      }
    ],
    primi: [
      {
        name: "Linguine alle Vongole",
        description: "Fresh clams with white wine, garlic, parsley, and a touch of calabrian chili",
        price: "$28",
        signature: true
      },
      {
        name: "Risotto ai Porcini",
        description: "Carnaroli rice with porcini mushrooms, truffle oil, and Parmigiano-Reggiano",
        price: "$26",
        dietary: ["vegetarian", "gluten-free"]
      },
      {
        name: "Pappardelle al Cinghiale",
        description: "Hand-cut pasta with wild boar ragu, rosemary, and aged pecorino",
        price: "$32",
        signature: true
      },
      {
        name: "Gnocchi di Patate",
        description: "House-made potato gnocchi with gorgonzola cream sauce and toasted walnuts",
        price: "$24",
        dietary: ["vegetarian"]
      },
      {
        name: "Spaghetti Carbonara",
        description: "Traditional Roman recipe with guanciale, eggs, pecorino, and black pepper",
        price: "$22"
      },
      {
        name: "Ravioli di Zucca",
        description: "Butternut squash ravioli with brown butter, sage, and amaretti crumble",
        price: "$26",
        dietary: ["vegetarian"]
      }
    ],
    secondi: [
      {
        name: "Osso Buco alla Milanese",
        description: "Braised veal shanks with saffron risotto and gremolata",
        price: "$38",
        signature: true
      },
      {
        name: "Branzino in Crosta di Sale",
        description: "Mediterranean sea bass baked in sea salt crust with lemon and herbs",
        price: "$34",
        dietary: ["gluten-free"]
      },
      {
        name: "Costoletta alla Milanese",
        description: "Bone-in veal chop, breaded and pan-fried, served with arugula and cherry tomatoes",
        price: "$42"
      },
      {
        name: "Salmone alle Erbe",
        description: "Herb-crusted Atlantic salmon with roasted vegetables and balsamic reduction",
        price: "$30",
        dietary: ["gluten-free"]
      },
      {
        name: "Pollo Parmigiana",
        description: "Free-range chicken breast with San Marzano tomato sauce and fresh mozzarella",
        price: "$28"
      }
    ],
    dolci: [
      {
        name: "Tiramisu della Casa",
        description: "Classic mascarpone dessert with espresso-soaked ladyfingers and cocoa",
        price: "$12",
        signature: true
      },
      {
        name: "Panna Cotta ai Frutti di Bosco",
        description: "Vanilla panna cotta with mixed berry compote and mint",
        price: "$10",
        dietary: ["gluten-free"]
      },
      {
        name: "Cannoli Siciliani",
        description: "Traditional Sicilian pastry shells filled with sweet ricotta and chocolate chips",
        price: "$14"
      },
      {
        name: "Gelato Artigianale",
        description: "House-made gelato: vanilla, pistachio, or chocolate (3 scoops)",
        price: "$8",
        dietary: ["vegetarian", "gluten-free"]
      },
      {
        name: "Affogato al Caffè",
        description: "Vanilla gelato 'drowned' in hot espresso with amaretto biscotti",
        price: "$10",
        dietary: ["vegetarian"]
      }
    ],
    beverages: [
      {
        name: "Chianti Classico DOCG",
        description: "Castello di Verrazzano, Tuscany - Full-bodied red with notes of cherry and spice",
        price: "$12/$48"
      },
      {
        name: "Pinot Grigio",
        description: "Villa Antinori, Umbria - Crisp white wine with citrus and mineral notes",
        price: "$10/$40"
      },
      {
        name: "Prosecco di Valdobbiadene",
        description: "Nino Franco, Veneto - Premium sparkling wine with delicate bubbles",
        price: "$14/$56"
      },
      {
        name: "Aperol Spritz",
        description: "Classic Italian aperitif with Aperol, Prosecco, and soda water",
        price: "$12"
      },
      {
        name: "Negroni",
        description: "Gin, Campari, and sweet vermouth with orange peel",
        price: "$14"
      },
      {
        name: "Espresso",
        description: "Traditional Italian espresso, dark roast",
        price: "$4"
      },
      {
        name: "Cappuccino",
        description: "Espresso with steamed milk foam and a touch of cinnamon",
        price: "$6"
      }
    ]
  };

  const getDietaryIcon = (dietary: string) => {
    switch (dietary) {
      case 'vegetarian':
        return <Leaf className="text-green-600" size={16} />;
      case 'gluten-free':
        return <div className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">GF</div>;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-burgundy text-white">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-serif font-bold mb-6">La Nostra Menu</h1>
            <p className="text-xl text-cream-200">
              Authentic Italian flavors crafted with passion and the finest imported ingredients
            </p>
          </div>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="bg-white py-8 sticky top-20 z-40 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-burgundy text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-serif font-bold text-burgundy mb-2">
                {categories.find(cat => cat.id === activeCategory)?.name}
              </h2>
              <div className="w-20 h-1 bg-gold"></div>
            </div>

            <div className="space-y-6">
              {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div className="flex-1 mb-4 md:mb-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-serif font-bold text-burgundy">{item.name}</h3>
                        {item.signature && (
                          <Star className="text-gold fill-current" size={20} />
                        )}
                      </div>
                      <p className="text-gray-600 mb-3 leading-relaxed">{item.description}</p>
                      {item.dietary && (
                        <div className="flex items-center space-x-2">
                          {item.dietary.map((diet, idx) => (
                            <div key={idx} className="flex items-center">
                              {getDietaryIcon(diet)}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="md:ml-6">
                      <span className="text-2xl font-bold text-burgundy">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wine Pairing Notice */}
      <section className="py-12 bg-burgundy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <Wine className="mx-auto mb-4 text-gold" size={48} />
            <h3 className="text-2xl font-serif font-bold mb-4">Wine Pairings Available</h3>
            <p className="text-cream-200 mb-6">
              Our sommelier can recommend the perfect wine pairing for any dish. 
              Ask your server about our extensive selection of Italian wines.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <Leaf className="text-green-400" size={16} />
                <span>Vegetarian Options</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-xs bg-blue-400 text-white px-2 py-1 rounded">GF</div>
                <span>Gluten-Free Options</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="text-gold fill-current" size={16} />
                <span>Chef's Signature</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;