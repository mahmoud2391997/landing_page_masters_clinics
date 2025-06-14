import React from "react";
import TourCard from "./offerCard.tsx";
import "./TourCard.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle.js";

interface Tour {
  image: string;
  name: string;
  price: number;
  description: string;
}

const dummyTours: Tour[] = [
  {
    image: "/images/tour1.jpg",
    name: "باقة الفحص الشامل",
    price: 1200,
    description: "تشمل تحاليل الدم، فحص القلب، والأشعة."
  },
  {
    image: "/images/tour2.jpg",
    name: "خدمة الأسنان التجميلية",
    price: 950,
    description: "تنظيف، تبييض، وتجميل الأسنان بأحدث التقنيات."
  },
  {
    image: "/images/tour3.jpg",
    name: "جلسات العلاج الطبيعي",
    price: 700,
    description: "جلسات استشفاء وعلاج إصابات العضلات والمفاصل."
  }
];

const TourGrid: React.FC = () => {
  return (
    <div className="container">
      <div className="row justify-content-left">
        <div className="col-12">
          <SectionTitle
            title=" احدث العروض "
            subtitle="أفضل العروض والخدمات الصحية لدينا"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {dummyTours.map((tour, index) => (
          <TourCard
            key={index}
            image={tour.image}
            name={tour.name}
            price={tour.price}
            description={tour.description}
          />
        ))}
      </div>
    </div>
  );
};

export default TourGrid;
