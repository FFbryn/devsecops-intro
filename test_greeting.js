const greeting = require('./greeting');

test('greeting should return correct message', () => {
    expect(greeting("Polibest")).toBe("Hello Polibest, welcome to DevSecOps!");
});

