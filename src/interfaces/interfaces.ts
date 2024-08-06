export interface CountriesWithCapitals {
  name: {
    common: string;
  };
  capital: string[];
}

type PuzzleType = 'capital' | 'country';
export interface Puzzle {
  name: string;
  id: string;
  type: PuzzleType;
}
