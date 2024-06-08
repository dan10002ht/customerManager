import React from "react";
import "./CommonInformationTemplate.scss";
import dayjs from "dayjs";


const CommonInformationTemplate = ({ children, data }) => {
  return (
    <div className="page" data-size="A4">
      <div className="Template">
        <div className="Template-Container">
          <div className="Template-Top">
            <div className="Template-TopLeft">
              {data.gender === "male" ? "NAM" : "NỮ"}
            </div>
            <div className="Template-TopRight">
              <table>
                <tr>
                  <td style={{ width: "50%" }}>Ngày đến: {dayjs(new Date(data.createdAt)).format("DD/MM/YYYY")}</td>
                  <td>ID: {data.userId}</td>
                </tr>
                <tr>
                  <td colSpan={2}>Ngày trả hàng:</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="Template-Customer__Information">
            <div className="">Tên khách hàng: {data.ten_khach_hang}</div>
            <div className="">Số điện thoại: {data.so_dien_thoai}</div>
            <div className="">Email: {data.email}</div>
          </div>
          {children}
          <div className="Template-Note">
            <div style={{ fontWeight: 600, margin: "16px 0 4px" }}>Ghi chú</div>
            <table>
              <tr>
                <th>Mẫu vải</th>
                <th>STT</th>
                <th>Ghi chú</th>
              </tr>
              {Array(6)
                .fill(null)
                .map((x, index) => (
                  <tr className="Template-Note__Bottom" key={index}>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonInformationTemplate;
