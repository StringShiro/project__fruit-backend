import React from "react";
import Bannerhome from "./Banner/Banner_home";
import HomeCarousel from "./carousel/Home_Carousel";
import Advertisement from "../Footer/advertisement/Advertisement";
class Homebody extends React.Component {
  render() {
    return (
      <>
        <Bannerhome />
        <Advertisement />
        <HomeCarousel />
      </>
    );
  }
}
export default Homebody;
