import React from 'react';
import { Link } from "react-router-dom";
const Tomal = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-10">
      <figure className="w-1/4 h-1/2 rounded-full">
        <img
          src="https://i.ibb.co/CVs3tGn/Formal-Photo.png"
          alt="Album"
        />
      </figure>
      <div className="card-body flex-col justify-center items-center">
        <h2 className="card-title">Md Tomal Ahmed Sajib</h2>
        <p>Id : 221-15-5406</p>
        <h2 className="text-2xl">Assignment</h2>
        <Link to="https://drive.google.com/drive/folders/1R2EplTCXuFfayZ3kXu5ThHBhxGy6zVfo?usp=sharing"><p className="text-cyan-400 underline-offset-1">SRS V1</p></Link>
        <Link to="https://drive.google.com/drive/folders/1z5BosUj9eL4r1zz6gG-WVaCOQN51mLGE?usp=sharing"><p className="text-cyan-400 underline-offset-1">SRS V2</p></Link>
        <Link to="https://drive.google.com/drive/folders/14j6ueHtQrES2BZ7n-9qz95wr6RjCxaj7?usp=sharing"><p className="text-cyan-400 underline-offset-1">SRS V3</p></Link>
        <Link to="https://drive.google.com/drive/folders/1YHj-zvSUD6zuZwsiENTzbZLOPGV6U9z5?usp=sharing"><p className="text-cyan-400 underline-offset-1">SRS V4</p></Link>
        <Link to="https://drive.google.com/drive/folders/1jifew48R0t5jp5XR_iRUarqu4OmewSsE?usp=sharing"><p className="text-cyan-400 underline-offset-1">SRS V5</p></Link>
        <Link to="https://drive.google.com/drive/folders/1TJ0QiZhy_TOM8jT7mR12szC2SEGfW7St?usp=sharing"><p className="text-cyan-400 underline-offset-1">Final Presentation</p></Link>
      </div>
    </div>
    );
};

export default Tomal;