import { expect, test } from "@jest/globals";
import createProto from "./create";

test("Create", () => {
    class Base {
        constructor(name) {
            this.name = name;
        }

        say() {
            console.log(this.x);
        }
    }

    const base = new Base("x");

    expect(Object.getPrototypeOf(createProto(base))).toEqual(base);
});

test("Create", () => {
    expect(() => {
        createProto(undefined);
    }).toThrow();
});
