import React from "react";

const MaleCommon = ({ data }) => {
  return (
    <div className="Gender-Common">
      <div style={{ fontWeight: 600 }}>Số đo cơ bản</div>
      <div>1.</div>
      <div>
        <table>
          <tr>
            <td>Kheo: {data.kheo}</td>
            <td>Vai: {data.vai}</td>
            <td>Cổ: {data.co}</td>
          </tr>
          <tr>
            <td>Ngực: {data.nguc}</td>
            <td>Eo: {data.eo}</td>
            <td>Mông: {data.mong}</td>
          </tr>
          <tr>
            <td>Dài tay: {data.dai_tay}</td>
            <td>Bắp tay: {data.bap_tay}</td>
          </tr>
          <tr>
            <td>Bụng tay: {data.bung_tay}</td>
            <td>Cổ tay: {data.co_tay}</td>
          </tr>
        </table>
      </div>
      <div>2.</div>
      <div>
        <table>
          <tr>
            <td>Dài quần: {data.dai_quan}</td>
          </tr>
          <tr>
            <td>Mông: {data.mong}</td>
            <td>Lưng: {data.lung}</td>
            <td>Đũng: {data.dung}</td>
          </tr>
          <tr>
            <td>Đùi: {data.dui}</td>
            <td>Gối: {data.goi}</td>
            <td>Bắp: {data.bap}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MaleCommon;
