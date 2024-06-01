import React from "react";
import { useParams } from "react-router-dom";
import useFetchApi from "../../hooks/useFetchApi";
import CommonInformationTemplate from "../../components/organisms/CommonInformationTemplate/CommonInformationTemplate";
import MaleCommon from "../../components/molecules/MaleCommon/MaleCommon";

const Information = () => {
  const { id } = useParams();
  const { data } = useFetchApi({ url: `/customer/${id}` });
  console.log({ data });
  return (
    <CommonInformationTemplate>
      <MaleCommon />
    </CommonInformationTemplate>
  );
};

export default Information;
