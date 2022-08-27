type Recipe_Information =
{
  id: number,
  title: string,
  image: string,
  imageType: string,
  serving: number,
  readyInMinutes: number,
  license: string,
  sourceName: string,
  sourceUrl: string,
  sponnacularSourceUrl: string,
  aggregateLikes: number,
  spoonacularScore: number,
  pricePerServing: number
  analyzedInstructions: instructions[],
  


}



type Simular = {
    id: number,
    imageType: string,
    readyInMinutes: number,
    servings: number,
    sourceUrl: string,
    title: string,

}

type measurment = {
    unit: string;
    value: number;

}
type instructions = {
    number: number,
    steps: step[],

}


type step = {
    number: number,
    step: string,
    ingredients: ingredient[],
    equipment: equipment[],

}

type ingredient = {
    amount?: {
        metric: measurment
        us: measurment
    },
    image: string,
    name: string,
    id?: number
}


type equipment = {
    id: number,
    image: string,
    name: string,

}
type requiredItem = {
    name: string,
    image: string
}

