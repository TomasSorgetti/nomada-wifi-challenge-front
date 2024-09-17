import React from "react";

const Avatar = ({ image }: { image: string }) => {
  console.log(image);

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        borderRadius: "50%",
        width: "38.47px",
        height: "38.47px",
      }}
    ></div>
  );
};

export default Avatar;
