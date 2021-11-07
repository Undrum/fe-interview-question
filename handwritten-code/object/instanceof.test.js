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
    expect(instanceofOP(a, B)).toBe(true);
})

test("instanceof", () => {
    expect(instanceofOP(b, A)).toBe(true);
})

test("instanceof", () => {
    expect(() => {
        instanceofOP(a, null);
    }).toThrow("Right-hand side of 'instanceof' is not an object");
});

test("instanceof", () => {
    expect(() => {
        instanceofOP(null, Object);
    }).toThrow("Right-hand side of 'instanceof' is not callable");
});
