import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Slider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { PriceRange } from "../../common/helpers/priceHandler";
import { FilterWrapper, ResetButton, Wrapper } from "./views";

function valuetext(value) {
  return `${value}°C`;
}

const Filter = ({
  resetSelected,
  setSelectedPrice,
  selectedPrice,
  selectedStatus,
  setSelectedStatus,
  setSelectedCondition,
  SelectedCondition,
  itemsData,
  renderItems,
}) => {
  let items = itemsData;
  console.log("check:   ", items);
  const priceHandle = (e) => {
    setSelectedPrice(e.target.value);
  };

  const statusHandle = (e) => {
    setSelectedStatus(e);
  };

  const handleChangeStatus = (event, setHandle) => {
    let {
      target: { value },
    } = event;

    const index = value.indexOf("Всі");
    if (index > -1) {
      // only splice array when item is found
      value.splice(index, 1); // 2nd parameter means remove one item only
    }
    if (!value.length) {
      value = ["Всі"];
    }

    setSelectedStatus(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  function isItemInArray(array, item) {
    for (var i = 0; i < array.length; i++) {
      // This if statement depends on the format of your array
      if (array[i][0] == item[0] && array[i][1] == item[1]) {
        return true; // Found it
      }
    }
    return false; // Not found
  }
  const [selectFiltresStatus, setSelectFiltresStatus] = useState(["Всі"]);

  const applyFiltersStatus = () => {
    let updatedList = items;

    // price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.priceUsd >= minPrice && item.priceUsd <= maxPrice
    );

    let itemList = updatedList
      .sort((a, b) => (a.availability < b.availability ? -1 : 1))
      .reduce((o, i) => {
        if (!o.find((v) => v.availability === i.availability)) {
          o.push(i);
        }
        return o;
      }, []);

    setSelectFiltresStatus(itemList);
  };

  useEffect(() => {
    applyFiltersStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderItems, items]);
  useEffect(() => {
    applyFiltersStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [minMax, setMinMax] = useState([0, 2]);

  useEffect(() => {
    setMinMax(PriceRange(items));
  }, [items]);
  const { t } = useTranslation();

  return (
    <Wrapper>
      <FilterWrapper>
        Вартість: {selectedPrice[0] === 10 ? "..." : `${selectedPrice[0]}$`} -{" "}
        {selectedPrice[1] === 2000000 ? "..." : `${selectedPrice[1]}$`}
        <Slider
          getAriaLabel={() => "Temperature range"}
          min={minMax[0]}
          step={2}
          max={minMax[1]}
          value={selectedPrice}
          onChange={priceHandle}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-multiple-checkbox-label">
            {t("filter.availability")}
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={selectedStatus}
            onChange={handleChangeStatus}
            input={<OutlinedInput label={t("filter.availability")} />}
            renderValue={(selected) =>
              selectedStatus.includes(true) &&
              selectedStatus.includes(false) ? (
                <>{t("filter.all")}</>
              ) : !selectedStatus.includes("Всі") ? (
                selected.map((el) => (
                  <>{`${
                    el == false
                      ? `${t("mainscreen.catalog.card.status2")}`
                      : `${t("mainscreen.catalog.card.status1")}`
                  }   `}</>
                ))
              ) : (
                <>{t("filter.all")}</>
              )
            }
          >
            <MenuItem
              onClick={() => statusHandle(["Всі"])}
              style={{ justifyContent: "center" }}
            >
              {t("filter.all")}
            </MenuItem>
            {selectFiltresStatus.map((el) => (
              <MenuItem value={el.availability}>
                <Checkbox
                  checked={selectedStatus.indexOf(el.availability) > -1}
                />
                <ListItemText
                  primary={
                    el.availability == false
                      ? `${t("mainscreen.catalog.card.status2")}`
                      : `${t("mainscreen.catalog.card.status1")}`
                  }
                />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <ResetButton onClick={resetSelected}>{t("filter.reset")}</ResetButton>
      </FilterWrapper>
    </Wrapper>
  );
};
export default Filter;
