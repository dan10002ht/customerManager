import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="NotFound-Page">
      <div className="NotFound-Page__ColorLayer">
        <div className="NotFound-Page__Name">Anh Village Silk</div>
        <div className="NotFound-Page__Name">Customer Management</div>
        <div className="NotFound-Page__ButtonWrapper">
          <Link to="/customer/create">
            <button className="NotFound-Page__Button">Thêm khách hàng</button>
          </Link>
          <Link to="/customer/list">
            <button className="NotFound-Page__Button">
              Danh sách khách hàng
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
