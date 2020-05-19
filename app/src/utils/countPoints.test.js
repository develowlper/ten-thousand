import countPoints from './countPoints';

it('should count 50 and 100', () => {
  expect(countPoints(1)).toBe(100);
  expect(countPoints(5)).toBe(50);
});

it('should 2 counts', () => {
  expect(countPoints(1, 1)).toBe(200);
  expect(countPoints(1, 5)).toBe(150);
  expect(countPoints(5, 1)).toBe(150);
  expect(countPoints(5, 5)).toBe(100);
});

it('should 3 counts', () => {
  expect(countPoints(1, 1, 1)).toBe(1000);
  expect(countPoints(1, 1, 5)).toBe(250);
  expect(countPoints(1, 5, 5)).toBe(200);
  expect(countPoints(2, 2, 2)).toBe(200);
  expect(countPoints(3, 3, 3)).toBe(300);
  expect(countPoints(4, 4, 4)).toBe(400);
  expect(countPoints(5, 5, 5)).toBe(500);
  expect(countPoints(6, 6, 6)).toBe(600);
});

it('should 4 counts', () => {
  expect(countPoints(1, 1, 1, 1)).toBe(2000);
  expect(countPoints(2, 2, 2, 2)).toBe(400);
  expect(countPoints(3, 3, 3, 3)).toBe(600);
  expect(countPoints(4, 4, 4, 4)).toBe(800);
  expect(countPoints(5, 5, 5, 5)).toBe(1000);
  expect(countPoints(6, 6, 6, 6)).toBe(1200);
  expect(countPoints(1, 1, 1, 5)).toBe(1050);
  expect(countPoints(1, 1, 5, 5)).toBe(300);
  expect(countPoints(2, 2, 2, 5)).toBe(250);
  expect(countPoints(2, 2, 2, 1)).toBe(300);
  expect(countPoints(3, 3, 3, 1)).toBe(400);
  expect(countPoints(3, 3, 3, 5)).toBe(350);
  expect(countPoints(4, 4, 4, 1)).toBe(500);
  expect(countPoints(4, 4, 4, 5)).toBe(450);
  expect(countPoints(5, 5, 5, 1)).toBe(600);
  expect(countPoints(6, 6, 6, 1)).toBe(700);
  expect(countPoints(6, 6, 6, 5)).toBe(650);
});
