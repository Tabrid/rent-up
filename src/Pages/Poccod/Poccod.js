import React from 'react';
import { Link } from "react-router-dom";
const Poccod = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-10">
        <figure className="w-1/4 h-1/2 rounded-full">
          <img
            src="https://i.ibb.co/vdvmwDW/IMG-6813.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body flex-col justify-center items-center">
          <h2 className="card-title">My Name Is MD Abrar Awal Procchod</h2>
          <p>Id : 221-15-5912</p>
          <h2 className="text-2xl">Assignment</h2>
          <Link to="https://drive.google.com/drive/folders/1DDgC4Tkbep_fm_m1EgxikCUHVRVAW_eT?usp=drive_link"><p className="text-cyan-400 underline-offset-1">SRS V1</p></Link>
          <Link to="https://drive.google.com/drive/folders/1ATKnc9CFxfDx1no5lXHD8ZYbuFYnsicu?usp=drive_link"><p className="text-cyan-400 underline-offset-1">SRS V2</p></Link>
          <Link to="https://drive.google.com/drive/folders/16iBXggo4Bve1oz-3v0z-iJoGYf9Kl7-Q?usp=drive_link"><p className="text-cyan-400 underline-offset-1">SRS V3</p></Link>
        </div>
      </div>
    );
};

export default Poccod;