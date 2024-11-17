import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-900">SABIR</span>
              <span className="text-2xl font-light text-blue-700">HOLDİNG</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors">Ana Sayfa</a>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-900 transition-colors">
                  Hizmetlerimiz
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="py-1">
                    <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Yatırımlar</a>
                    <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Danışmanlık</a>
                    <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Proje Yönetimi</a>
                  </div>
                </div>
              </div>
              <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors">Hakkımızda</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-900 transition-colors">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors">İletişim</a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Ana Sayfa</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Hizmetlerimiz</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Hakkımızda</a>
            <a href="#blog" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Blog</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-900">İletişim</a>
          </div>
        </div>
      )}
    </nav>
  );
}