import React, { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react'; // Importing icons from lucide-react

// Main App component
function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to scroll to a specific section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after selection
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800 antialiased">
      {/* Header Section */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="container mx-auto flex items-center justify-between p-4 md:px-6">
          {/* Logo/Brand */}
          <div className="flex items-center">
            {/* Using the user's provided image for the logo */}
            <img 
              src="/images/logo.png" 
              alt="Mezcal Monte Claro Logo" 
              className="rounded-full mr-2 h-10 w-10 object-cover" 
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/40x40/EAB308/FFFFFF?text=MC" }} // Fallback with yellowish-gold color (yellow-500)
            />
            <span className="text-2xl font-bold text-green-700">Mezcal Monte Claro</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors">Inicio</button>
            <button onClick={() => scrollToSection('productos')} className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors">Productos</button>
            <button onClick={() => scrollToSection('pedidos')} className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors">Pedidos</button>
            <button onClick={() => scrollToSection('contacto')} className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors">Contacto</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 hover:text-green-600 focus:outline-none">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg pb-4">
            <nav className="flex flex-col items-center space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors w-full py-2 text-center">Inicio</button>
              <button onClick={() => scrollToSection('productos')} className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors w-full py-2 text-center">Productos</button>
              <button onClick={() => scrollToSection('pedidos')} className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors w-full py-2 text-center">Pedidos</button>
              <button onClick={() => scrollToSection('contacto')} className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors w-full py-2 text-center">Contacto</button>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/mezcal_background.png')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-white p-6 rounded-lg max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
              Mezcal Monte Claro: <br /> El espíritu de México en cada gota.
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
              Tu evento especial merece la autenticidad y el sabor inigualable de nuestro mezcal artesanal.
            </p>
            <button
              onClick={() => scrollToSection('pedidos')}
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Solicita tu Cotización
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="nosotros" className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-green-700 mb-6">Nuestra Tradición</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                En Mezcal Monte Claro, cada botella es un tributo a la rica herencia y al arte ancestral de la producción de mezcal en México.
                Utilizamos métodos tradicionales, transmitidos de generación en generación, para asegurar un sabor auténtico y una calidad excepcional.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Desde la selección del agave maduro hasta la cocción en hornos cónicos de piedra, la molienda con tahona, la fermentación natural y la doble destilación en alambiques de cobre, cada paso es una labor de amor que culmina en un mezcal con carácter y alma.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="https://placehold.co/600x400/FACC15/FFFFFF?text=Proceso+Artesanal" alt="Proceso Artesanal del Mezcal" className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="productos" className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl font-bold text-green-700 mb-12">Nuestros Mezcales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Product Card 1 */}
              <div className="bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <img src="https://placehold.co/200x300/EAB308/FFFFFF?text=Mezcal+Espadín" alt="Mezcal Espadín Monte Claro" className="rounded-lg mb-6 max-h-72 object-contain" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Mezcal Espadín Joven</h3>
                <p className="text-gray-700 text-center mb-4">
                  El clásico por excelencia. Elaborado con agave Espadín, ofrece notas suaves y equilibradas, con un final ahumado y ligeramente dulce. Perfecto para disfrutar solo o en coctelería.
                </p>
                <span className="text-green-700 font-bold text-xl">100% Agave Espadín</span>
              </div>

              {/* Product Card 2 (Example for future expansion) */}
              <div className="bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <img src="https://placehold.co/200x300/EAB308/FFFFFF?text=Mezcal+Reposado" alt="Mezcal Reposado Monte Claro" className="rounded-lg mb-6 max-h-72 object-contain" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Mezcal Reposado</h3>
                <p className="text-gray-700 text-center mb-4">
                  Envejecido en barricas de roble, este mezcal adquiere una complejidad y suavidad inigualables. Notas de vainilla, caramelo y un ahumado persistente. Ideal para paladares exigentes.
                </p>
                <span className="text-green-700 font-bold text-xl">Edición Limitada</span>
              </div>

              {/* Product Card 3 (Example for future expansion) */}
              <div className="bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <img src="https://placehold.co/200x300/EAB308/FFFFFF?text=Mezcal+Tobalá" alt="Mezcal Tobalá Monte Claro" className="rounded-lg mb-6 max-h-72 object-contain" />
                <h3 className="text-2xl font-semibold mb-3">Mezcal Tobalá</h3>
                <p className="text-gray-700 text-center mb-4">
                  Un mezcal silvestre y exótico, con un perfil de sabor único. Notas florales, frutales y un toque mineral que lo hacen verdaderamente especial. Una joya para conocedores.
                </p>
                <span className="text-green-700 font-bold text-xl">Agave Silvestre</span>
              </div>
            </div>
          </div>
        </section>

        {/* Order Section */}
        <section id="pedidos" className="py-16 bg-gradient-to-br from-green-700 to-green-900 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl font-bold mb-12">Mezcal Monte Claro para tu Evento</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Ofrecemos soluciones personalizadas para que Mezcal Monte Claro sea el protagonista de tus celebraciones y negocios.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Order Type: Weddings */}
              <div className="bg-white text-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <img src="/images/bodas.png" alt="Bodas" className="rounded-full mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Bodas</h3>
                <p className="mb-6 text-center">
                  Celebra tu amor con el toque distintivo de Mezcal Monte Claro. Opciones de botellas personalizadas y mesas de degustación para un día inolvidable.
                </p>
                <button onClick={() => scrollToSection('contacto')} className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
                  Solicitar Cotización Boda
                </button>
              </div>

              {/* Order Type: Restaurants */}
              <div className="bg-white text-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <img src="/images/restaurantes.png" alt="Restaurantes" className="rounded-full mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Restaurantes</h3>
                <p className="mb-6 text-center">
                  Eleva la experiencia culinaria de tus clientes con nuestro mezcal artesanal. Precios especiales para distribuidores y restaurantes.
                </p>
                <button onClick={() => scrollToSection('contacto')} className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
                  Información para Restaurantes
                </button>
              </div>

              {/* Order Type: Special Events */}
              <div className="bg-white text-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <img src="/images/eventos.png" alt="Eventos Especiales" className="rounded-full mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Eventos Especiales</h3>
                <p className="mb-6 text-center">
                  Desde reuniones íntimas hasta grandes celebraciones corporativas, Mezcal Monte Claro es la elección perfecta para un toque de distinción.
                </p>
                <button onClick={() => scrollToSection('contacto')} className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
                  Cotizar Evento
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
            <h2 className="text-4xl font-bold text-green-700 mb-8">Contáctanos</h2>
            <p className="text-lg text-gray-700 mb-10">
              Estamos listos para ayudarte a hacer de tu evento o negocio una experiencia inolvidable con Mezcal Monte Claro.
              Envíanos un mensaje o contáctanos directamente.
            </p>

            <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
              <div>
                <label htmlFor="name" className="block text-left text-gray-700 text-lg font-medium mb-2">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-left text-gray-700 text-lg font-medium mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
                  placeholder="tu.correo@ejemplo.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-left text-gray-700 text-lg font-medium mb-2">Teléfono (Opcional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
                  placeholder="Ej. +52 55 1234 5678"
                />
              </div>
              <div>
                <label htmlFor="event_type" className="block text-left text-gray-700 text-lg font-medium mb-2">Tipo de Solicitud</label>
                <select
                  id="event_type"
                  name="event_type"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all appearance-none bg-white"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="boda">Boda</option>
                  <option value="restaurante">Restaurante</option>
                  <option value="evento_especial">Evento Especial</option>
                  <option value="consulta_general">Consulta General</option>
                </select>
                <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
              </div>
              <div>
                <label htmlFor="message" className="block text-left text-gray-700 text-lg font-medium mb-2">Tu Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
                  placeholder="Cuéntanos sobre tu evento o tus necesidades..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Enviar Solicitud
              </button>
            </form>

            <div className="mt-12 text-gray-700 space-y-4">
              <p className="flex items-center justify-center text-lg"><Phone size={20} className="mr-2 text-green-600" /> +52 55 1234 5678</p>
              <p className="flex items-center justify-center text-lg"><Mail size={20} className="mr-2 text-green-600" /> info@montecaromezcal.shop</p>
              <p className="flex items-center justify-center text-lg"><MapPin size={20} className="mr-2 text-green-600" /> Ciudad de México, México</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} Mezcal Monte Claro. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-6">
            {/* Placeholder for social media links */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
