import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative bg-gradient-to-r from-blue-900 to-blue-700 min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          alt="Modern building"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Geleceği Şekillendiren</span>
            <span className="block text-blue-200">Yenilikçi Çözümler</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            40 yılı aşkın tecrübemizle, sürdürülebilir büyüme ve yenilikçi çözümlerle Türkiye'nin geleceğine yatırım yapıyoruz.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a
              href="#services"
              className="group inline-flex items-center rounded-full bg-white px-6 py-3 text-base font-medium text-blue-900 shadow-lg hover:bg-blue-50 transition-all"
            >
              Hizmetlerimizi Keşfedin
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border-2 border-white px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              Bize Ulaşın
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}