import { expect, test } from "@jest/globals";
import instanceofOP from "./instanceof";

class A {
    constructor() {}
}

class B extends A {
    constructor() {
        super();
    }
}

const a = new A();
const b = new B();

test("instanceof", () => {
    expect(instanceofOP(a, A)).toBe(true);
});

test("instanceof", () => {
    expect(instanceofOP(a, B)).toBe(false);
});

test("instanceof", () => {
    expect(instanceofOP(b, A)).toBe(true);
});

test("instanceof", () => {
    expect(() => {
        instanceofOP(a, null);
    }).toThrow();
});

test("instanceof", () => {
    expect(() => {
        instanceofOP(null, Object);
    }).toThrow();
});
