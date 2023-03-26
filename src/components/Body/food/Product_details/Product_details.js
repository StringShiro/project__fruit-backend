import React, { Fragment } from "react";
import Logosearch from "../../../header/logo/Logo_search";
import { connect } from "react-redux";
const Product_details = (props) => {
  const dataredux = props;
  return (
    <>
      <Logosearch></Logosearch>
      <div className="Product_details">
        <ul>
          {dataredux.data &&
            dataredux.data.length > 0 &&
            dataredux.data.map((item, index) => {
              return <li key={item.id}>{item.name}</li>;
            })}
        </ul>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return { data: state.users };
};
export default connect(mapStateToProps)(Product_details);
