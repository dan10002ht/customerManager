import React from "react";
import { useParams } from "react-router-dom";
import useFetchApi from "../../hooks/useFetchApi";
import CommonInformationTemplate from "../../components/organisms/CommonInformationTemplate/CommonInformationTemplate";
import MaleCommon from "../../components/molecules/MaleCommon/MaleCommon";
import FemaleCommon from "../../components/molecules/FemaleCommon";

const Information = () => {
  const { id } = useParams();
  const { data, fetched } = useFetchApi({ url: `/customer/${id}` });
  const commonMarkup =
    data.gender === "male" ? (
      <MaleCommon data={data} />
    ) : (
      <FemaleCommon data={data} />
    );
  return (
    <CommonInformationTemplate data={data}>
      {fetched && commonMarkup}
    </CommonInformationTemplate>
  );
};

export default Information;
