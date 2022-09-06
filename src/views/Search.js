import { useState, useEffect } from "react";
import axios from "axios";

import Navigation from "../templates/Navigation";
import HeadlineH3 from "../components/HeadlineH3";

import ClassCarousel from "../templates/ClassCarousel";
import TrainerCard from "../components/TrainerCard";
import Card from "../components/Card";

const Search = (props) => {
  const [classes, setClasses] = useState();
  const [trainers, setTrainers] = useState();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/classes")
      .then((response) => setClasses(response.data));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/trainers")
      .then((response) => setTrainers(response.data));
  }, []);

  return (
    <>
      <Navigation />
      <div className="p-6">
        <input
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          placeholder="Search for classes"
        ></input>
      </div>
      {searchValue ? (
        <div className="p-6">
          <h4>Search results</h4>
          {props.classes
            ?.filter((individualClass) => {
              return individualClass.className
                .toLowerCase()
                .includes(searchValue.toLowerCase());
            })
            .map((individualClass) => {
              return <Card key={individualClass.id} data={individualClass} />;
            })}
        </div>
      ) : (
        <>
          <div className="p-6">
            <HeadlineH3 text="Popular classes" />
          </div>
          {classes && <ClassCarousel data={classes} />}
          <div className="p-6 flex flex-col gap-4">
            <HeadlineH3 text="Popular trainers" />
            {trainers &&
              trainers.map((item, index) => (
                <TrainerCard data={item} key={index} />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Search;
