import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useContext } from "react";
import { StateContext } from "../context/Context";

const ClassDetailsHeader = ({ data }) => {
  const { userData } = useContext(StateContext);
  return (
    <header className="-mt-20">
      <div
        className="flex flex-col justify-end h-80 object-cover"
        style={{
          backgroundImage: `url(${data.asset.url})`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="font-bold text-3xl ml-6 mb-4  text-secondary ">
          {data.className}
        </h1>
        <div className="flex ml-6 mb-4 items-center">
          <AiFillStar className="text-secondary mr-2" />
          <AiFillStar className="text-secondary mr-2" />
          <AiFillStar className="text-secondary mr-2" />
          <AiFillStar className="text-secondary mr-2" />
          <AiOutlineStar className="text-secondary mr-2" />
          <p className="text-secondary">4/5</p>
          {userData && (
            <button className="text-center uppercase font-bold border-secondary rounded-full border-2 text-secondary py-3 px-7 ml-6">
              Rate
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default ClassDetailsHeader;
