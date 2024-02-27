import SwiperContent from "../Swiper/SwiperContent";
import DataRenderer from "../DataContainer/DataRenderer";
import ImageAthlete from "./ImageContainer/ImageAthlete";
import "./athletes.css";
import { DataAthletes } from "../mockup-type";

type AthletesProps = {
   data: DataAthletes;
};

const Athletes = ({ data }: AthletesProps) => {
   const renderRowData = () => {
      return data.map((el, index) => {
         let option = index === data.length - 1 ? { underlineWhite: true, contentWhite: true } : {};
         return (
            <div key={el.number} className={`row athlete-text-${index + 1}`}>
               <div className="col-xxl-6 col-md-8 athlete-text-container">
                  <DataRenderer data={el} option={option} />
               </div>
            </div>
         );
      });
   };

   return (
      <div className="athlete-container">
         <ImageAthlete />
         {renderRowData()}
         <div className="row athlete-slideshow">
            <SwiperContent
               data={data.map((el) => (
                  <DataRenderer data={el} />
               ))}
            />
         </div>
      </div>
   );
};

export default Athletes;
