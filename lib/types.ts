export interface Meal {
  idMeal: string
  strMeal: string
  strMealThumb: string
  strCategory?: string
  strCuisine?: string
  strInstructions?: string
  strIngredient1?: string
  strMeasure1?: string
  [key: string]: any
}

export interface MealDetails extends Meal {
  strArea?: string
  strTags?: string
  strYoutube?: string
}
