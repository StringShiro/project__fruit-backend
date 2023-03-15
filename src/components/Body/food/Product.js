import React, { useState } from "react";
import "./Product.scss";
import Logosearch from "../../header/logo/Logo_search";
import Homefooter from "../../Footer/Home_footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import login from "../../../routers/Login";
import { NavLink } from "react-router-dom";
import Stores from "../../../data/stores.json";
function Product() {
  const [state, setState] = useState({
    listImg: [
      "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.15752-9/328686359_3178136932479205_7649865675267994708_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=m9oY7CCXCLIAX8h2uMV&_nc_ht=scontent.fsgn5-9.fna&oh=03_AdSMH93QvnJRlv2VZ_xUhaShlldH_hrpkJNttw5od96Kdg&oe=64297F38",
    ],
  });

  const handleOnclick = () => {
    alert("chuyển trang qua chi tiết sản phẩm");
  };
  return (
    <>
      <Logosearch />

      <div className="Product">
        <div className="left_product"></div>
        <div className="right_product">
          {Stores &&
            Stores.map((store) => {
              return (
                <>
                  <Card style={{ width: "18rem" }}>
                    <NavLink to="/Product_detail">
                      <Card.Img
                        variant="top"
                        src={store.imgUrl}
                        onClick={handleOnclick}
                      />
                    </NavLink>
                    <Card.Body className="m-auto d-inline-block">
                      <Card.Title>{store.name}</Card.Title>
                      <Card.Text>{store.price}</Card.Text>
                      <Button variant="danger">Thêm vào giỏ hàng</Button>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
        </div>
      </div>

      <Homefooter></Homefooter>
    </>
  );
}

export default Product;
