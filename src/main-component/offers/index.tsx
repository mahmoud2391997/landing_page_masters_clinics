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

interface TourGridProps {
  tours: Tour[];
}

const TourGrid: React.FC<TourGridProps> = ({tours}) => {
  
console.log("Tours:", tours);
  return (
    <div className="container">
        <div className="row justify-content-left">
                            <div className="col-12">
<SectionTitle 
  title=" احدث العروض " 
  subtitle="أفضل العروض والخدمات الصحية لدينا" 
/>
                            </div>
                        </div> <div className="flex">
        {tours.map((tour, index) => (
          <TourCard
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
