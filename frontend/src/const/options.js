export const maleOptions = [
  [
    { label: "Dài áo", name: "dai_ao" },
    {
      label: "Vai",
      name: "vai",
    },
    {
      label: "Kheo",
      name: "kheo",
    },
    {
      label: "Cổ",
      name: "co",
    },
  ],
  [
    { label: "Ngực", name: "nguc" },
    { label: "Eo", name: "eo" },
    { label: "Mông", name: "mong_ao" },
  ],
  [
    { label: "Dài tay", name: "dai_tay" },
    { label: "Bắp tay", name: "bap_tay" },
    { label: "Bụm tay", name: "bum_tay" },
    { label: "Cửa tay", name: "cua_tay" },
  ],

  [
    { label: "Dài quần", name: "dai_quan" },
    { label: "Mông", name: "mong" },
    { label: "Lưng", name: "lung" },
    { label: "Đũng", name: "dung" },
  ],

  [
    { label: "Đùi", name: "dui" },
    { label: "Gối", name: "goi" },
    { label: "Bắp", name: "bap" },
  ],
];

export const femaleOptions = [
  [
    { label: "Dài", name: "dai" },
    { label: "Vai", name: "vai" },
    { label: "Kheo", name: "kheo" },
    { label: "Cổ", name: "co" },
  ],
  [
    { label: "Ngực", name: "nguc" },
    { label: "Hạ ngực", name: "ha_nguc" },
    { label: "Hạ chân ngực", name: "ha_chan_nguc" },
  ],
  [
    { label: "Eo", name: "eo" },
    { label: "Hạ eo", name: "ha_eo" },
    { label: "Mông", name: "mong" },
    { label: "Hạ mông", name: "ha_mong" },
  ],
  [
    { label: "Tay", name: "tay" },
    { label: "Bắp tay", name: "bap_tay" },
    { label: "Bụm tay", name: "bum_tay" },
    { label: "Cửa tay", name: "cua_tay" },
  ],
  [
    { label: "Dài quần", name: "dai_quan" },
    { label: "Lưng", name: "lung" },
    { label: "Đũng", name: "dung" },
  ],
  [
    { label: "Đùi", name: "dui" },
    { label: "Gối", name: "goi" },
    { label: "Bắp chân", name: "bap_chan" },
  ],
  [
    { label: "Mông", name: "mong_quan" },
    { label: "Hạ gối", name: "ha_goi" },
    { label: "Hạ lưng", name: "ha_lung" },
  ],
];

export const femaleFirstSection = femaleOptions.slice(0, 4);
export const femaleSecondSection = femaleOptions.slice(4);

export const maleFirstSection = maleOptions.slice(0, 3);
export const maleSecondSection = maleOptions.slice(3);

export const splitedFemaleSectionOptions = [
  femaleFirstSection,
  femaleSecondSection,
];
export const splitedMaleSectionOptions = [maleFirstSection, maleSecondSection];
