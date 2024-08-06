import { getRandomIndexes } from './utils';

test('getRandomIndexes', () => {
  const actual = [
    {
      numberOfIndexes: 5,
      maxIndexNumber: 99
    },
    {
      numberOfIndexes: 20,
      maxIndexNumber: 150
    },
    {
      numberOfIndexes: 50,
      maxIndexNumber: 500
    }
  ];

  actual.forEach(({ maxIndexNumber, numberOfIndexes }) => {
    const results = getRandomIndexes(numberOfIndexes, maxIndexNumber);
    expect(results).toHaveLength(numberOfIndexes);
    results.forEach((result) => {
      expect(result).toBeLessThanOrEqual(maxIndexNumber);
      expect(result).toBeGreaterThanOrEqual(0);
    });
  });
});
