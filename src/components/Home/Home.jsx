// import React, { useEffect } from "react";

// const Home = () => {
//   const getSwiggy = async () => {
//     const res = await fetch(import.meta.env.VITE_SWIGGY_URL);
//     const jsonData = await res.json();
//     console.log(jsonData);

//     // extract all titles
//     const allTitles =
//       jsonData?.data?.cards
//         ?.map(
//           (item) => item?.card?.card?.header?.title || item?.card?.card?.title
//         )
//         ?.filter(Boolean) || [];

//     console.log("All Titles:", allTitles);

//     const whatsonyourmind = jsonData?.data?.cards.find((item) => {
//       return item?.card?.card?.id?.includes("whats_on_your_mind");
//     })?.card?.card?.gridElements?.infoWithStyle?.info;
//     console.log("whatsonyourmind", whatsonyourmind);

//     const topbrands = jsonData?.data?.cards.find((item) => {
//       return item?.card?.card?.id?.includes("top_brands");
//     })?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//     console.log(topbrands);

//     const restaurantgridlisting = jsonData?.data?.cards.find((item) => {
//       return item?.card?.card?.id?.includes("restaurant_grid");
//     })?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//     console.log(restaurantgridlisting);
//     // console.log(
//     //   jsonData?.data?.cards.find((item) => {
//     //     return item?.card?.card?.id?.includes("restaurant_grid");
//     //   })
//     // );
//   };
//   useEffect(() => {
//     getSwiggy();
//   }, []);
//   return (
//     <>
//           <>
//           </>
//     </>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import Images from "../Image/Images";
import RestaurantCards from "../Restaurants/RestaurantCards";
import Section from "../Section/Section";

