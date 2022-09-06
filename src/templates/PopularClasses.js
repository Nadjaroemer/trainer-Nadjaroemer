import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import HeadlineH3 from "../components/HeadlineH3";
import ClassCard from "../components/ClassCard";
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
      {classes && <ClassCard data={classes[getRandomClass()]} />}
      <div className="ml-4 ml-6">
        <HeadlineH3 text="Classes for you" />
      </div>
      {classes && <ClassCarousel data={classes} />}
    </section>
  );
};

export default PopularClasses;
