export const getIngredientImageUri = (
  size: "small" | "medium" | "large",
  ingredient: string
) => {
  const small = "100x100";
  const medium = "250x250";
  const large = "500x500";

  let selectedSize = small;

  switch (size) {
    case "small":
      selectedSize = small;

    case "medium":
      selectedSize = medium;
      break;
    case "large":
      selectedSize = large;
      break;
  }

  let value = ingredient;
  if (!ingredient) {
    value = "unkown.png";
  }
  return `https://spoonacular.com/cdn/ingredients_${selectedSize}/${value}`;
};

export const getEquipmentImageUri = (
  size: "small" | "medium" | "large",
  equipment: string
) => {
  const small = "100x100";
  const medium = "250x250";
  const large = "500x500";

  let selectedSize = small;

  switch (size) {
    case "small":
      selectedSize = small;

    case "medium":
      selectedSize = medium;
      break;
    case "large":
      selectedSize = large;
      break;
  }

  let value = equipment;
  if (!equipment) {
    value = "unkown.png";
  }
  return `https://spoonacular.com/cdn/equipment_${selectedSize}/${value}`;
};

export const getRecipeImageUri = (
  size: "small" | "medium" | "large",
  id: number,
  type: string
) => {
  let value = id;
  const small = "90x90";
  const medium = "240x150";
  const large = "556x370";
  let selectedSize = small;

  switch (size) {
    case "small":
      selectedSize = small;

    case "medium":
      selectedSize = medium;
      break;
    case "large":
      selectedSize = large;
      break;
  }
  if (!id) {
    value = 0;
  }
  return `https://spoonacular.com/recipeImages/${value}-${selectedSize}.${type}`;
};
