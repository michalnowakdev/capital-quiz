import { CountriesWithCapitals, Puzzle } from '../interfaces/interfaces';

// maxIndexNumber must be grater than numberOfIndexes
export const getRandomIndexes = (
  numberOfIndexes: number,
  maxIndexNumber: number
): number[] => {
  const randomIndexes: number[] = [];

  while (randomIndexes.length < numberOfIndexes) {
    const randomIndex = Math.floor(Math.random() * maxIndexNumber);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }
  return randomIndexes;
};

export const getRandomPuzzles = (
  countriesWithCapitals: CountriesWithCapitals[],
  maxNumberOfItems: number
): Puzzle[] => {
  const limitedCountriesWithCapitals = getRandomIndexes(
    maxNumberOfItems,
    countriesWithCapitals.length - 1
  ).map((randomIndex) => countriesWithCapitals[randomIndex]);

  const puzzles: Puzzle[] = [];
  limitedCountriesWithCapitals.forEach(({ capital, name }) => {
    const id = `${name.common}-${capital.join('-')}`;
    puzzles.push({
      name: name.common,
      id,
      type: 'country'
    });
    puzzles.push({
      name: capital.join(', '),
      id,
      type: 'capital'
    });
  });

  const randomizedPuzzles = getRandomIndexes(
    maxNumberOfItems * 2,
    maxNumberOfItems * 2
  ).map((randomPuzzleIndex) => puzzles[randomPuzzleIndex]);

  console.log(randomizedPuzzles);

  return randomizedPuzzles;
};
