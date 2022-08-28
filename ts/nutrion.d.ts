type nutritionalInformation
 = {
  calories: string,
  carbs: string,
  fat: string,
  protein: string,
  bad: nutrition[]
  good: nutrition[]
 }

 type caloricBreakDown = {
    percentCarbs: number,
    percentFat: number,
    percentProtein: number,
  }
 
type nutrition = {
    title: string,
  amount: string,
  indented: boolean,
  percentOfDailyNeeds: number
}