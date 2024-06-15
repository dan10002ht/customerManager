import { Button, Descriptions, Flex, Modal, Typography } from "antd";
import React, { useState } from "react";
import dayjs from "dayjs";
import AdvancedCheckbox from "../../AdvancedCheckbox/AdvancedCheckbox";

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
          bordered
          column={3}
          items={
            data.gender === "male"
              ? [
                  { key: "Kheo", label: "Kheo", children: data.kheo },
                  { key: "Vai", label: "Vai", children: data.vai },
                  { key: "Cổ", label: "Cổ", children: data.co },
                  { key: "Ngực", label: "Ngực", children: data.nguc },
                  { key: "Eo", label: "Eo", children: data.eo },
                  { key: "Mông", label: "Mông", children: data.mong },
                  { key: "Dài tay", label: "Dài tay", children: data.dai_tay },
                  { key: "Bắp tay", label: "Bắp tay", children: data.bap_tay },
                  {
                    key: "Bụng tay",
                    label: "Bụng tay",
                    children: data.bung_tay,
                  },
                  {
                    key: "Cổ tay",
                    label: "Cổ tay",
                    children: data.co_tay,
                  },
                  {
                    key: "Đùi",
                    label: "Đùi",
                    children: data.dui,
                  },
                  {
                    key: "Gối",
                    label: "Gối",
                    children: data.goi,
                  },
                  {
                    key: "Bắp",
                    label: "Bắp",
                    children: data.bap,
                  },
                  { key: "Mông", label: "Mông", children: data.mong },
                  { key: "Hạ mông", label: "Hạ mông", children: data.ha_mong },
                  { key: "Lưng", label: "Lưng", children: data.lung },
                  { key: "Đũng", label: "Đũng", children: data.dung },
                  {
                    key: "Dài quần",
                    label: "Dài quần",
                    children: data.dai_quan,
                  },
                ]
              : [
                  { key: "Vai", label: "Vai", children: data.vai },
                  { key: "Cổ", label: "Cổ", children: data.co },
                  { key: "Kheo", label: "Kheo", children: data.kheo },
                  { key: "Ngực", label: "Ngực", children: data.nguc },
                  { key: "Hạ ngực", label: "Hạ ngực", children: data.ha_nguc },
                  {
                    key: "Chân ngực",
                    label: "Chân ngực",
                    children: data.chan_nguc,
                  },
                  { key: "Eo", label: "Eo", children: data.eo },
                  { key: "Hạ eo", label: "Hạ eo", children: data.ha_eo },
                  { key: "Bắp tay", label: "Bắp tay", children: data.bap_tay },
                  {
                    key: "Bụng tay",
                    label: "Bụng tay",
                    children: data.bung_tay,
                  },
                  {
                    key: "Cửa tay",
                    label: "Cửa tay",
                    children: data.cua_tay,
                  },
                  { key: "Mông", label: "Mông", children: data.mong },
                  { key: "Hạ mông", label: "Hạ mông", children: data.ha_mong },
                  {
                    key: "Đùi",
                    label: "Đùi",
                    children: data.dui,
                  },
                  { key: "Gối", label: "Gối", children: data.goi },
                  {
                    key: "Bắp chân",
                    label: "Bắp chân",
                    children: data.bap_chan,
                  },
                  { key: "Lưng", label: "Lưng", children: data.lung },
                  { key: "Đũng", label: "Đũng", children: data.dung },
                  { key: "Hạ gối", label: "Hạ gối", children: data.ha_goi },
                  { key: "Hạ lưng", label: "Hạ lưng", children: data.ha_lung },
                ]
          }
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
