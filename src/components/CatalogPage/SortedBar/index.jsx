import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { BarWrapper, Wrapper } from "./views";

const SortedBar = ({ sortUp, sortDown }) => {
  const handleChange = (e) => {
    switch (e.target.value) {
      case "priceUsdUp":
        sortUp("priceUsd");
        break;

      case "priceUsdDown":
        sortDown("priceUsd");
        break;

      case "yearUp":
        sortUp("year");
        break;

      case "yearDown":
        sortDown("year");
        break;

      case "mileageUp":
        sortUp("mileage");
        break;

      case "mileageDown":
        sortDown("mileage");
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
            <MenuItem value="priceUsdUp">{t("sort.price")} (вверх)</MenuItem>
            <MenuItem value="priceUsdDown">{t("sort.price")} (вниз)</MenuItem>
            <MenuItem value="yearUp">{t("sort.year")} (вверх)</MenuItem>
            <MenuItem value="yearDown">{t("sort.year")} (вниз)</MenuItem>
            <MenuItem value="mileageUp">{t("sort.mile")} (вверх)</MenuItem>
            <MenuItem value="mileageDown">{t("sort.mile")} (вниз)</MenuItem>
          </Select>
        </FormControl>
      </BarWrapper>
    </Wrapper>
  );
};
export default SortedBar;
