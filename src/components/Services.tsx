import { Building2, LineChart, Users, Briefcase, Shield, Globe } from 'lucide-react';

const services = [
  {
    title: 'Gayrimenkul Yatırımları',
    description: 'Modern yaşam alanları ve ticari projeler geliştiriyoruz.',
    icon: Building2
  },
  {
    title: 'Finansal Hizmetler',
    description: 'Yatırım danışmanlığı ve portföy yönetimi hizmetleri sunuyoruz.',
    icon: LineChart
  },
  {
    title: 'Kurumsal Danışmanlık',
    description: 'İşletmelere stratejik büyüme ve yönetim danışmanlığı sağlıyoruz.',
    icon: Users
  },
  {
    title: 'Proje Yönetimi',
    description: 'Büyük ölçekli projeleri başarıyla hayata geçiriyoruz.',
    icon: Briefcase
  },
  {
    title: 'Risk Yönetimi',
    description: 'Kapsamlı risk analizi ve yönetimi hizmetleri sunuyoruz.',
    icon: Shield
  },
  {
    title: 'Uluslararası İşbirlikleri',
    description: 'Global pazarlarda güçlü ortaklıklar kuruyoruz.',
    icon: Globe
  }
];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Hizmetlerimiz</h2>
          <p className="mt-4 text-xl text-gray-600">
            Farklı sektörlerde uzmanlaşmış ekibimizle sizlere kapsamlı çözümler sunuyoruz
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-900 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative bg-white p-6 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}