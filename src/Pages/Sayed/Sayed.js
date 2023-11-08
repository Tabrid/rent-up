import React from 'react';
import { Link } from "react-router-dom";
const Sayed = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-10">
      <figure className="w-1/4 h-1/2 rounded-full">
        <img
          src="https://i.ibb.co/WxQQbzt/my-passport-photo-removebg-preview.png"
          alt="Album"
        />
      </figure>
      <div className="card-body flex-col justify-center items-center">
        <h2 className="card-title">My Name Is Md. Abu Sayed</h2>
        <p>Id : 221-15-5908</p>
        <h2 className="text-2xl">Assignment</h2>
        <Link to="https://drive.google.com/drive/folders/1_oRwWjO2DlDBajz41SKWK_NeUPUtRIuP?usp=sharing"><p className="text-cyan-400 underline-offset-1">SRS V1</p></Link>
        <Link to="https://drive.google.com/drive/folders/100PLhXRXAcl5TCQ2yBbOt57apOPIhGFq?usp=sharing"><p className="text-cyan-400 underline-offset-1">SRS V2</p></Link>
        <Link to="https://drive.google.com/drive/folders/1tEXVcNQdOQO9ZjA3ihAGhiYve3mpUmAs?usp=sharing"><p className="text-cyan-400 underline-offset-1">SRS V3</p></Link>
      </div>
    </div>
    );
};

export default Sayed;