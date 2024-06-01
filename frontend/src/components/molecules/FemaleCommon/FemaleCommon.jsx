import React from "react";

const FemaleCommon = ({ data }) => {
  return (
    <div className="Gender-Common">
      <div style={{ fontWeight: 600 }}>Số đo cơ bản</div>
      <div>1.</div>
      <div>
        <table>
          <tr>
            <td>Ngực: {data.nguc}</td>
            <td>Vai: {data.vai}</td>
            <td>Cổ: {data.co}</td>
          </tr>
          <tr>
            <td>Eo: {data.eo}</td>
            <td>Lưng: {data.lung}</td>
            <td>Mông: {data.mong}</td>
          </tr>
          <tr>
            <td>Hạ ngực: {data.ha_nguc}</td>
            <td>Hạ eo: {data.ha_eo}</td>
          </tr>
          <tr>
            <td>Dài áo: {data.dai_ao}</td>
            <td>Dài tay: {data.dai_tay}</td>
            <td>Bắp tay: {data.bap_tay}</td>
          </tr>
          <tr>
            <td>Bụm tay: {data.bum_tay}</td>
            <td>Cúc tay: {data.cuc_tay}</td>
          </tr>
          <tr>
            <td>Dài quần: {data.dai_quan}</td>
            <td>Đũng: {data.dung}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default FemaleCommon;
