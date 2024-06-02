import { Form } from "antd";
import CustomerForm from "../../../components/organisms/CustomerForm/CustomerForm";
import CustomerFormContext from "../../../contexts/CustomerFormContext";
import { useState } from "react";
import useCreateApi from "../../../hooks/useCreateApi";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [form] = Form.useForm();
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const { creating, handleCreate } = useCreateApi({
    url: "/customer",
    fullResp: true,
  });

  const handleSave = async (values) => {
    if (creating) return;
    console.log({ values });
    const resp = await handleCreate(values);
    if (resp.success) {
      console.log(resp);
      navigate(`/customer/${resp.data}`);
    }
  };

  const onGenderChange = ({ gender: genderChange }) => {
    if (!genderChange) return;
    setGender(genderChange);
  };

  return (
    <CustomerFormContext.Provider
      value={{
        handleSave,
        onGenderChange,
        gender,
        loading: creating,
        formType: "add",
      }}
    >
      <CustomerForm />
    </CustomerFormContext.Provider>
  );
};

export default Create;
