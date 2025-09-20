// import React from "react";
// import Title from "../Title/Title";
// import Button from "../Button/Button";

// const Section = ({ title, items }) => {
//   console.log("Section items:", items);

//   return (
//     <div
//       style={{
//         maxWidth: "1000px",
//         margin: "auto",
//         padding: "20px 10px",
//       }}
//     >
//       <Title title={title} style={{ marginBottom: "5px" }} />

//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "10px",
//           padding: "10px 0",
//           maxWidth: "1000px",
//           margin: "auto",
//         }}
//       >
//         {items.map((item, index) => (
//           <div key={index}>
//             <Button item={item} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Section;

import React, { useState } from "react";
import Title from "../Title/Title";
import Button from "../Button/Button";

const Section = ({ title, items }) => {
  // console.log("Section items:", items);
  const [showAll, setShowAll] = useState(false);

  // Only show 10 buttons unless "Show More" is clicked
  const visibleItems = showAll ? items : items.slice(0, 10);

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "auto",
        padding: "20px 10px",
      }}
    >
      <Title title={title} style={{ marginBottom: "5px" }} />

      <div
        style={{
          display: "flex",
          //   justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
          padding: "10px 0",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        {visibleItems.map((item, index) => (
          <div key={index}>
            <Button item={item} />
          </div>
        ))}
      </div>

      {/* Show More / Show Less button */}
      {items.length > 10 && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "15px",
          }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              backgroundColor: "#ff5722", // Swiggy-style orange
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "10px 20px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#e64a19")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#ff5722")
            }
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Section;
