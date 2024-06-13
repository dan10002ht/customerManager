import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import useFetchApi from "../../hooks/useFetchApi";
import CommonInformationTemplate from "../../components/organisms/CommonInformationTemplate";
import MaleCommon from "../../components/molecules/MaleCommon/MaleCommon";
import FemaleCommon from "../../components/molecules/FemaleCommon";

const Information = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const indexArray = searchParams
    .get("ghi_chu")
    .split(",")
    .map((x) => parseInt(x));
  const { data, fetched } = useFetchApi({ url: `/customer/${id}` });

  console.log({ data });

  useEffect(() => {
    if (fetched) {
      window.print();
    }
  }, [fetched]);
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
