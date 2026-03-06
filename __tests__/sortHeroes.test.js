import { sortHeroesByHealth } from '../src/sortHeroes';

describe('sortHeroesByHealth', () => {
  test.each([
    [
      'should sort heroes by health in descending order',
      [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
      ],
      [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
      ]
    ],
    [
      'should handle negative health values',
      [
        { name: 'зомби', health: -20 },
        { name: 'призрак', health: -5 },
        { name: 'вампир', health: 30 },
      ],
      [
        { name: 'вампир', health: 30 },
        { name: 'призрак', health: -5 },
        { name: 'зомби', health: -20 },
      ]
    ],
    [
      'should handle heroes with same health',
      [
        { name: 'герой1', health: 50 },
        { name: 'герой2', health: 50 },
      ],
      [
        { name: 'герой1', health: 50 },
        { name: 'герой2', health: 50 },
      ]
    ]
  ])('data-driven: %s', (testName, input, expected) => {
    const result = sortHeroesByHealth(input);
    expect(result).not.toBe(input);
    expect(result).toEqual(expected);
  });

  test('should handle empty array', () => {
    expect(sortHeroesByHealth([])).toEqual([]);
  });

  test('should handle array with one hero', () => {
    const hero = { name: 'воин', health: 50 };
    expect(sortHeroesByHealth([hero])).toEqual([hero]);
  });

  test('should not mutate original array', () => {
    const original = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ];
    const sorted = sortHeroesByHealth(original);

    expect(sorted).not.toBe(original);
    expect(original).toEqual([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ]); 
  });
});
