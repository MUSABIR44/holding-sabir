import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="relative bg-white py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900">İletişime Geçin</h2>
            <p className="mt-4 text-lg text-gray-600">
              Sorularınız için bize ulaşın, en kısa sürede size dönüş yapalım.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-900" />
                <span className="ml-3 text-gray-600">
                  Levent, Büyükdere Cad. No:123<br />
                  34394 Şişli/İstanbul
                </span>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-900" />
                <span className="ml-3 text-gray-600">
                  +90 (212) 555 0000
                </span>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-900" />
                <span className="ml-3 text-gray-600">
                  info@sabirholding.com
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-posta
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}