import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { BarWrapper, Wrapper } from "./views";

const SortedBar = ({ sortUp, sortDown }) => {
  const handleChange = (e) => {
    switch (e.target.value) {
      case "priceUp":
        sortUp("priceUsd");
        break;

      case "priceDown":
        sortDown("priceUsd");
        break;

      default:
    }
  };
  const { t } = useTranslation();
  return (
    <Wrapper>
      <BarWrapper>
        {" "}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            {t("sort.title")}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={t("sort.title")}
            onChange={handleChange}
          >
            <MenuItem value="priceUp">{t("sort.price")} (вверх)</MenuItem>
            <MenuItem value="priceDown">{t("sort.price")} (вниз)</MenuItem>
          </Select>
        </FormControl>
      </BarWrapper>
    </Wrapper>
  );
};
export default SortedBar;
