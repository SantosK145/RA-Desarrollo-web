function suma(a, b) {
    return a + b;
}

test('la suma debe funcionar', () => {
    expect(suma(2, 3)).toBe(5);
});
