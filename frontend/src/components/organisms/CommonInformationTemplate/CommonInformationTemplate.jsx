import React from "react";
import "./CommonInformationTemplate.scss";

const CommonInformationTemplate = ({ children }) => {
  return (
    <page>
      <div className="Template">
        <div className="Template-Container">
          <div className="Template-Top">
            <div className="Template-TopLeft">NAM</div>
            <div className="Template-TopRight">
              <table>
                <tr>
                  <td style={{ width: "50%" }}>Ngày đến</td>
                  <td>ID: </td>
                </tr>
                <tr>
                  <td colSpan={2}>Ngày trả hàng:</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="Template-Customer__Information">
            <div className="">Tên khách hàng:</div>
            <div className="">Số điện thoại:</div>
            <div className="">Email:</div>
          </div>
          {children}
          <div className="Template-Note">
            <div style={{ fontWeight: 600, margin: "16px 0 4px" }}>Ghi chu</div>
            <table>
              <tr>
                <th>Mau vai</th>
                <th>STT</th>
                <th>Ghi chu</th>
              </tr>
              {Array(5)
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
    </page>
  );
};

export default CommonInformationTemplate;
