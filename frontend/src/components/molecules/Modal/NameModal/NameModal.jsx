import {
  Badge,
  Checkbox,
  Descriptions,
  Flex,
  Input,
  Modal,
  Typography,
} from "antd";
import React, { useState } from "react";
import dayjs from "dayjs";

const { TextArea } = Input;

const NameModal = ({ name, data }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const handleCancel = () => setOpen(false);
  const handleOk = () => {
    window.open(`/information/${data.id}?ghi_chu=${selected.join(",")}`);
  };
  const handleSelect = (e, index) =>
    setSelected(() => {
      if (e.target.checked) {
        return [...selected, index];
      } else {
        return selected.filter((y) => y !== index);
      }
    });

  return (
    <>
      <div style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
        {name}
      </div>
      <Modal
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
          column={4}
          items={
            data.gender === "male"
              ? [
                  { key: "Vai", label: "Vai", children: data.vai },
                  { key: "Cổ", label: "Cổ", children: data.co },
                  { key: "Ngực", label: "Ngực", children: data.nguc },
                  { key: "Eo", label: "Eo", children: data.eo },
                  { key: "Mông", label: "Mông", children: data.mong },
                  { key: "Lưng", label: "Lưng", children: data.lung },
                  { key: "Bắp tay", label: "Bắp tay", children: data.bap_tay },
                  { key: "Bụm tay", label: "Bụm tay", children: data.bum_tay },
                  { key: "Cúc tay", label: "Cúc tay", children: data.cuc_tay },
                  {
                    key: "Dài quần",
                    label: "Dài quần",
                    children: data.dai_quan,
                  },
                  { key: "Gối", label: "Gối", children: data.goi },
                  { key: "Bắp", label: "Bắp", children: data.bap },
                  { key: "Đũng", label: "Đũng", children: data.dung },
                  { key: "Đùi", label: "Đùi", children: data.dui },
                ]
              : [
                  { key: "Ngực", label: "Ngực", children: data.nguc },
                  { key: "Vai", label: "Vai", children: data.vai },
                  { key: "Cổ", label: "Cổ", children: data.co },
                  { key: "Eo", label: "Eo", children: data.eo },
                  { key: "Lưng", label: "Lưng", children: data.lung },
                  { key: "Mông", label: "Mông", children: data.mong },
                  { key: "Hạ ngực", label: "Hạ ngực", children: data.ha_nguc },
                  { key: "Hạ eo", label: "Hạ eo", children: data.ha_eo },
                  { key: "Dài áo", label: "Dài áo", children: data.dai_ao },
                  { key: "Dài tay", label: "Dài tay", children: data.dai_tay },
                  { key: "Bắp tay", label: "Bắp tay", children: data.bap_tay },
                  { key: "Bụm tay", label: "Bụm tay", children: data.bum_tay },
                  { key: "Cúc tay", label: "Cúc tay", children: data.cuc_tay },
                  {
                    key: "Dài quần",
                    label: "Dài quần",
                    children: data.dai_quan,
                  },
                  { key: "Đũng", label: "Đũng", children: data.dung },
                ]
          }
        />
        <Typography.Title style={{ fontSize: "18px" }} level={5}>
          Ghi chú
        </Typography.Title>
        <div style={{ marginTop: "8px" }}>
          {data.description?.map((x, index) => (
            <Flex key={index} gap="8px" style={{ marginBottom: "8px" }}>
              <Checkbox
                checked={selected.includes(index)}
                onChange={(e) => handleSelect(e, index)}
              />
              <div style={{ width: "300px" }}>
                <Input placeholder="Hàng hóa" value={x.merchandise} disabled />
              </div>
              <TextArea
                autoSize={{ minRows: 2, maxRows: 6 }}
                value={x.description}
                placeholder="Ghi chú"
                disabled
              />
            </Flex>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default NameModal;
