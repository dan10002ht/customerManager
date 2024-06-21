import React from "react";
import "./AdvancedCheckbox.scss";
import { Checkbox } from "antd";

const AdvancedCheckbox = ({ data, isActive, onToggle, disableSelected }) => {
  const callback = disableSelected ? null : onToggle;
  return (
    <div
      onClick={callback}
      className={[
        "Customer-Description__CheckBox",
        isActive && "--Active",
        !disableSelected && "--Selectable",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {!disableSelected && <Checkbox checked={isActive} />}
      <div className="Customer-Description__LabelItem --Tailor">
        Thợ: {data.tailor}
      </div>
      <div className="Customer-Description__LabelItem">
        Tên hàng hóa: {data.merchandise}
      </div>
      <div className="Customer-Description__Description">
        Ghi chú: {data.description}
      </div>
    </div>
  );
};

export default AdvancedCheckbox;
