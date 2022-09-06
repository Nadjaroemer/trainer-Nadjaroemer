import { ScrollMenu } from "react-horizontal-scrolling-menu";
import ClassCard from "../components/ClassCard";

const ClassCarousel = ({ data }) => {
  return (
    <div className="ml-6 overflow-hidden">
      <ScrollMenu>
        {data.map((item, index) => (
          <ClassCard data={item} key={index} />
        ))}
      </ScrollMenu>
    </div>
  );
};

export default ClassCarousel;
