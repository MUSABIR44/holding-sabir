import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">SABIR</span>
              <span className="text-2xl font-light text-blue-400">HOLDİNG</span>
            </div>
            <p className="mt-4 text-gray-400">
              40 yılı aşkın tecrübemizle, sürdürülebilir büyüme ve yenilikçi çözümlerle Türkiye'nin geleceğine yatırım yapıyoruz.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Hızlı Erişim
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#home" className="text-base text-gray-400 hover:text-white">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-white">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="#about" className="text-base text-gray-400 hover:text-white">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#blog" className="text-base text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base text-gray-400 hover:text-white">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              İletişim
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-gray-400">
                Levent, Büyükdere Cad. No:123<br />
                34394 Şişli/İstanbul
              </li>
              <li>
                <a href="tel:+902125550000" className="text-base text-gray-400 hover:text-white">
                  +90 (212) 555 0000
                </a>
              </li>
              <li>
                <a href="mailto:info@sabirholding.com" className="text-base text-gray-400 hover:text-white">
                  info@sabirholding.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2024 Sabır Holding. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}