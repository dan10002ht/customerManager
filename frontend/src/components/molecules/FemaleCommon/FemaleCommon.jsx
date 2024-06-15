import React from "react";

const FemaleCommon = ({ data }) => {
  return (
    <div className="Gender-Common">
      <div style={{ fontWeight: 600 }}>Số đo cơ bản</div>
      <div>1.</div>
      <div>
        <table>
          <tr>
            <td>Vai: {data.vai}</td>
            <td>Cổ: {data.co}</td>
            <td>Kheo: {data.kheo}</td>
          </tr>
          <tr>
            <td>Ngực: {data.nguc}</td>
            <td>Hạ ngực: {data.ha_nguc}</td>
            <td>Chân ngực: {data.chan_nguc}</td>
          </tr>
          <tr>
            <td>Eo: {data.eo}</td>
            <td>Hạ eo: {data.ha_eo}</td>
          </tr>
        </table>
      </div>
      <div>2.</div>
      <div>
        <table>
          <tr>
            <td>Bắp tay: {data.bap_tay}</td>
            <td>B.tay: {data.b_tay}</td>
            <td>Cánh tay: {data.canh_tay}</td>
          </tr>
          <tr>
            <td>Mông: {data.mong}</td>
            <td>Hạ mông: {data.ha_mong}</td>
          </tr>
        </table>
      </div>
      <div>3.</div>
      <div>
        <table>
          <tr>
            <td>Đùi: {data.dui}</td>
            <td>Gối: {data.goi}</td>
            <td>Hạ gối: {data.ha_goi}</td>
          </tr>
          <tr>
            <td>Bắp: {data.bap}</td>
            <td>Bụng: {data.bung}</td>
            <td>Chân: {data.chan}</td>
          </tr>
          <tr>
            <td>Lưng: {data.lung}</td>
            <td>Đũng: {data.dung}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default FemaleCommon;
