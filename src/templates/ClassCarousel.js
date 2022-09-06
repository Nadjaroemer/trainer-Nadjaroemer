import { ScrollMenu } from "react-horizontal-scrolling-menu";
import FeaturedCard from "../components/FeaturedCard";

const ClassCarousel = ({ data }) => {
  return (
    <div className="ml-6 overflow-hidden">
      <ScrollMenu>
        {data.map((item, index) => (
          <FeaturedCard data={item} key={index} />
        ))}
      </ScrollMenu>
    </div>
  );
};

export default ClassCarousel;
