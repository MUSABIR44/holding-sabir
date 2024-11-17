const posts = [
  {
    title: 'Sürdürülebilir Yatırımların Geleceği',
    excerpt: 'Yeşil enerji ve sürdürülebilir projeler, geleceğin yatırım stratejilerini nasıl şekillendiriyor?',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    date: '21 Mart 2024',
    readTime: '5 dk okuma'
  },
  {
    title: 'Dijital Dönüşüm ve İş Dünyası',
    excerpt: 'Teknolojik gelişmeler ışığında şirketlerin dijital dönüşüm yolculuğu ve adaptasyon süreçleri.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    date: '18 Mart 2024',
    readTime: '4 dk okuma'
  },
  {
    title: 'Gayrimenkul Sektöründe Yeni Trendler',
    excerpt: 'Akıllı binalar ve sürdürülebilir mimari yaklaşımların sektöre etkileri.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    date: '15 Mart 2024',
    readTime: '6 dk okuma'
  }
];

export default function Blog() {
  return (
    <div id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Blog ve Haberler
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Sektördeki son gelişmeler ve şirket haberlerimiz
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <time>{post.date}</time>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {post.excerpt}
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-blue-900 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Devamını Oku
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}