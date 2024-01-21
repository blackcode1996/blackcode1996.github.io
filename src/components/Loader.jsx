import React from "react";
import videoLoader from "../Aseests/loader.mp4";

const Loader = () => {
  const loaderContainerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  };

  const videoStyle = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };

  return (
    <div style={loaderContainerStyle}>
      <video autoPlay loop muted style={videoStyle}>
        <source src={videoLoader} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loader;
