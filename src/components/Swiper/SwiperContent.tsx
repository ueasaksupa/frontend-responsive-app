// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swipe.css";

type SwiperShowProps = {
   data: JSX.Element[];
};

const SwiperShow = ({ data }: SwiperShowProps) => {
   const renderSwipePage = () => {
      return data.map((pageJSX, index) => {
         return <SwiperSlide key={index}>{pageJSX}</SwiperSlide>;
      });
   };
   return (
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
         {renderSwipePage()}
      </Swiper>
   );
};

export default SwiperShow;
