import { Button, Checkbox, Descriptions, Flex, Modal, Typography } from "antd";
import React, { useState } from "react";
import "./NameModal.scss";
import dayjs from "dayjs";
import AdvancedCheckbox from "../../AdvancedCheckbox/AdvancedCheckbox";
import {
  splitedFemaleSectionOptions,
  splitedMaleSectionOptions,
} from "../../../../const/options";

const NameModal = ({ name, data, customButton }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectedSections, setSelectedSections] = useState([]);
  const handleCancel = () => setOpen(false);
  const handleOk = () => {
    window.open(
      `/information/${data.id}?ghi_chu=${selected.join(
        ","
      )}&sectionData=${selectedSections.join(",")}`
    );
  };
  const handleSelect = (index, setSelectFunc = setSelected) =>
    setSelectFunc((prev) => {
      if (!prev.includes(index)) {
        return [...prev, index];
      } else {
        return prev.filter((y) => y !== index);
      }
    });

  const customFooter = !customButton ? { footer: null } : {};

  const optionData =
    data.gender === "male"
      ? splitedMaleSectionOptions
      : splitedFemaleSectionOptions;

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
          <div className="Customer-Modal__Title">
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
        <Flex className="Customer-Modal__Wrapper" vertical gap="8px">
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
                  "HH:mm DD/MM/YYYY"
                ),
              },
            ]}
          />
          <Typography.Title style={{ fontSize: "18px" }} level={5}>
            Số đo cơ bản
          </Typography.Title>
          {optionData.map((optionGroup, index) => (
            <>
              {customButton && (
                <Checkbox
                  onChange={() => handleSelect(index, setSelectedSections)}
                  checked={selectedSections.includes(index)}
                />
              )}
              <Descriptions
                onClick={() => {
                  if (!customButton) return;
                  handleSelect(index, setSelectedSections);
                }}
                labelStyle={{
                  background: "rgba(0 ,0 ,0 , 0.05)",
                  fontWeight: "600",
                }}
                className={[
                  "Description-Section",
                  customButton && "--Custom-Button",
                  selectedSections.includes(index) && "--Active",
                ]
                  .filter(Boolean)
                  .join(" ")}
                bordered
                column={3}
                items={optionGroup.flat().map((x) => ({
                  key: x.label,
                  label: x.label,
                  children: data[x.name],
                }))}
              />
            </>
          ))}
          <Typography.Title style={{ fontSize: "18px" }} level={5}>
            Ghi chú
          </Typography.Title>
          <Flex vertical gap="8px" style={{ marginTop: "8px" }}>
            {data.description?.map((x, index) => (
              <AdvancedCheckbox
                key={index}
                data={x}
                isActive={selected.includes(index)}
                onToggle={() => handleSelect(index)}
                disableSelected={!customButton}
              />
            ))}
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};

export default NameModal;
