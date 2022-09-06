import { ScrollMenu } from "react-horizontal-scrolling-menu";
import FeaturedCard from "../components/FeaturedCard";

const ClassCarousel = ({ data }) => {
  return (
    <div className="mr-4 overflow-hidden grid-rows-1">
      <ScrollMenu>
        {data.map((item, index) => (
          <FeaturedCard data={item} key={index} />
        ))}
      </ScrollMenu>
    </div>
  );
};

export default ClassCarousel;
