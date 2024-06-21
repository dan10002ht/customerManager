import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import useFetchApi from "../../hooks/useFetchApi";
import CommonInformationTemplate from "../../components/organisms/CommonInformationTemplate";
import MaleCommon from "../../components/molecules/MaleCommon/MaleCommon";
import FemaleCommon from "../../components/molecules/FemaleCommon";

const Information = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const ghiChu = searchParams.get("ghi_chu");
  const sectionData = searchParams.get("sectionData");
  const indexArray = ghiChu ? ghiChu.split(",").map((x) => parseInt(x)) : [];
  const sectionArray = sectionData
    ? sectionData.split(",").map((x) => parseInt(x))
    : [];
  const { data, fetched } = useFetchApi({ url: `/customer/${id}` });

  const dataRender = indexArray.length
    ? {
        ...data,
        description: data.description?.filter((_, index) =>
          indexArray.includes(index)
        ),
      }
    : data;
  useEffect(() => {
    if (fetched) {
      window.print();
    }
  }, [fetched]);
  const commonMarkup =
    data.gender === "male" ? (
      <MaleCommon data={dataRender} sectionArray={sectionArray} />
    ) : (
      <FemaleCommon data={dataRender} sectionArray={sectionArray} />
    );
  return (
    <CommonInformationTemplate data={dataRender}>
      {fetched && commonMarkup}
    </CommonInformationTemplate>
  );
};

export default Information;
