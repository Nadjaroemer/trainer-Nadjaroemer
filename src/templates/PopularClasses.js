import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import HeadlineH3 from "../components/HeadlineH3";
import FeaturedCard from "../components/FeaturedCard";
import ClassCarousel from "./ClassCarousel";

const PopularClasses = () => {
  const [classes, setClasses] = useState();
  const getRandomClass = () => Math.floor(Math.random() * classes.length);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/classes")
      .then((response) => setClasses(response.data));
  }, []);

  return (
    <section className="">
      <div className="">
        {classes && <FeaturedCard data={classes[getRandomClass()]} />}
      </div>
      <div className="">
        <HeadlineH3 text="Classes for you" />
      </div>
      {classes && <ClassCarousel data={classes} />}
    </section>
  );
};

export default PopularClasses;
