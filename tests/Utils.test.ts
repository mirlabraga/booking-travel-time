test('checking the number of zero after the dot in a decimal number', () => {
});

test('checking the number of zero after the dot in a decimal number', () => {
    const utils = new Utils();
    expect(utils.IsNumber(0.0)).toBe(true);
    expect(utils.IsNumber(0.00)).toBe(false);
    expect(utils.IsNumber(0.000)).toBe(false);
    expect(utils.IsNumber(0.0000)).toBe(false);
    expect(utils.IsNumber(0.00000)).toBe(false);
    expect(utils.IsNumber(0.000000)).toBe(false);
    expect(utils.IsNumber(0.0000000)).toBe(false);
    expect(utils.IsNumber(0.00000000)).toBe(false);
    expect(utils.IsNumber(0.000000000)).toBe(false);
    expect(utils.IsNumber(0.0000000000)).toBe(false);
    expect(utils.IsNumber(0.00000000000)).toBe(false);
    expect(utils.IsNumber(0.000000000000)).toBe(false);
    expect(utils.IsNumber(0.0000000000000)).toBe(false);
    expect(utils.IsNumber(0.00000000000000)).toBe(false);
    expect(utils.IsNumber(0.000000000000000)).toBe(false);
    expect(utils.IsNumber(0.0000000000000000)).toBe(false);
    expect(utils.IsNumber(0.00000000000000000)).toBe(false);
    expect(utils.IsNumber(0.000000000000000000)).toBe(false);
    expect(utils.IsNumber(0.0000000000000000000)).toBe(false);
    expect(utils.IsNumber(0.00000000000000000000)).toBe(false);
    expect(utils.IsNumber(0.000000000000000000000)).toBe(false);
    expect(utils.IsNumber(0.0000000000000000000000)).toBe(false);
    expect(utils.IsNumber(0.00000000000000000000000)).toBe(false);
    expect(utils.IsNumber(0.000000000000000000000000)).toBe(false);
    expect(utils.IsNumber(0.0000000000000000000000000)).toBe(false);
    expect(utils.IsNumber(0.00000000000000000000000000)).toBe(false);
    expect(utils.IsNumber(0.000000000000000000000000000)).toBe(false);
    expect(utils.IsNumber(0.0000000000000000000000000000)).toBe(false);
    expect(utils.IsNumber(0.00000000000000000000000000000)).toBe(false);
})