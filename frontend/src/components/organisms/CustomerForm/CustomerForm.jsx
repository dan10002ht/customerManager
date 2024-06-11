import "./CustomerForm.scss";
import React, { useContext } from "react";
import { Button, Flex, Form, Input, Radio, Typography } from "antd";
import CustomerFormContext from "../../../contexts/CustomerFormContext";

const maleOptions = [
  [{ title: "Áo" }],
  [
    {
      label: "Kheo",
      name: "kheo",
    },
    {
      label: "Vai",
      name: "vai",
    },
    {
      label: "Cổ",
      name: "co",
    },
  ],
  [
    { label: "Ngực", name: "nguc" },
    { label: "Eo", name: "eo" },
    { label: "Mông", name: "mong_ao" },
  ],
  [
    { label: "Dài tay", name: "dai_tay" },
    { label: "Bắp tay", name: "bap_tay" },
  ],
  [
    { label: "Bụng tay", name: "bung_tay" },
    { label: "Cổ tay", name: "co_tay" },
  ],
  [{ title: "Quần" }],
  [
    { label: "Mông", name: "mong" },
    { label: "Lưng", name: "lung" },
  ],
  [
    { label: "Đũng", name: "dung" },
    { label: "Dài quần", name: "dai_quan" },
  ],
  [
    { label: "Đùi", name: "dui" },
    { label: "Gối", name: "goi" },
  ],
];

const femaleOptions = [
  [
    { label: "Vai", name: "vai" },
    { label: "Cổ", name: "co" },
    { label: "Kheo", name: "kheo" },
  ],
  [
    { label: "Ngực", name: "nguc" },
    { label: "Hạ ngực", name: "ha_nguc" },
    { label: "Chân ngực", name: "chan_nguc" },
  ],
  [
    { label: "Eo", name: "eo" },
    { label: "Hạ eo", name: "ha_eo" },
  ],
  [
    { label: "Bắp tay", name: "bap_tay" },
    { label: "Bàn tay", name: "ban_tay" },
    { label: "Cánh tay", name: "canh_tay" },
  ],
  [
    { label: "Mông", name: "mong" },
    { label: "Hạ mông", name: "ha_mong" },
  ],
  [
    { label: "Đùi", name: "dui" },
    { label: "Gối", name: "goi" },
    { label: "Hạ gối", name: "ha_goi" },
  ],
  [
    { label: "Bắp", name: "bap" },
    { label: "Bụng", name: "bung" },
    { label: "Chân", name: "chan" },
  ],
  [
    { label: "Lưng", name: "lung" },
    { label: "Đũng", name: "dung" },
  ],
];

export default function CustomerForm() {
  const {
    handleSave,
    onGenderChange,
    gender,
    loading,
    formType,
    form,
    canChangeGender,
    changeDescription,
    addDescription,
    defaultData = {},
  } = useContext(CustomerFormContext);

  const genderOptions = gender === "female" ? femaleOptions : maleOptions;
  return (
    <Form
      form={form}
      onFinish={handleSave}
      initialValues={{ gender: "male", ...defaultData }}
      onValuesChange={onGenderChange}
      layout="vertical"
      size="middle"
    >
      <Typography.Title level={3}>
        {formType === "add" ? "Thêm khách hàng" : "Sửa khách hàng"}
      </Typography.Title>
      {canChangeGender ? (
        <Form.Item label="Giới tính" name="gender">
          <Radio.Group value={gender}>
            <Radio.Button value="male">Nam</Radio.Button>
            <Radio.Button value="female">Nữ</Radio.Button>
          </Radio.Group>
        </Form.Item>
      ) : (
        <label>Giới tính: {gender === "male" ? "Nam" : "Nữ"}</label>
      )}
      <div className="Customer-Form__Control">
        <Form.Item
          rules={[{ required: true, message: "" }]}
          name="ten_khach_hang"
          label="Tên khách hàng"
        >
          <Input placeholder="Tên khách hàng" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "" }]}
          name="so_dien_thoai"
          label="Số điện thoại"
        >
          <Input placeholder="Số điện thoại" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "" }]}
          name="email"
          label="Email"
        >
          <Input placeholder="Email" />
        </Form.Item>
      </div>

      <Typography.Title style={{ fontSize: "18px" }} level={5}>
        Số đo cơ bản
      </Typography.Title>

      {genderOptions.map((optionGroup, index) => (
        <div key={index} className="Customer-Form__Control">
          {optionGroup.map((x) =>
            x.title ? (
              <Typography.Title style={{ fontSize: "18px" }} level={5}>
                {x.title}:
              </Typography.Title>
            ) : (
              <Form.Item name={x.name} key={x.label} label={x.label}>
                <Input placeholder={x.label} />
              </Form.Item>
            )
          )}
        </div>
      ))}
      {defaultData.description.map((x, index) => (
        <Flex gap="8px" style={{ marginBottom: "8px" }}>
          <div style={{ width: "200px" }}>
            <Input value={`STT: ${index}`} disabled />
          </div>
          <Input
            value={x.value}
            onChange={(e) => changeDescription(e.target.value, index)}
          />
        </Flex>
      ))}
      <Button onClick={addDescription}>Thêm ghi chú</Button>
      <div style={{ textAlign: "right" }}>
        <Button
          loading={loading}
          disabled={loading}
          htmlType="submit"
          type="primary"
        >
          {formType === "add" ? "Thêm khách hàng" : "Sửa khách hàng"}
        </Button>
      </div>
    </Form>
  );
}
