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
import { selectItemMark } from "./data";
import { FilterWrapper, ResetButton, Wrapper } from "./views";

function valuetext(value) {
  return `${value}°C`;
}

const Filter = ({
  resetSelected,
  setSelectedPrice,
  selectedPrice,
  selectedStatus,
  SelectedMark,
  setSelectedMark,
  SelectedModel,
  setSelectedModel,
  setSelectedStatus,
  setSelectedCondition,
  SelectedCondition,
  itemsData,
  renderItems,
}) => {
  let items = itemsData;
  const priceHandle = (e) => {
    setSelectedPrice(e.target.value);
  };

  const statusHandle = (e) => {
    setSelectedStatus(e);
  };
  const markHandle = (e) => {
    setSelectedMark(e);
  };
  const modelHandle = (e) => {
    setSelectedModel(e);
  };

  const handleChangeMark = (event, setHandle) => {
    const {
      target: { value },
    } = event;
    const index = value.indexOf("Всі");
    if (index > -1) {
      // only splice array when item is found
      value.splice(index, 1); // 2nd parameter means remove one item only
    }
    if (!value.length) {
      value.push("Всі");
    }

    setSelectedMark(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeModel = (event, setHandle) => {
    const {
      target: { value },
    } = event;
    const index = value.indexOf("Всі");
    if (index > -1) {
      // only splice array when item is found
      value.splice(index, 1); // 2nd parameter means remove one item only
    }
    if (!value.length) {
      value.push("Всі");
    }

    setSelectedModel(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
  const [selectFiltresStatus, setSelectFiltresStatus] = useState([]);
  const [selectFiltresModel, setSelectFiltresModel] = useState([]);

  const applyFiltersStatus = () => {
    let updatedList = items;
    // mark Filter
    if (SelectedMark.length && !SelectedMark.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        item.mark.includes(SelectedMark)
      );
    }

    // model Filter
    if (SelectedModel.length && !SelectedModel.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        SelectedModel.every((element) => {
          return item.model.includes(element);
        })
      );
    }

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

  const applyFiltersModel = () => {
    let updatedList = items;
    // mark Filter
    if (SelectedMark.length && !SelectedMark.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        item.mark.includes(SelectedMark)
      );
    }
    // price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.priceUsd >= minPrice && item.priceUsd <= maxPrice
    );

    let itemList = updatedList.map((el) => el.model);
    let unique = itemList.flat().filter((v, i, a) => a.indexOf(v) === i);
    setSelectFiltresModel(unique);
  };

  useEffect(() => {
    applyFiltersStatus();
    applyFiltersModel();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderItems, items]);

  const [minMax, setMinMax] = useState([0, 2]);

  useEffect(() => {
    setMinMax(PriceRange(items));
  }, [items]);

  const { t } = useTranslation();
  return (
    <Wrapper>
      <FilterWrapper>
        {t("filter.cost")}:{" "}
        {selectedPrice[0] === 10 ? "..." : `${selectedPrice[0]}$`} -{" "}
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
          <InputLabel id="demo-multiple-checkbox-label">Марка</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={SelectedMark}
            onChange={handleChangeMark}
            input={<OutlinedInput label="Марка" />}
            renderValue={(selected) =>
              SelectedMark.length && !SelectedMark.includes("Всі") ? (
                selected.join(", ")
              ) : (
                <>{t("filter.all")}</>
              )
            }
          >
            <MenuItem
              style={{ justifyContent: "center" }}
              onClick={() => markHandle(["Всі"])}
            >
              {t("filter.all")}
            </MenuItem>
            {selectItemMark.map((el) => (
              <MenuItem value={el.value}>
                <Checkbox checked={SelectedMark.indexOf(el.value) > -1} />
                <ListItemText primary={el.value} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-multiple-checkbox-label">Модель</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={SelectedModel}
            onChange={handleChangeModel}
            input={<OutlinedInput label="Модель" />}
            renderValue={(selected) =>
              SelectedModel.length && !SelectedModel.includes("Всі") ? (
                selected.join(", ")
              ) : (
                <>{t("filter.all")}</>
              )
            }
          >
            <MenuItem
              style={{ justifyContent: "center" }}
              onClick={() => modelHandle(["Всі"])}
            >
              {t("filter.all")}
            </MenuItem>
            {selectFiltresModel.map((el) => (
              <MenuItem value={el}>
                <Checkbox checked={SelectedModel.indexOf(el) > -1} />
                <ListItemText primary={el} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
              style={{ justifyContent: "center" }}
              onClick={() => statusHandle(["Всі"])}
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
