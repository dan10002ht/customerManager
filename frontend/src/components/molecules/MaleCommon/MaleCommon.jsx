import React from "react";

const MaleCommon = () => {
  return (
    <div className="Gender-Common">
      <div style={{ fontWeight: 600 }}>So do co ban</div>
      <div>1.</div>
      <div>
        <table>
          <tr>
            <td colSpan={3}>Dai quan/ao/vay:</td>
          </tr>
          <tr>
            <td>Vai</td>
            <td>Co</td>
            <td>Nguc</td>
          </tr>
          <tr>
            <td>Eo</td>
            <td>Mong</td>
            <td>Lung</td>
          </tr>
          <tr>
            <td>Bap tay</td>
            <td>Bum tay</td>
            <td>Cuc tay</td>
          </tr>
        </table>
      </div>
      <div>2.</div>
      <div>
        <table>
          <tr>
            <td>Dai quan</td>
            <td>Goi</td>
            <td>Bap</td>
          </tr>
          <tr>
            <td>Dung</td>
            <td>Dui</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MaleCommon;
