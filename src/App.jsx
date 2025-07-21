import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, ArrowLeft, ArrowRight } from 'lucide-react'; // Importing icons from lucide-react

// Main App component
function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const [formState, handleFormSubmit] = useForm("xldlgoky");

  // Function to scroll to a specific section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after selection
  };

  const productionImages = [
    '/images/production1.jpeg',
    '/images/production2.jpeg',
    '/images/production3.jpeg',
    '/images/production4.jpeg',
    '/images/production5.jpeg',
  ];

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % productionImages.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + productionImages.length) % productionImages.length);
  };


  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800 antialiased">
      {/* Header Section */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="container mx-auto flex items-center justify-between py-6 px-4 md:px-6">
          {/* Logo/Brand */}
          <div className="flex items-center">
            {/* Using the user's provided image for the logo */}
            <img
              src="/images/logo.png"
              alt="Mezcal Monte Claro Logo"
              className="rounded-full mr-2 h-12 w-12 object-cover"
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

        {/* Production Section */}
        <section id="production" className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-4xl font-bold text-green-700 mb-12 text-center">Nuestro Proceso de Producción</h2>
                <div className="relative flex justify-center items-center">
                    <button onClick={prevImage} className="absolute left-0 z-10 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-colors">
                        <ArrowLeft size={24} className="text-green-700" />
                    </button>
                    <img src={productionImages[currentImage]} alt={`Production step ${currentImage + 1}`} className="rounded-xl shadow-lg max-w-full h-auto md:max-w-3xl" />
                    <button onClick={nextImage} className="absolute right-0 z-10 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-colors">
                        <ArrowRight size={24} className="text-green-700" />
                    </button>
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
                <img src="/images/papalometl.jpg" alt="Mezcal de Palomet" className="rounded-lg mb-6 max-h-72 object-contain" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Mezcal de Maguey Papalometl</h3>
                <p className="text-gray-700 text-center mb-4">
                  Un mezcal de sabor único y complejo, con notas herbales y un final persistente que deleita el paladar.
                </p>
                <span className="text-green-700 font-bold text-xl">100% Agave Palomet</span>
              </div>

              {/* Product Card 2 */}
              <div className="bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <img src="/images/cenizo.jpg" alt="Mezcal de Cenizo" className="rounded-lg mb-6 max-h-72 object-contain" />
                <h3 className="text-2xl font-semibold mb-3">Mezcal de Maguey Cenizo</h3>
                <p className="text-gray-700 text-center mb-4">
                    De cuerpo robusto y sabor intenso, con notas terrosas y un carácter distintivo que lo hace el preferido de los conocedores.
                </p>
                <span className="text-green-700 font-bold text-xl">100% Agave Cenizo</span>
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

        {/* Contact Section - UPDATED */}
        <section id="contacto" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
            <h2 className="text-4xl font-bold text-green-700 mb-8">Contáctanos</h2>
            <p className="text-lg text-gray-700 mb-10">
              Estamos listos para ayudarte a hacer de tu evento o negocio una experiencia inolvidable con Mezcal Monte Claro.
              Envíanos un mensaje o contáctanos directamente.
            </p>

            {/* This logic will show a success message after the form is submitted */}
            {formState.succeeded ? (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-lg shadow-lg text-left">
                <h3 className="text-2xl font-bold mb-2">¡Gracias por tu mensaje!</h3>
                <p className="text-lg">Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              // Your form now has an onSubmit handler and names for each field
              <form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
                <div>
                  <label htmlFor="name" className="block text-left text-gray-700 text-lg font-medium mb-2">Nombre Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name" // Required for Formspree
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
                    name="email" // Required for Formspree
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
                    name="phone" // Required for Formspree
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
                    placeholder="Ej. +52 221 428 9468"
                  />
                </div>
                <div>
                  <label htmlFor="event_type" className="block text-left text-gray-700 text-lg font-medium mb-2">Tipo de Solicitud</label>
                  <select
                    id="event_type"
                    name="event_type" // Required for Formspree
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
                    name="message" // Required for Formspree
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
                    placeholder="Cuéntanos sobre tu evento o tus necesidades..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formState.submitting} // Disables the button on submission
                  className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:bg-gray-400"
                >
                  {formState.submitting ? 'Enviando...' : 'Enviar Solicitud'}
                </button>
              </form>
            )}

            <div className="mt-12 text-gray-700 space-y-4">
              <p className="flex items-center justify-center text-lg"><Phone size={20} className="mr-2 text-green-600" /> +52 221 428 9468</p>
              <p className="flex items-center justify-center text-lg"><Mail size={20} className="mr-2 text-green-600" /> monteclaro@monteclaro.shop</p>
              <p className="flex items-center justify-center text-lg"><MapPin size={20} className="mr-2 text-green-600" /> Puebla, México</p>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-900 text-gray-300 py-8">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <p className="mb-4">&copy; {new Date().getFullYear()} Mezcal Monte Claro. Todos los derechos reservados.</p>
            <div className="flex justify-center space-x-6">
              {/* Placeholder for social media links */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter/X</a>
              <a href="https://wa.me/522214289468" className="text-gray-400 hover:text-white transition-colors">WhatsApp</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;