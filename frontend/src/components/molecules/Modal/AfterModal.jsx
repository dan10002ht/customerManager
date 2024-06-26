import React from "react";
import { Button, Modal, Typography } from "antd";
import checkIcon from "../../../assets/check-icon.png";

const AfterModal = ({
  open,
  handleCancel,
  handleOk,
  setOpen,
  content = "Thành công",
}) => {
  return (
    <Modal
      closable
      title="Thông báo"
      open={open}
      handleOk={handleCancel}
      handleCancel={handleCancel}
      footer={null}
      onCancel={handleOk}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img style={{ width: "20%" }} src={checkIcon} />
        <div style={{ fontSize: "30px", fontWeight: "600" }}>{content}</div>
      </div>
    </Modal>
  );
};

export default AfterModal;
