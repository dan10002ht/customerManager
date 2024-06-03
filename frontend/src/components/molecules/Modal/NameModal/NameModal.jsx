import { Badge, Descriptions, Modal } from "antd";
import React, { useState } from "react";
import dayjs from "dayjs";

const NameModal = ({ name, data }) => {
  const [open, setOpen] = useState(false);
  const handleCancel = () => setOpen(false);
  console.log({ data });
  return (
    <>
      <div style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
        {name}
      </div>
      <Modal
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
        <div style={{ margin: "8px 0", fontSize: "16px", fontWeight: 600 }}>
          Số đo cơ bản
        </div>
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
      </Modal>
    </>
  );
};

export default NameModal;
