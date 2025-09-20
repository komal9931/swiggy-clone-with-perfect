import React from "react";

const Images = ({ image }) => {
  return (
    <div>
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${image}`}
        alt="swiggy-img"
        style={{
          width: "100px",
          height: "100px",
          // borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Images;
