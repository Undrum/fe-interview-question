import { expect, test } from "@jest/globals";
import createProto from "./create";

class Base {
    constructor(name) {
        this.name = name;
    }

    say() {
        console.log(this.x);
    }
}

const base = new Base("x");
const b = createProto(base);
const tb = Object.getPrototypeOf(b); // 获取b的原型对象

test("Create input base to true", () => {
    expect(tb === base).toBe(true);
});
