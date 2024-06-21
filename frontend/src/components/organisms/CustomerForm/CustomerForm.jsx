import "./CustomerForm.scss";
import React, { useContext } from "react";
import { Button, Flex, Form, Input, Radio, Typography } from "antd";
import CustomerFormContext from "../../../contexts/CustomerFormContext";
import { femaleOptions, maleOptions } from "../../../const/options";

const { TextArea } = Input;


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
              <Typography.Title
                key={x.title}
                style={{ fontSize: "18px" }}
                level={5}
              >
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
      <Flex style={{ marginBottom: "8px" }} justify="space-between">
        <Typography.Title style={{ fontSize: "18px" }} level={5}>
          Ghi chú
        </Typography.Title>
        <Button onClick={addDescription}>Thêm ghi chú</Button>
      </Flex>
     <Flex vertical gap="16px">
     {defaultData.description.map((x, index) => (
        <Flex key={index} gap="8px" style={{ marginBottom: "8px" }}>
          <div style={{ width: "300px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <Input
              onKeyDown={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              placeholder="Hàng hóa"
              value={x.merchandise}
              onChange={(e) =>
                changeDescription("merchandise", e.target.value, index)
              }
            />
            <Input
              onKeyDown={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              placeholder="Thợ"
              value={x.tailor}
              onChange={(e) =>
                changeDescription("tailor", e.target.value, index)
              }
            />
          </div>
          <TextArea
            value={x.description}
            placeholder="Ghi chú"
            onChange={(e) =>
              changeDescription("description", e.target.value, index)
            }
          />
        </Flex>
      ))}
     </Flex>
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
