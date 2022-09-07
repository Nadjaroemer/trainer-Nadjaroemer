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

  const renderSearchResults = () => {
    const searchResults = props.classes?.filter((individualClass) => {
      return individualClass.className
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });
    if (searchResults.length === 0) {
      return (
        <div className="ml-6 mt-12">
          <HeadlineH3 text="No classes found. Please try again." />;
        </div>
      );
    }
    return (
      <>
        <div className="ml-6 mt-12">
          <HeadlineH3 text="Search results" />
        </div>
        <div className="p-6 grid grid-cols-2 grid-rows-auto">
          {searchResults.map((individualClass) => {
            return <Card key={individualClass.id} data={individualClass} />;
          })}
        </div>
      </>
    );
  };

  return (
    <>
      <Navigation />
      <div className="ml-6 mr-6">
        <input
          className="w-full border rounded-3xl border-tertiary-500 p-3"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          placeholder="Search classes"
        ></input>
      </div>
      {searchValue ? (
        renderSearchResults()
      ) : (
        <>
          <div className="p-6 grid grid-cols-2 grid-rows-auto">
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
