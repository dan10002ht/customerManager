import { Form } from "antd";
import CustomerForm from "../../../components/organisms/CustomerForm/CustomerForm";
import CustomerFormContext from "../../../contexts/CustomerFormContext";
import { useState } from "react";
import useCreateApi from "../../../hooks/useCreateApi";
import { useNavigate } from "react-router-dom";
import AfterModal from "../../../components/molecules/Modal";

const Create = () => {
  const [form] = Form.useForm();
  const [gender, setGender] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { creating, handleCreate } = useCreateApi({
    url: "/customer",
    fullResp: true,
  });

  const handleOk = () => {
    setOpen(false);
    navigate("/customer/list");
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSave = async (values) => {
    if (creating) return;
    const resp = await handleCreate(values);
    if (resp.success) {
      form.resetFields();
      setOpen(true);
    }
  };

  const onGenderChange = ({ gender: genderChange }) => {
    if (!genderChange) return;
    setGender(genderChange);
    form.resetFields();
  };

  return (
    <CustomerFormContext.Provider
      value={{
        handleSave,
        onGenderChange,
        gender,
        loading: creating,
        formType: "add",
        form,
      }}
    >
      <CustomerForm />
      {open && (
        <AfterModal
          open={open}
          setOpen={setOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      )}
    </CustomerFormContext.Provider>
  );
};

export default Create;
