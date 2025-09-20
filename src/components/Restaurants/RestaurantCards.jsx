import React from "react";
import { useNavigate } from "react-router-dom";

const RestaurantCards = ({ item }) => {
  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    sla,
    cuisines,
    areaName,
    aggregatedDiscountInfoV3,
    id,
  } = item.info;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/restaurant/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: "280px",
        height: "350px",
        border: "1px solid #ccc",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        cursor: "pointer", // shows clickable
        // transition: "transform 0.2s, box-shadow 0.2s",
      }}
      // onMouseEnter={(e) => {
      //   e.currentTarget.style.transform = "scale(1.03)";
      //   e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.2)";
      // }}
      // onMouseLeave={(e) => {
      //   e.currentTarget.style.transform = "scale(1)";
      //   e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
      // }}
    >
      <div style={{ position: "relative", width: "100%", height: "200px" }}>
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name || "Restaurant Image"}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            backgroundColor: "rgba(255, 0, 0, 0.85)",
            color: "white",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          {aggregatedDiscountInfoV3?.header && (
            <span>{aggregatedDiscountInfoV3.header} </span>
          )}
          {aggregatedDiscountInfoV3?.subHeader && (
            <span>{aggregatedDiscountInfoV3.subHeader}</span>
          )}
          {!aggregatedDiscountInfoV3?.header &&
            !aggregatedDiscountInfoV3?.subHeader && <span>No Discount</span>}
        </div>
      </div>

      <div
        style={{
          padding: "12px",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h4 style={{ margin: 0, fontSize: "16px" }}>{name}</h4>
        <p
          style={{
            fontSize: "14px",
            color: "#333",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          ⭐ {avgRatingString} · {sla.slaString}
        </p>
        <p style={{ fontSize: "14px", color: "#555", margin: 0 }}>
          {cuisines.join(", ")}
        </p>
        <p style={{ fontSize: "13px", color: "#777", margin: 0 }}>{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCards;
