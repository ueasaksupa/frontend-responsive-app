import SwiperContent from "../Swiper/SwiperContent";
import DataRenderer from "../DataContainer/DataRenderer";
import ImagePlayer from "./ImageContainer/ImagePlayer";
import "./players.css";
import { DataPlayers } from "../mockup-type";

type PlayersProps = {
   data: DataPlayers;
};

const Players = ({ data }: PlayersProps) => {
   const renderRowData = () => {
      return data.map((el, index) => {
         const option = index === data.length - 1 ? { underlineWhite: true, contentWhite: true, textPurple: true } : {};
         return (
            <div key={el.number} className={`row player-text-${index + 1}`}>
               <div className="col-md-8 player-text-container">
                  <DataRenderer data={el} option={option} />
               </div>
            </div>
         );
      });
   };

   return (
      <div className="player-container">
         <ImagePlayer />
         {renderRowData()}
         <div className="row player-slideshow">
            <SwiperContent
               data={data.map((el) => (
                  <DataRenderer data={el} />
               ))}
            />
         </div>
      </div>
   );
};

export default Players;
