import React from 'react';
import { Link } from "react-router-dom";
const Saiful = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-10">
      <figure className="w-1/4 h-1/2 rounded-full">
        <img
          src="https://i.ibb.co/sbZ2b8X/image.png"
          alt="Album"
        />
      </figure>
      <div className="card-body flex-col justify-center items-center">
        <h2 className="card-title">Md Saiful Islam</h2>
        <p>Id : 221-15-5463</p>
        <h2 className="text-2xl">Assignment</h2>
        <Link to="https://drive.google.com/drive/folders/1AjO8adZ2-N1qKlfGI8EhS_EKknz_3N4p?usp=drive_link"><p className="text-cyan-400 underline-offset-1">SRS V1</p></Link>
        <Link to="https://drive.google.com/drive/folders/1zTq_La1r6x7HllFFrPwY7h2rYRhKJ3Bj?usp=drive_link"><p className="text-cyan-400 underline-offset-1">SRS V2</p></Link>
        <Link to="https://drive.google.com/drive/folders/10_OR9_H8UFVcOnBoAD8RCF9Y6qsh3Ppo?usp=drive_link"><p className="text-cyan-400 underline-offset-1">SRS V3</p></Link>
        <Link to="https://drive.google.com/drive/folders/1NsewPJH58ggWnTmNugbycsFpoizb20VY"><p className="text-cyan-400 underline-offset-1">SRS V4</p></Link>
        <Link to="https://drive.google.com/drive/folders/1CnB9PZY1Ej3p0IiWOErVCM4ic59-75-e"><p className="text-cyan-400 underline-offset-1">SRS V5</p></Link>
        <Link to="https://drive.google.com/drive/folders/1J-EhesjYFUiCfCQHlXQjajBdGq7tcT-2"><p className="text-cyan-400 underline-offset-1">Final Presentation</p></Link>
      </div>
    </div>
    );
};

export default Saiful;