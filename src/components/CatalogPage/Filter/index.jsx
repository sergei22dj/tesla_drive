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
import styled from "styled-components";
import i18n from "../../../i18n/i18n";
import { PriceRange } from "../../common/helpers/priceHandler";
import {
  selectItemBattery,
  selectItemMark,
  selectItemReserve,
  selectItemStatus,
} from "./data";
import { helpColor, helpColorName } from "./helper";
import { FilterWrapper, ResetButton, Wrapper } from "./views";

function valuetext(value) {
  return `${value}°C`;
}

const Filter = ({
  resetSelected,
  setSelectedPrice,
  selectedPrice,
  setSelectedMark,
  SelectedMark,
  setSelectedModel,
  SelectedModel,
  setSelectedBattery,
  SelectedBattery,
  setSelectedReserve,
  SelectedReserve,
  setSelectedYear,
  SelectedYear,
  setSelectedColor,
  SelectedColor,
  setSelectedStatus,
  selectedStatus,
  setSelectedCondition,
  SelectedCondition,
  itemsData,
  renderItems,
}) => {
  let items = itemsData;
  const priceHandle = (e) => {
    setSelectedPrice(e.target.value);
  };
  const markHandle = (e) => {
    setSelectedMark(e);
  };
  const modelHandle = (e) => {
    setSelectedModel(e);
  };

  const batteryHandle = (e) => {
    setSelectedBattery(e);
  };
  const reserveHandle = (e) => {
    setSelectedReserve(e);
  };

  const yearHandle = (e) => {
    setSelectedYear(e);
  };
  const conditionHandle = (e) => {
    setSelectedCondition(e);
  };
  const statusHandle = (e) => {
    setSelectedStatus(e.target.value);
  };
  const colorHandle = (e) => {
    setSelectedColor(e);
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
  const handleChangeYear = (event, setHandle) => {
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

    setSelectedYear(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeColor = (event, setHandle) => {
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

    setSelectedColor(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeReserve = (event, setHandle) => {
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

    setSelectedReserve(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeBattery = (event, setHandle) => {
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

    setSelectedBattery(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeCondition = (event, setHandle) => {
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

    setSelectedCondition(
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

  const [filterItemsYear, setFilterItemsYear] = useState([items]);
  const [filterItemsModel, setFilterItemsModel] = useState([items]);
  const [selectFiltresYear, setSelectFiltresYear] = useState([]);
  const [selectFiltresModel, setSelectFiltresModel] = useState([]);
  const [selectFiltresColor, setSelectFiltresColor] = useState([]);
  const [selectFiltresCondition, setSelectFiltresCondition] = useState([]);
  const [selectFiltresReserve, setSelectFiltresReserve] = useState([
    { label: "200-300 км", value: [200, 300] },
    { label: "300-450 км", value: [300, 450] },
    { label: "450-650 км", value: [450, 650] },
  ]);
  const [selectFiltresBattery, setSelectFiltresBattery] = useState([
    { label: "40-70 кВт/ч", value: [40, 70] },
    { label: "70-110 кВт/ч", value: [70, 110] },
    { label: "110-150 кВт/ч", value: [110, 150] },
  ]);
  const applyFiltersYear = () => {
    let updatedList = items;

    // mark Filter
    if (SelectedMark.length && !SelectedMark.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        SelectedMark.includes(item.mark)
      );
    }

    // model Filter
    if (SelectedModel.length && !SelectedModel.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        SelectedModel.includes(item.model)
      );
    }
    // condition Filter
    if (
      SelectedCondition.includes(true) &&
      SelectedCondition.length &&
      SelectedCondition !== ["Всі"]
    ) {
      updatedList = updatedList.filter((item) =>
        SelectedCondition.includes(item.condition)
      );
    }
    // condition Filter
    if (
      SelectedCondition.includes(false) &&
      SelectedCondition.length &&
      SelectedCondition !== ["Всі"]
    ) {
      updatedList = updatedList.filter((item) =>
        SelectedCondition.includes(item.condition)
      );
    }
    // status Filter
    if (selectedStatus && selectedStatus !== "all") {
      updatedList = updatedList.filter((item) => item.status == selectedStatus);
    }
    // color Filter
    if (SelectedColor.length && !SelectedColor.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        SelectedColor.includes(item.color)
      );
    }
    // price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.priceUsd >= minPrice && item.priceUsd <= maxPrice
    );

    // battery Filter
    if (
      SelectedBattery.length &&
      !SelectedBattery.includes(NaN) &&
      !SelectedBattery.includes("Всі")
    ) {
      const minBattery = Math.min(...SelectedBattery.flat());
      const maxBattery = Math.max(...SelectedBattery.flat());

      updatedList = updatedList.filter(
        (item) =>
          item.batteryCapacity >= minBattery &&
          item.batteryCapacity <= maxBattery
      );
    }

    // reserve Filter
    if (
      SelectedReserve.length &&
      !SelectedReserve.includes(NaN) &&
      !SelectedReserve.includes("Всі")
    ) {
      const minReserve = Math.min(...SelectedReserve.flat());
      const maxReserve = Math.max(...SelectedReserve.flat());

      updatedList = updatedList.filter(
        (item) =>
          item.powerReserve >= minReserve && item.powerReserve <= maxReserve
      );
    }

    let itemList = updatedList
      .sort((a, b) => (a.year < b.year ? -1 : 1))
      .reduce((o, i) => {
        if (!o.find((v) => v.year === i.year)) {
          o.push(i);
        }
        return o;
      }, []);

    setSelectFiltresYear(itemList);

    setFilterItemsYear(updatedList);
  };
  const applyFiltersModel = () => {
    let updatedList = items;
    // mark Filter
    if (SelectedMark.length && !SelectedMark.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        SelectedMark.includes(item.mark)
      );
    }
    // year Filter
    if (SelectedYear.length && !SelectedYear.includes("Всі")) {
      // updatedList = updatedList.filter((item) => item.year == selectedYear);
      updatedList = updatedList.filter((item) =>
        SelectedYear.includes(item.year)
      );
    }
    // condition Filter
    if (
      SelectedCondition.includes(true) &&
      SelectedCondition.length &&
      SelectedCondition !== ["Всі"]
    ) {
      updatedList = updatedList.filter((item) =>
        SelectedCondition.includes(item.condition)
      );
    }
    // condition Filter
    if (
      SelectedCondition.includes(false) &&
      SelectedCondition.length &&
      SelectedCondition !== ["Всі"]
    ) {
      updatedList = updatedList.filter((item) =>
        SelectedCondition.includes(item.condition)
      );
    }
    // status Filter
    if (selectedStatus && selectedStatus !== "all") {
      updatedList = updatedList.filter((item) => item.status == selectedStatus);
    }
    // color Filter
    if (SelectedColor.length && !SelectedColor.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        SelectedColor.includes(item.color)
      );
    }
    // price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.priceUsd >= minPrice && item.priceUsd <= maxPrice
    );
    // battery Filter
    if (
      SelectedBattery.length &&
      !SelectedBattery.includes(NaN) &&
      !SelectedBattery.includes("Всі")
    ) {
      const minBattery = Math.min(...SelectedBattery.flat());
      const maxBattery = Math.max(...SelectedBattery.flat());

      updatedList = updatedList.filter(
        (item) =>
          item.batteryCapacity >= minBattery &&
          item.batteryCapacity <= maxBattery
      );
    }

    // reserve Filter
    if (
      SelectedReserve.length &&
      !SelectedReserve.includes(NaN) &&
      !SelectedReserve.includes("Всі")
    ) {
      const minReserve = Math.min(...SelectedReserve.flat());
      const maxReserve = Math.max(...SelectedReserve.flat());

      updatedList = updatedList.filter(
        (item) =>
          item.powerReserve >= minReserve && item.powerReserve <= maxReserve
      );
    }
    let itemList = updatedList
      .sort((a, b) => (a.model < b.model ? -1 : 1))
      .reduce((o, i) => {
        if (!o.find((v) => v.model === i.model)) {
          o.push(i);
        }
        return o;
      }, []);
    setSelectFiltresModel(itemList);
    setFilterItemsModel(updatedList);
  };
  const applyFiltersColor = () => {
    let updatedList = items;
    // mark Filter
    if (SelectedMark.length && !SelectedMark.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        SelectedMark.includes(item.mark)
      );
    }
    // model Filter
    if (SelectedModel.length && !SelectedModel.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        SelectedModel.includes(item.model)
      );
    }
    // year Filter
    if (SelectedYear.length && !SelectedYear.includes("Всі")) {
      // updatedList = updatedList.filter((item) => item.year == selectedYear);
      updatedList = updatedList.filter((item) =>
        SelectedYear.includes(item.year)
      );
    }
    // condition Filter
    if (
      SelectedCondition.includes(true) &&
      SelectedCondition.length &&
      SelectedCondition !== ["Всі"]
    ) {
      updatedList = updatedList.filter((item) =>
        SelectedCondition.includes(item.condition)
      );
    }
    // condition Filter
    if (
      SelectedCondition.includes(false) &&
      SelectedCondition.length &&
      SelectedCondition !== ["Всі"]
    ) {
      updatedList = updatedList.filter((item) =>
        SelectedCondition.includes(item.condition)
      );
    }
    // status Filter
    if (selectedStatus && selectedStatus !== "all") {
      updatedList = updatedList.filter((item) => item.status == selectedStatus);
    }
    // price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.priceUsd >= minPrice && item.priceUsd <= maxPrice
    );
    // battery Filter
    if (
      SelectedBattery.length &&
      !SelectedBattery.includes(NaN) &&
      !SelectedBattery.includes("Всі")
    ) {
      const minBattery = Math.min(...SelectedBattery.flat());
      const maxBattery = Math.max(...SelectedBattery.flat());

      updatedList = updatedList.filter(
        (item) =>
          item.batteryCapacity >= minBattery &&
          item.batteryCapacity <= maxBattery
      );
    }

    // reserve Filter
    if (
      SelectedReserve.length &&
      !SelectedReserve.includes(NaN) &&
      !SelectedReserve.includes("Всі")
    ) {
      const minReserve = Math.min(...SelectedReserve.flat());
      const maxReserve = Math.max(...SelectedReserve.flat());

      updatedList = updatedList.filter(
        (item) =>
          item.powerReserve >= minReserve && item.powerReserve <= maxReserve
      );
    }
    let itemList = updatedList
      .sort((a, b) => (a.color < b.color ? -1 : 1))
      .reduce((o, i) => {
        if (!o.find((v) => v.color === i.color)) {
          o.push(i);
        }
        return o;
      }, []);
    setSelectFiltresColor(itemList);
    setFilterItemsModel(updatedList);
  };
  const applyFiltersReserve = () => {
    let updatedList = items;
    // mark Filter
    if (SelectedMark.length && !SelectedMark.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        SelectedMark.includes(item.mark)
      );
    }
    // model Filter
    if (SelectedModel.length && !SelectedModel.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        SelectedModel.includes(item.model)
      );
    }
    // year Filter
    if (SelectedYear.length && !SelectedYear.includes("Всі")) {
      // updatedList = updatedList.filter((item) => item.year == selectedYear);
      updatedList = updatedList.filter((item) =>
        SelectedYear.includes(item.year)
      );
    }
    // condition Filter
    if (
      SelectedCondition.includes(true) &&
      SelectedCondition.length &&
      SelectedCondition !== ["Всі"]
    ) {
      updatedList = updatedList.filter((item) =>
        SelectedCondition.includes(item.condition)
      );
    }
    // condition Filter
    if (
      SelectedCondition.includes(false) &&
      SelectedCondition.length &&
      SelectedCondition !== ["Всі"]
    ) {
      updatedList = updatedList.filter((item) =>
        SelectedCondition.includes(item.condition)
      );
    }
    // color Filter
    if (SelectedColor.length && !SelectedColor.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        SelectedColor.includes(item.color)
      );
    }
    // status Filter
    if (selectedStatus && selectedStatus !== "all") {
      updatedList = updatedList.filter((item) => item.status == selectedStatus);
    }
    // price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.priceUsd >= minPrice && item.priceUsd <= maxPrice
    );
    // battery Filter
    if (
      SelectedBattery.length &&
      !SelectedBattery.includes(NaN) &&
      !SelectedBattery.includes("Всі")
    ) {
      const minBattery = Math.min(...SelectedBattery.flat());
      const maxBattery = Math.max(...SelectedBattery.flat());

      updatedList = updatedList.filter(
        (item) =>
          item.batteryCapacity >= minBattery &&
          item.batteryCapacity <= maxBattery
      );
    }

    let filtervar = selectItemReserve;

    let variants = updatedList.map((el) => Number(el.powerReserve));

    if (Math.min(...variants) >= 200 && Math.max(...variants) <= 650) {
      filtervar = [
        selectItemReserve[0],
        selectItemReserve[1],
        selectItemReserve[2],
      ];
    }
    if (Math.min(...variants) >= 200 && Math.max(...variants) <= 450) {
      filtervar = [selectItemReserve[0], selectItemReserve[1]];
    }
    if (Math.min(...variants) >= 200 && Math.max(...variants) <= 300) {
      filtervar = [selectItemReserve[0]];
    }

    if (Math.min(...variants) >= 300 && Math.max(...variants) <= 650) {
      filtervar = [selectItemReserve[1], selectItemReserve[2]];
    }
    if (Math.min(...variants) >= 300 && Math.max(...variants) <= 450) {
      filtervar = [selectItemReserve[1]];
    }

    if (Math.min(...variants) >= 450 && Math.max(...variants) <= 650) {
      filtervar = [selectItemReserve[2]];
    }
    setSelectFiltresReserve(filtervar);
    setFilterItemsModel(filtervar);
  };
  const applyFiltersBattery = () => {
    let updatedList = items;
    // mark Filter
    if (SelectedMark.length && !SelectedMark.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        SelectedMark.includes(item.mark)
      );
    }
    // model Filter
    if (SelectedModel.length && !SelectedModel.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        SelectedModel.includes(item.model)
      );
    }
    // year Filter
    if (SelectedYear.length && !SelectedYear.includes("Всі")) {
      // updatedList = updatedList.filter((item) => item.year == selectedYear);
      updatedList = updatedList.filter((item) =>
        SelectedYear.includes(item.year)
      );
    }
    // condition Filter
    if (
      SelectedCondition.includes(true) &&
      SelectedCondition.length &&
      SelectedCondition !== ["Всі"]
    ) {
      updatedList = updatedList.filter((item) =>
        SelectedCondition.includes(item.condition)
      );
    }
    // condition Filter
    if (
      SelectedCondition.includes(false) &&
      SelectedCondition.length &&
      SelectedCondition !== ["Всі"]
    ) {
      updatedList = updatedList.filter((item) =>
        SelectedCondition.includes(item.condition)
      );
    }
    // color Filter
    if (SelectedColor.length && !SelectedColor.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        SelectedColor.includes(item.color)
      );
    }
    // status Filter
    if (selectedStatus && selectedStatus !== "all") {
      updatedList = updatedList.filter((item) => item.status == selectedStatus);
    }
    // price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.priceUsd >= minPrice && item.priceUsd <= maxPrice
    );
    // reserve Filter
    if (
      SelectedReserve.length &&
      !SelectedReserve.includes(NaN) &&
      !SelectedReserve.includes("Всі")
    ) {
      const minReserve = Math.min(...SelectedReserve.flat());
      const maxReserve = Math.max(...SelectedReserve.flat());

      updatedList = updatedList.filter(
        (item) =>
          item.powerReserve >= minReserve && item.powerReserve <= maxReserve
      );
    }

    let filtervar = selectItemBattery;

    let variants = updatedList.map((el) => Number(el.batteryCapacity));

    if (Math.min(...variants) >= 40 && Math.max(...variants) <= 150) {
      filtervar = [
        selectItemBattery[0],
        selectItemBattery[1],
        selectItemBattery[2],
      ];
    }
    if (Math.min(...variants) >= 40 && Math.max(...variants) <= 110) {
      filtervar = [selectItemBattery[0], selectItemBattery[1]];
    }
    if (Math.min(...variants) >= 40 && Math.max(...variants) <= 70) {
      filtervar = [selectItemBattery[0]];
    }

    if (Math.min(...variants) >= 70 && Math.max(...variants) <= 150) {
      filtervar = [selectItemBattery[1], selectItemBattery[2]];
    }
    if (Math.min(...variants) >= 70 && Math.max(...variants) <= 110) {
      filtervar = [selectItemBattery[1]];
    }

    if (Math.min(...variants) >= 110 && Math.max(...variants) <= 150) {
      filtervar = [selectItemBattery[2]];
    }
    setSelectFiltresBattery(filtervar);
    setFilterItemsModel(filtervar);
  };
  const applyFiltersCondition = () => {
    let updatedList = items;
    // mark Filter
    if (SelectedMark.length && !SelectedMark.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        SelectedMark.includes(item.mark)
      );
    }
    // model Filter
    if (SelectedModel.length && !SelectedModel.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        SelectedModel.includes(item.model)
      );
    }
    // year Filter
    if (SelectedYear.length && !SelectedYear.includes("Всі")) {
      // updatedList = updatedList.filter((item) => item.year == selectedYear);
      updatedList = updatedList.filter((item) =>
        SelectedYear.includes(item.year)
      );
    }

    // color Filter
    if (SelectedColor.length && !SelectedColor.includes("Всі")) {
      updatedList = updatedList.filter((item) =>
        SelectedColor.includes(item.color)
      );
    }
    // status Filter
    if (selectedStatus && selectedStatus !== "all") {
      updatedList = updatedList.filter((item) => item.status == selectedStatus);
    }
    // price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.priceUsd >= minPrice && item.priceUsd <= maxPrice
    );
    // battery Filter
    if (
      SelectedBattery.length &&
      !SelectedBattery.includes(NaN) &&
      !SelectedBattery.includes("Всі")
    ) {
      const minBattery = Math.min(...SelectedBattery.flat());
      const maxBattery = Math.max(...SelectedBattery.flat());

      updatedList = updatedList.filter(
        (item) =>
          item.batteryCapacity >= minBattery &&
          item.batteryCapacity <= maxBattery
      );
    }

    // reserve Filter
    if (
      SelectedReserve.length &&
      !SelectedReserve.includes(NaN) &&
      !SelectedReserve.includes("Всі")
    ) {
      const minReserve = Math.min(...SelectedReserve.flat());
      const maxReserve = Math.max(...SelectedReserve.flat());

      updatedList = updatedList.filter(
        (item) =>
          item.powerReserve >= minReserve && item.powerReserve <= maxReserve
      );
    }
    let itemList = updatedList
      .sort((a, b) => (a.condition < b.condition ? -1 : 1))
      .reduce((o, i) => {
        if (!o.find((v) => v.condition === i.condition)) {
          o.push(i);
        }
        return o;
      }, []);

    setSelectFiltresCondition(itemList);
  };

  useEffect(() => {
    applyFiltersYear();
    applyFiltersModel();
    applyFiltersColor();
    applyFiltersReserve();
    applyFiltersBattery();
    applyFiltersCondition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderItems]);

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
          step={100}
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
              <MenuItem value={el.model}>
                <Checkbox checked={SelectedModel.indexOf(el.model) > -1} />
                <ListItemText primary={el.model} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-multiple-checkbox-label">
            {t("filter.year")}
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={SelectedYear}
            onChange={handleChangeYear}
            input={<OutlinedInput label={t("filter.year")} />}
            renderValue={(selected) =>
              SelectedYear.length && !SelectedYear.includes("Всі") ? (
                selected.join(", ")
              ) : (
                <>{t("filter.all")}</>
              )
            }
          >
            <MenuItem
              style={{ justifyContent: "center" }}
              onClick={() => yearHandle(["Всі"])}
            >
              {t("filter.all")}
            </MenuItem>
            {selectFiltresYear.map((el) => (
              <MenuItem value={el.year}>
                <Checkbox checked={SelectedYear.indexOf(el.year) > -1} />
                <ListItemText primary={el.year} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-multiple-checkbox-label">Батарея</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={SelectedBattery}
            onChange={handleChangeBattery}
            input={<OutlinedInput label="Батарея" />}
            renderValue={(selected) =>
              SelectedBattery.length &&
              !SelectedBattery.includes("Всі") &&
              !SelectedBattery.includes(NaN) ? (
                <>
                  {Math.min(...selected.flat())} -{" "}
                  {Math.max(...selected.flat())} кВт/ч
                </>
              ) : (
                <>{t("filter.all")}</>
              )
            }
          >
            <MenuItem
              style={{ justifyContent: "center" }}
              onClick={() => batteryHandle(["Всі"])}
            >
              {t("filter.all")}
            </MenuItem>
            {selectFiltresBattery.map((el) => (
              <MenuItem value={el.value}>
                <Checkbox checked={SelectedBattery.indexOf(el.value) > -1} />
                <ListItemText
                  primary={`${el.value[0]} - ${el.value[1]} кВт/ч`}
                />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-multiple-checkbox-label">
            {t("filter.reserve")}
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={SelectedReserve}
            onChange={handleChangeReserve}
            input={<OutlinedInput label={t("filter.reserve")} />}
            renderValue={(selected) =>
              SelectedReserve.length &&
              !SelectedReserve.includes("Всі") &&
              !SelectedReserve.includes(NaN) ? (
                <>
                  {Math.min(...selected.flat())} -{" "}
                  {Math.max(...selected.flat())} км
                </>
              ) : (
                <>{t("filter.all")}</>
              )
            }
          >
            <MenuItem
              style={{ justifyContent: "center" }}
              onClick={() => reserveHandle(["Всі"])}
            >
              {t("filter.all")}
            </MenuItem>

            {selectFiltresReserve.map((el) => (
              <MenuItem value={el.value}>
                <Checkbox checked={isItemInArray(SelectedReserve, el.value)} />
                <ListItemText primary={`${el.value[0]} - ${el.value[1]} км`} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-multiple-checkbox-label">
            {t("filter.state")}
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={SelectedCondition}
            onChange={handleChangeCondition}
            input={<OutlinedInput label={t("filter.state")} />}
            renderValue={(selected) =>
              SelectedCondition.length &&
              !SelectedCondition.includes("Всі") &&
              SelectedCondition ? (
                selected.map((el) => (
                  <>{`${el == false ? "Б/У   " : "Нова Тесла   "}   `}</>
                ))
              ) : (
                <>{t("filter.all")}</>
              )
            }
          >
            <MenuItem
              style={{ justifyContent: "center" }}
              onClick={() => conditionHandle(["Всі"])}
            >
              {t("filter.all")}
            </MenuItem>
            {selectFiltresCondition.map((el) => (
              <MenuItem value={el.condition}>
                <Checkbox
                  checked={SelectedCondition.indexOf(el.condition) > -1}
                />
                <ListItemText
                  primary={
                    el.condition == false
                      ? t("mainscreen.catalog.card.bu")
                      : t("mainscreen.catalog.card.new")
                  }
                />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            {t("filter.availability")}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={t("filter.availability")}
            value={selectedStatus}
            onChange={statusHandle}
          >
            <MenuItem style={{ justifyContent: "center" }} value={"all"}>
              {t("filter.all")}
            </MenuItem>
            {selectItemStatus[i18n.language === "ua" ? 0 : 1].map((el) => (
              <MenuItem value={el.value}>{el.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-multiple-checkbox-label">
            {t("filter.color")}
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={SelectedColor}
            onChange={handleChangeColor}
            input={<OutlinedInput label={t("filter.color")} />}
            renderValue={(selected) =>
              SelectedColor.length &&
              !SelectedColor.includes("Всі") &&
              !SelectedColor.includes(NaN) ? (
                selected.map((el) => (
                  <>
                    <Color color={helpColor(el)} />
                  </>
                ))
              ) : (
                <>{t("filter.all")}</>
              )
            }
          >
            <MenuItem
              style={{ justifyContent: "center" }}
              onClick={() => colorHandle(["Всі"])}
            >
              {t("filter.all")}
            </MenuItem>
            {selectFiltresColor.map((el) => (
              <MenuItem value={el.color}>
                <Checkbox checked={SelectedColor.indexOf(el.color) > -1} />
                <ListItemText
                  primary={
                    i18n.language === "ua" ? el.color : helpColorName(el.color)
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
const Color = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid black;
  border-radius: 5px;
  margin-right: 10px;
  background-color: ${(props) => props.color};
`;
