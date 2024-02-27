import { PlusIcon, Line } from "../../Effects/Effects";
import "./imagePlayer.css";

const ImagePlayer = () => {
   return (
      <div className="row player-header-group">
         <div className="col-md-5 player-header-text">PLAYERS</div>
         <div className="col-md-7 player-img-container">
            <div className="player-img-basketball">
               <img alt="basketball" src="/basketball.png" className="img-basketball"></img>
               <Line className="line-basketball-1" />
               <Line className="line-basketball-2" />
               <PlusIcon className="plus-basketball-1" />
               <PlusIcon className="plus-basketball-2" />
               <PlusIcon className="plus-basketball-3" />
            </div>
         </div>
      </div>
   );
};

export default ImagePlayer;
