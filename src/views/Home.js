import Navigation from "../templates/Navigation";
import PopularClasses from "../templates/PopularClasses";

const Home = (props) => {
  return (
    <>
      <Navigation />
      <PopularClasses classes={props.classes} />
    </>
  );
};
export default Home;
