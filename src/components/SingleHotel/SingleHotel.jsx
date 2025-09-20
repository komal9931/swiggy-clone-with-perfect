import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleHotel = () => {
  const { id } = useParams();
  const [title, setTitle] = useState(""); // store single text
  const [tabTitle, setTabTitle] = useState("");
  const [dineoutTitle, setDineoutTitle] = useState("");
  const [card, setCard] = useState({});
  const [deals, setDeals] = useState([]);
  const [groupedCard, setGroupedCard] = useState([]);

  const singleapi = async () => {
    try {
      const baseUrl = import.meta.env.VITE_SINGLE_SWIGGY_URL;
      const url = baseUrl.replace(/restaurantId=\d+/, `restaurantId=${id}`);
      const res = await fetch(url);
      const jsondata = await res.json();

      // Extract grouped cards
      const groupedCard =
        jsondata?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      setGroupedCard(groupedCard || []);
      // Extract deals
      const dealsData =
        jsondata?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle
          ?.offers;
      setDeals(dealsData || []);

      // Extract main card info
      const mainCard = jsondata?.data?.cards?.[2]?.card?.card?.info;
      setCard(mainCard || {});

      // Extract first card text
      const firstText =
        jsondata?.data?.cards?.[0]?.card?.card?.text || "No data";
      setTitle(firstText);

      // Find card with tabs
      const cardWithTabs = jsondata?.data?.cards?.find(
        (card) => card?.card?.card?.tabs
      );

      const firstTabTitle =
        cardWithTabs?.card?.card?.tabs?.[0]?.title || "No data";
      const secondTabTitle =
        cardWithTabs?.card?.card?.tabs?.[1]?.title || "No data";

      setTabTitle(firstTabTitle);
      setDineoutTitle(secondTabTitle);
    } catch (error) {
      console.error("Error fetching single hotel data:", error);
    }
  };

  useEffect(() => {
    singleapi();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <p>Home/Ahmedabad/{title}</p>
      <h1>{title}</h1>
      <p>
        {tabTitle} {dineoutTitle}
      </p>
      <hr />

      <div
        style={{
          border: "1px solid black",
          marginTop: "20px",
          borderRadius: "10px",
          padding: "10px",
          width: "500px",
          height: "100px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>
          ⭐ {card?.avgRating} ({card?.totalRatingsString})
        </p>
        <p>{card?.name}</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Deals for you</h2>
        {deals.length > 0 ? (
          deals.map((deal, i) => <p key={i}>{deal.info.couponCode}</p>)
        ) : (
          <p>No deals available</p>
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Menu</h2>
        <input
          type="text"
          placeholder="Search menu..."
          style={{ padding: "5px", width: "200px" }}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Grouped Cards</h2>
        {console.log(groupedCard)}
        {groupedCard && groupedCard.length > 0 ? (
          groupedCard.map((cardItem, i) => (
            <p key={i}>{cardItem?.card?.card?.info?.name || "No Name"}</p>
          ))
        ) : (
          <p>No grouped cards available</p>
        )}
      </div>
    </div>
  );
};

export default SingleHotel;
