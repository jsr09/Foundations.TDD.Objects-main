/* Write your code here! */


// `getCohort({cohort:number, name: string})` takes an object as a parameter and returns the cohort of that object.
//want the value of cohort

function getCohort(cohort) {
  //  if('name' in cohort){
  //   return `${cohort.name}`;
  //  } <------- this will give us value thats assigned to the key name
  for(let number in cohort){
    return cohort[number];
   }
   }


/**
 * The code below exports your functions so they can be tested.
 * Notice that the names are currently commented out.
 * Uncomment the functions as you write them.
 */
module.exports = {
  getCohort,
  increment,
  // findHerbivores,
  // findCarnivores,
  // merge,
  // checkout,
  // analyzeFrequencies,
  // compareObjects,
};
