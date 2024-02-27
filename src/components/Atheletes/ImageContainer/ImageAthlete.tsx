import { Line, PlusIcon } from "../../Effects/Effects";
import "./imageAthlete.css";

const ImgAthlete = () => {
   return (
      <div className="row athlete-header-group">
         <div className="col-xxl-6 col-md-4 col-sm-12 athlete-img-container">
            <div className="athlete-img-football">
               <img alt="football" src="/footballer.png" className="img-football"></img>
               <Line className="line-football-1" />
               <PlusIcon className="plus-football-1" />
               <PlusIcon className="plus-football-2" />
            </div>
         </div>
         <div className="col-xxl-6 col-md-8 col-sm-12 athlete-header-text">ATHLETES</div>
      </div>
   );
};

export default ImgAthlete;
