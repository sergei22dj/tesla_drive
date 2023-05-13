export const helpColor = (color) => {
  let col;
  switch (color) {
    case "Червоний":
      col = "#fc0303";
      break;

    case "Сірий":
      col = "#969696";
      break;

    case "Синій":
      col = "#0e14c2";
      break;

    case "Чорний":
      col = "#000000";
      break;

    case "Білий":
      col = "#ffffff";
      break;

    case "Жовтий":
      col = "#fcba03";
      break;

    default:
  }
  return col;
};
export const helpColorName = (color) => {
  let col;
  switch (color) {
    case "Червоний":
      col = "Красный";
      break;

    case "Сірий":
      col = "Серый";
      break;

    case "Синій":
      col = "Синий";
      break;

    case "Чорний":
      col = "Черный";
      break;

    case "Білий":
      col = "Белый";
      break;

    case "Жовтий":
      col = "Желтый";
      break;

    default:
  }
  return col;
};
