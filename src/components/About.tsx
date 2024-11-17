export default function About() {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Modern office meeting"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-blue-900 text-white p-8 rounded-lg shadow-xl hidden lg:block">
              <p className="text-4xl font-bold">40+</p>
              <p className="mt-1">Yıllık Tecrübe</p>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Değerlerimiz ve Vizyonumuz
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              1980 yılından bu yana, Sabır Holding olarak Türkiye'nin önde gelen holdinglerinden biri olarak faaliyet gösteriyoruz. Sürdürülebilir büyüme, yenilikçi çözümler ve toplumsal fayda odaklı yaklaşımımızla geleceği şekillendiriyoruz.
            </p>
            
            <div className="mt-10 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Misyonumuz</h3>
                <p className="mt-2 text-gray-600">
                  Yenilikçi ve sürdürülebilir çözümlerle topluma değer katmak, ekonomik büyümeye katkıda bulunmak.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900">Vizyonumuz</h3>
                <p className="mt-2 text-gray-600">
                  Türkiye'nin ve bölgenin lider holding şirketi olarak, global pazarlarda söz sahibi olmak.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900">Değerlerimiz</h3>
                <p className="mt-2 text-gray-600">
                  Dürüstlük, şeffaflık, inovasyon ve sürdürülebilirlik ilkeleriyle hareket ediyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}