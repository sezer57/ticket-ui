import React from "react";

const travelData = [
  {
    id: 1,
    title: "Uçuş Bileti",
    description:
      "Şimdi uçmanın zamanı geldi! En ucuz uçak biletleri burada. Hızlı ve güvenilir bir şekilde en popüler destinasyonlara uçun.",
    imageUrl:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
  },
  {
    id: 2,
    title: "Otel Rezervasyonu",
    description:
      "Seyahat etmek, yeni yerler keşfetmek ve yeni kültürleri deneyimlemek harika bir his. En iyi otellerde konaklama rezervasyonunuzu yapın ve tatilinizin tadını çıkarın.",
    imageUrl:
      "https://images.unsplash.com/photo-1606836131166-5cb137786a8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    title: "Araç Kiralama",
    description:
      "Yeni yerler keşfetmek ve her anının tadını çıkarmak için araç kiralama hizmetlerimizi deneyin. Hem şehir içinde hem de şehirlerarası seyahatlerde size en uygun araçlarla hizmetinizdeyiz.",
    imageUrl:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
  },
];

function TravelData() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">
        Seyahat İhtiyaçlarınızı Karşılayın
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {travelData.map((item) => (
          <div key={item.id} className="shadow-lg rounded-lg">
            <img
              src={item.imageUrl}
              alt=""
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelData;