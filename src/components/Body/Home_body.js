import React from "react";
import Bannerhome from "./Banner/Banner_home";
import HomeCarousel from "./carousel/Home_Carousel";
class Homebody extends React.Component {
  render() {
    return (
      <>
        <Bannerhome />
        <HomeCarousel />
      </>
    );
  }
}
export default Homebody;
