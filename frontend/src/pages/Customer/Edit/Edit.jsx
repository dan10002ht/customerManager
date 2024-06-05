import { Form } from "antd";
import CustomerForm from "../../../components/organisms/CustomerForm/CustomerForm";
import CustomerFormContext from "../../../contexts/CustomerFormContext";
import { useState } from "react";
import useCreateApi from "../../../hooks/useCreateApi";
import useFetchApi from "../../../hooks/useFetchApi";
import { useNavigate, useParams } from "react-router-dom";
import useEditApi from "../../../hooks/useEditApi";
import AfterModal from "../../../components/molecules/Modal";

const Edit = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { loading, fetched, handleChangeInput, data } = useFetchApi({
    url: `/customer/${id}`,
  });

  const { editing, handleEdit } = useEditApi({
    url: `/customer/${id}`,
    fullResp: true,
  });

  const handleOk = () => {
    setOpen(false);
    navigate("/customer/list");
  };

  const handleCancel = () => {
    setOpen(false);
    navigate("/customer/list");
  };

  const handleSave = async (values) => {
    if (editing) return;
    const resp = await handleEdit(values);
    if (resp.success) {
      setOpen(true);
    }
  };

  const onGenderChange = ({ gender: genderChange }) => {
    if (!genderChange) return;
    handleChangeInput("gender", genderChange);
  };

  return (
    <CustomerFormContext.Provider
      value={{
        handleSave,
        onGenderChange,
        form,
        gender: data.gender,
        loading: loading || editing,
        defaultData: data,
        formType: "edit",
        canChangeGender: false,
      }}
    >
      {fetched && <CustomerForm />}
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

export default Edit;
