import { expect, test } from "@jest/globals";
import newOP from "./new";

test("newOP", () => {
    function Person(name) {
        this.name = name;
    }

    const u = newOP(Person, "x");
    expect(Object.getPrototypeOf(u)).toEqual(Person.prototype);
});

test("newOP", () => {
    expect(() => {
        newOP(null, "x");
    }).toThrow();
});

test("newOP", () => {
    function Person() {
        return "x";
    }

    expect(newOP(Person)).toEqual("x");
});
