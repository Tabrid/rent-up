import React from "react";
import { Link } from "react-router-dom";

const Riyadh = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-10">
      <figure className="w-1/4 h-1/2 rounded-full">
        <img
          src="https://i.ibb.co/hFKnrDC/24-23-08.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body flex-col justify-center items-center">
        <h2 className="card-title">My Name Is Riyad Ali Mollik</h2>
        <p>Id : 221-15-5096</p>
        <h2 className="text-2xl">Assignment</h2>
        <Link to="https://drive.google.com/drive/folders/1caN3ssXsg_PWNKKpMpUH9RhZOr9WjsJU?usp=sharing"><p className="text-cyan-400 underline-offset-1">SRS V1</p></Link>
        <Link to="https://drive.google.com/drive/folders/1IBqzhowPe2KuLUOaFjh-MwfPED0UWgwn?usp=sharing"><p className="text-cyan-400 underline-offset-1">SRS V2</p></Link>
        <Link to="https://drive.google.com/drive/folders/1qqGcWIBu6SeUT92IiJlNOjHculcnYRDf?usp=sharing"><p className="text-cyan-400 underline-offset-1">SRS V3</p></Link>
      </div>
    </div>
  );
};

export default Riyadh;
