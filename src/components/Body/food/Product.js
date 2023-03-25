import React from "react";
import "./Product.scss";
import Logosearch from "../../header/logo/Logo_search";
import Homefooter from "../../Footer/Home_footer";
import Componentlistproduct from "../carousel/component_list_product/Component_list_product";
import { PRODUCT } from "../../../data/infor_product";
// import ShopProduct from "../../../data/ShopProduct";
function Product() {
  // const [state, setState] = useState({
  //   listImg: [
  //     "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.15752-9/328686359_3178136932479205_7649865675267994708_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=m9oY7CCXCLIAX8h2uMV&_nc_ht=scontent.fsgn5-9.fna&oh=03_AdSMH93QvnJRlv2VZ_xUhaShlldH_hrpkJNttw5od96Kdg&oe=64297F38",
  //   ],
  // });

  // const handleOnclick = () => {
  //   alert("chuyển trang qua chi tiết sản phẩm");
  // };
  return (
    <>
      <Logosearch />
      <div className="Product">
        <div className="left_product">
          <div className="determine">
            <span>Danh mục sản phẩm</span>
            <ul>
              {PRODUCT.map((products) => {
                return (
                  <li key={products.id}>
                    <span className="child_one">{products.name}</span>
                  </li>
                );
              })}
            </ul>
            <span>Lọc theo giá</span>
          </div>
        </div>
        <div className="right_product">
          <Componentlistproduct />
        </div>
      </div>

      <Homefooter></Homefooter>
    </>
  );
}

export default Product;
