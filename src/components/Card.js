import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link
      to={`/classdetails/${data.id}`}
      className=" flex  mr-3 rounded-t-2xl rounded-bl-2xl overflow-hidden h-48 w-40"
      style={{
        backgroundImage: `url(${data.asset.url})`,
        backgroundSize: "cover",
      }}
    >
      <div className="grid grid-cols-1 grid-rows-[23px] self-end p-3 rounded-tr-[3rem] w-full bg-secondary ">
        <p className="font-bold text-xs">{data.className}</p>
        <div className="flex mt-2">
          <AiFillStar className="text-black mr-1 text-sm" />
          <AiFillStar className="text-black mr-1 text-sm" />
          <AiFillStar className="text-black mr-1 text-sm" />
          <AiFillStar className="text-black mr-1 text-sm" />
          <AiFillStar className="text-black text-sm" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
