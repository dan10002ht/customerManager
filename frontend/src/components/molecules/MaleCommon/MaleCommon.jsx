import React from "react";
import { maleFirstSection, maleSecondSection } from "../../../const/options";

const MaleCommon = ({ data, sectionArray }) => {
  const sections = [maleFirstSection, maleSecondSection];
  const mappingSection = !sectionArray.length
    ? sections
    : sections.filter((_, index) => sectionArray.includes(index));
  return (
    <div className="Gender-Common">
      <div style={{ fontWeight: 600 }}>Số đo cơ bản</div>
      {mappingSection.map((section, index) => (
        <>
          <div>{index + 1}.</div>
          <div>
            <table>
              {section.map((options, _index) => (
                <tr key={_index}>
                  {options.map((x) => (
                    <td key={x.label}>
                      {x.label}: {data[x.name]}
                    </td>
                  ))}
                </tr>
              ))}
            </table>
          </div>
        </>
      ))}
    </div>
  );
};

export default MaleCommon;
