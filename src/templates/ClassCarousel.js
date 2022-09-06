import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Card from "../components/Card";

const ClassCarousel = ({ data }) => {
  return (
    <div className="mr-4 ml-6 overflow-hidden">
      <ScrollMenu>
        {data.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </ScrollMenu>
    </div>
  );
};

export default ClassCarousel;
