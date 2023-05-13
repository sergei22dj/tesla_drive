export const PriceRange = (items) => {
  let itemList = items.map((el) => el.priceUsd);
  let unique = itemList.flat().filter((v, i, a) => a.indexOf(v) === i);
  return [Math.min.apply(null, unique), Math.max.apply(null, unique)];
};
