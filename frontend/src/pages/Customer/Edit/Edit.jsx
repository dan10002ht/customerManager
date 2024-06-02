import { Form } from "antd";
import CustomerForm from "../../../components/organisms/CustomerForm/CustomerForm";
import CustomerFormContext from "../../../contexts/CustomerFormContext";
import { useState } from "react";
import useCreateApi from "../../../hooks/useCreateApi";
import useFetchApi from "../../../hooks/useFetchApi";
import { useParams } from "react-router-dom";
import useEditApi from "../../../hooks/useEditApi";

const Edit = () => {
  const [form] = Form.useForm();
  const { id } = useParams();

  const { loading, fetched, handleChangeInput, data } = useFetchApi({
    url: `/customer/${id}`,
  });

  const { editing, handleEdit } = useEditApi({
    url: `/customer/${id}`,
  });

  const handleSave = async (values) => {
    if (editing) return;
    console.log({ values });
    handleEdit(values);
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
      }}
    >
      {fetched && <CustomerForm />}
    </CustomerFormContext.Provider>
  );
};

export default Edit;
