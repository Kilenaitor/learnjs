const math = require('./math');

/********** ADD ************/
test('1 + 2 = 3', () => {
    expect(math.add(1, 2)).toBe(3);
});

test('1 + 0 = 1', () => {
    expect(math.add(1, 0)).toBe(1);
});

test('0 + 0 = 0', () => {
    expect(math.add(0, 0)).toBe(0);
});

test('1 + (-1) = 0', () => {
    expect(math.add(1, -1)).toBe(0);
});

/********* SUBTRACT ***********/
test('5 - 2 = 3', () => {
    expect(math.subtract(5, 2)).toBe(3);
});

test('10 - 0 = 10', () => {
    expect(math.subtract(10, 0)).toBe(10);
});

test('2 - (-3) = 5', () => {
    expect(math.subtract(2, -3)).toBe(5);
});

/********** MULTIPLY **************/
test('2 * 3 = 6', () => {
    expect(math.multiply(2, 3)).toBe(6);
});

test('2 * 1 = 2', () => {
    expect(math.multiply(2, 1)).toBe(2);
});

test('2 * 0 = 0', () => {
    expect(math.multiply(2, 0)).toBe(0);
});

test('10 * -1 = -10', () => {
    expect(math.multiply(10, -1)).toBe(-10);
});

/************** DIVIDE ****************/
test('10 / 5 = 2', () => {
    expect(math.divide(10, 5)).toBe(2);
});

test('1 / 2 = 0.5', () => {
    expect(math.divide(1, 2)).toBe(0.5);
});

test('1 / 1 = 1', () => {
    expect(math.divide(1, 1)).toBe(1);
});


/******************* INVERT **************/
test('1/2 = 0.5', () => {
    expect(math.invert(2)).toBe(0.5);
});

test('1/0.5 => 2', () => {
    expect(math.invert(0.5)).toBe(2);
});


test('1/1 => 1', () => {
    expect(math.invert(1)).toBe(1);
});


/************* REMAINDER ****************/
test('5 % 2 = 1', () => {
    expect(math.remainder(5, 2)).toBe(1);
});

test('5 % 1 = 0', () => {
    expect(math.remainder(5, 1)).toBe(0);
});

test('10 % 5 = 0', () => {
    expect(math.remainder(10, 5)).toBe(0);
});

test('1 % 12 = 1', () => {
    expect(math.remainder(1, 12)).toBe(1);
});

test('5 % 7 = 5', () => {
    expect(math.remainder(5, 7)).toBe(5);
});
