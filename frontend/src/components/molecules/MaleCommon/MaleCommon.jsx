import React from "react";

const MaleCommon = ({ data }) => {
  return (
    <div className="Gender-Common">
      <div style={{ fontWeight: 600 }}>Số đo cơ bản</div>
      <div>1.</div>
      <div>
        <table>
          <tr>
            <td colSpan={3}>Dài quần/áo/váy:</td>
          </tr>
          <tr>
            <td>Vai: {data.vai}</td>
            <td>Cổ: {data.co}</td>
            <td>Ngực: {data.nguc}</td>
          </tr>
          <tr>
            <td>Eo: {data.eo}</td>
            <td>Mông: {data.mong}</td>
            <td>Lưng: {data.lung}</td>
          </tr>
          <tr>
            <td>Bắp tay: {data.bap_tay}</td>
            <td>Bụm tay: {data.bum_tay}</td>
            <td>Cúc tay: {data.cuc_tay}</td>
          </tr>
        </table>
      </div>
      <div>2.</div>
      <div>
        <table>
          <tr>
            <td>Dài quần: {data.dai_quan}</td>
            <td>Gối: {data.goi}</td>
            <td>Bắp: {data.bap}</td>
          </tr>
          <tr>
            <td>Đũng: {data.dung}</td>
            <td>Đùi: {data.dui}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MaleCommon;
