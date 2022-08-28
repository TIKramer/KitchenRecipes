interface RecipeState {
    readonly id: number;
    readonly title: string;
    readonly missedIngredientCount:number;
    readonly image: string;
    readonly imageType: string;
    readonly serving?: number;
    readonly readyInMinutes: number;
    readonly license?: string;
    readonly sourceName: string;
    readonly sourceUrl?: string;
    readonly sponnacularSourceUrl?: string;
    readonly aggregateLikes: number;
    readonly spoonacularScore?: number;
    readonly pricePerServing?: number;
    readonly analyzedInstructions: instructions[],

  }

interface State{
    recipe: RecipeState;

}