import HeadlineH3 from "../components/HeadlineH3";
import FeaturedCard from "../components/FeaturedCard";
import ClassCarousel from "./ClassCarousel";

const PopularClasses = (props) => {
  const getRandomClass = () => Math.floor(Math.random() * props.classes.length);

  return (
    <section className="">
      <div className="">
        {props.classes && (
          <FeaturedCard data={props.classes[getRandomClass()]} />
        )}
      </div>
      <div className="">
        <HeadlineH3 text="Classes for you" />
      </div>
      {props.classes && <ClassCarousel data={props.classes} />}
    </section>
  );
};

export default PopularClasses;
