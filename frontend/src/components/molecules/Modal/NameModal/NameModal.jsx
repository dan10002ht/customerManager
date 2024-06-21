import { Button, Descriptions, Flex, Modal, Typography } from "antd";
import React, { useState } from "react";
import dayjs from "dayjs";
import AdvancedCheckbox from "../../AdvancedCheckbox/AdvancedCheckbox";
import { femaleOptions, maleOptions } from "../../../../const/options";

const NameModal = ({ name, data, customButton }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const handleCancel = () => setOpen(false);
  const handleOk = () => {
    window.open(`/information/${data.id}?ghi_chu=${selected.join(",")}`);
  };
  const handleSelect = (checked, index) =>
    setSelected(() => {
      if (checked) {
        return [...selected, index];
      } else {
        return selected.filter((y) => y !== index);
      }
    });

  const customFooter = !customButton ? { footer: null } : {};

  const optionData = data.gender === "male" ? maleOptions : femaleOptions;

  return (
    <>
      {customButton ? (
        <Button onClick={() => setOpen(true)}>{customButton}</Button>
      ) : (
        <div style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
          {name}
        </div>
      )}
      <Modal
        {...customFooter}
        okText="In"
        width={800}
        title={
          <div style={{ display: "flex", gap: "8px" }}>
            <span>Thông tin khách hàng</span>
            <span
              style={{
                padding: "2px 16px",
                background: "#1677ff",
                color: "white",
                fontWeight: "normal !important",
                borderRadius: "12px",
              }}
            >
              {data.gender === "male" ? "Nam" : "Nữ"}
            </span>
          </div>
        }
        open={open}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <Descriptions
          bordered
          labelStyle={{
            background: "rgba(0 ,0 ,0 , 0.05)",
            fontWeight: "600",
          }}
          column={2}
          items={[
            {
              key: "name",
              label: "Tên khách hàng",
              children: data.ten_khach_hang,
            },
            {
              key: "email",
              label: "Email",
              children: data.email,
            },
            {
              key: "name",
              label: "Số điện thoại",
              children: data.so_dien_thoai,
            },
            {
              key: "name",
              label: "Ngày tạo",
              children: dayjs(new Date(data.createdAt)).format(
                "hh:mm DD/MM/YYYY"
              ),
            },
          ]}
        />
        <Typography.Title style={{ fontSize: "18px" }} level={5}>
          Số đo cơ bản
        </Typography.Title>
        <Descriptions
          labelStyle={{
            background: "rgba(0 ,0 ,0 , 0.05)",
            fontWeight: "600",
          }}
          bordered
          column={3}
          items={optionData.flat().map((x) => ({
            key: x.label,
            label: x.label,
            children: data[x.name],
          }))}
        />
        <Typography.Title style={{ fontSize: "18px" }} level={5}>
          Ghi chú
        </Typography.Title>
        <Flex vertical gap="8px" style={{ marginTop: "8px" }}>
          {data.description?.map((x, index) => (
            <AdvancedCheckbox
              key={index}
              data={x}
              isActive={selected.includes(index)}
              onToggle={() => handleSelect(!selected.includes(index), index)}
              disableSelected={!customButton}
            />
          ))}
        </Flex>
      </Modal>
    </>
  );
};

export default NameModal;
