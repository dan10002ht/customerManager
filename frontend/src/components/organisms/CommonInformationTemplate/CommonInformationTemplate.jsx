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
              <div>ANH VILLAGE SILK</div>
              <div>{data.gender === "male" ? "NAM" : "NỮ"}</div>
            </div>
            <div className="Template-TopRight">
              <table>
                <tr>
                  <td>Thợ:</td>
                </tr>
                <tr>
                  <td>Ngày trả hàng:</td>
                </tr>
              </table>
            </div>
          </div>

          {children}
          <div className="Template-Note">
            <div style={{ fontWeight: 600, margin: "16px 0 4px" }}>Ghi chú</div>
            <table>
              <tr>
                <th>Mẫu vải</th>
                <th>Tên sản phẩm</th>
                <th>Ghi chú</th>
              </tr>
              {data.description?.map((x, index) => (
                <tr className="Template-Note__Bottom" key={index}>
                  <td></td>
                  <td>{x.merchandise}</td>
                  <td>{x.description}</td>
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
