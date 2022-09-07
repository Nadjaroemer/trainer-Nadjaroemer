import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const FeaturedCard = ({ data }) => {
  return (
    <Link to={`/classdetails/${data.id}`}>
      <div
        style={{
          backgroundImage: `url(${data.asset.url})`,
          backgroundSize: "cover",
        }}
        className="flex h-96 rounded-3xl overflow-hidden mx-6 mb-4"
      >
        <div className="grid grid-cols-[220px] grid-rows-1 bg-secondary self-end p-4 rounded-tr-[3rem] ">
          <p className="font-bold">{data.className}</p>
          <div className="flex mt-2">
            <AiFillStar className="text-black mr-2" />
            <AiFillStar className="text-black mr-2" />
            <AiFillStar className="text-black mr-2" />
            <AiFillStar className="text-black mr-2" />
            <AiFillStar className="text-black mr-2" />
          </div>
        </div>
      </div>
    </Link>
  );
};
export default FeaturedCard;