const Home = () => {
  const [allTitles, setAllTitles] = useState([]);
  const [whatsonyourmind, setWhatsonyourmind] = useState([]);
  const [topbrands, setTopbrands] = useState([]);
  const [restaurantgridlisting, setRestaurantgridlisting] = useState([]);
  const [bestPlaces, setBestPlaces] = useState([]);
  const [bestCuisines, setBestCuisines] = useState([]);
  const [bestRestaurants, setBestRestaurants] = useState([]);

  const getSwiggy = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_SWIGGY_URL);
      const jsonData = await res.json();
      console.log(jsonData);

      // extract all titles
      const titles =
        jsonData?.data?.cards
          ?.map(
            (item) => item?.card?.card?.header?.title || item?.card?.card?.title
          )
          ?.filter(Boolean) || [];
      setAllTitles(titles);
      // console.log(titles);

      const whatsOnMind =
        jsonData?.data?.cards.find((item) =>
          item?.card?.card?.id?.includes("whats_on_your_mind")
        )?.card?.card?.gridElements?.infoWithStyle?.info || [];
      setWhatsonyourmind(whatsOnMind);
      //   console.log(whatsOnMind);

      const brands =
        jsonData?.data?.cards.find((item) =>
          item?.card?.card?.id?.includes("top_brands")
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setTopbrands(brands);
      //   console.log(brands);
      const restaurants =
        jsonData?.data?.cards.find((item) =>
          item?.card?.card?.id?.includes("restaurant_grid")
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setRestaurantgridlisting(restaurants);
      // console.log(restaurants);

      // const brand =
      //   jsonData?.data?.cards.find((item) =>
      //     item?.card?.card?.id?.includes("restaurant_near_me_links")
      //   )?.card?.card?.brands || [];
      // setShowbutton(brand);
      // console.log(brand);

      // Best Places to Eat Across Cities
      const bestPlacesData =
        jsonData?.data?.cards.find((item) =>
          item?.card?.card?.title?.includes("Best Places to Eat Across Cities")
        )?.card?.card?.brands || [];
      setBestPlaces(bestPlacesData);

      // Best Cuisines Near Me
      const bestCuisinesData =
        jsonData?.data?.cards.find((item) =>
          item?.card?.card?.title?.includes("Best Cuisines Near Me")
        )?.card?.card?.brands || [];
      setBestCuisines(bestCuisinesData);

      // Explore Every Restaurants Near Me
      const bestRestaurantsData =
        jsonData?.data?.cards.find((item) =>
          item?.card?.card?.title?.includes("Explore Every Restaurants Near Me")
        )?.card?.card?.brands || [];
      setBestRestaurants(bestRestaurantsData);
    } catch (error) {
      console.error("Error fetching Swiggy data:", error);
    }
  };

  useEffect(() => {
    getSwiggy();
  }, []);

  return (
    <>
      {/* What's on your mind? */}
      {allTitles.includes("What's on your mind?") && (
        <>
          <div
            style={{
              maxWidth: "1000px",
              margin: "auto",
              padding: "0 10px",
              //   border: "1px solid black",
            }}
          >
            <Title
              title="What's on your mind?"
              style={{ marginBottom: "5px" }}
            />

            <div
              style={{
                display: "flex",
                overflowX: "auto",
                gap: "10px",
                padding: "10px 0",
                scrollbarWidth: "none",
              }}
            >
              {whatsonyourmind.map((item, index) => (
                <div key={index} style={{ flex: "0 0 auto" }}>
                  <Images image={item.imageId} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* {Top restaurant chains in Ahmedabad} */}
      {allTitles.includes("Top restaurant chains in Ahmedabad") && (
        <>
          <div
            style={{
              maxWidth: "1000px",
              margin: "auto",
              padding: "20px 10px",
              //   border: "1px solid black",
            }}
          >
            <Title
              title="Top restaurant chains in Ahmedabad"
              style={{ marginBottom: "5px" }}
            />

            <div
              style={{
                display: "flex",
                overflowX: "auto",
                marginTop: "10px",
                gap: "10px",
                // border: "1px solid black",
                padding: "10px 0",
                scrollbarWidth: "none",
              }}
            >
              {topbrands.map((item, index) => (
                <div key={index} style={{ flex: "0 0 auto" }}>
                  <RestaurantCards item={item} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* {Restaurants with online food delivery in Ahmedabad} */}
      {allTitles.includes(
        "Restaurants with online food delivery in Ahmedabad"
      ) && (
        <>
          <div
            style={{
              maxWidth: "1000px",
              margin: "auto",
              padding: "20px 10px",
              //   border: "1px solid black",
            }}
          >
            <Title
              title="Restaurants with online food delivery in Ahmedabad"
              style={{ marginBottom: "5px" }}
            />

            <div
              style={{
                display: "flex",
                overflowX: "auto",
                marginTop: "10px",
                gap: "10px",
                // border: "1px solid black",
                padding: "10px 0",
                scrollbarWidth: "none",
              }}
            >
              {restaurantgridlisting.map((item, index) => (
                <div key={index} style={{ flex: "0 0 auto" }}>
                  <RestaurantCards item={item} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* {Best Places to Eat Across Cities} */}
      {/* {allTitles.includes("Best Places to Eat Across Cities") && (
        <>
          <div
            style={{
              maxWidth: "1000px",
              margin: "auto",
              padding: "20px 10px",
              //   border: "1px solid black",
            }}
          >
            <Title
              title="Best Places to Eat Across Cities"
              style={{ marginBottom: "5px" }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap", // allows buttons to wrap to next line
                gap: "10px",
                padding: "10px 0",
                // border: "1px solid black",
                maxWidth: "1000px",
                margin: "auto",
              }}
            >
              {showbutton.map((item, index) => (
                <div key={index}>
                  <Button item={item} />
                </div>
              ))}
            </div>
          </div>
        </>
      )} */}

      {/* {Best Cuisines Near Me}
      {allTitles.includes("Best Cuisines Near Me") && (
        <>
          <div
            style={{
              maxWidth: "1000px",
              margin: "auto",
              padding: "20px 10px",
              //   border: "1px solid black",
            }}
          >
            <Title
              title="Best Cuisines Near Me"
              style={{ marginBottom: "5px" }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap", // allows buttons to wrap to next line
                gap: "10px",
                padding: "10px 0",
                // border: "1px solid black",
                maxWidth: "1000px",
                margin: "auto",
              }}
            >
              {showbutton.slice(0, 32).map((item, index) => (
                <div key={index}>
                  <Button item={item} />
                </div>
              ))}
            </div>
          </div>
        </>
      )} */}

      {/* Best Places to Eat Across Cities */}
      {allTitles.includes("Best Places to Eat Across Cities") && (
        <Section title="Best Places to Eat Across Cities" items={bestPlaces} />
      )}

      {/* Best Cuisines Near Me */}
      {allTitles.includes("Best Cuisines Near Me") && (
        <Section title="Best Cuisines Near Me" items={bestCuisines} />
      )}

      {/* Explore Every Restaurants Near Me */}
      {allTitles.includes("Explore Every Restaurants Near Me") && (
        <Section
          title="Explore Every Restaurants Near Me"
          items={bestRestaurants}
        />
      )}
    </>
  );
};

export default Home;
