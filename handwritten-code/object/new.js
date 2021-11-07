import { isFunc, isUndefined } from "../util/util";

export default function newOP(ctr, ...arg) {
    if (!isFunc(ctr)) throw new Error("The constructor must be a function");

    const newObj = Object.create(ctr.prototype); // 新创建一个空对象，对象的原型是构造函数的prototype 对象
    const result = ctr.apply(newObj, arg); // 将this 绑定指定为新创建的空对象，并执行

    return isUndefined(result) ? newObj : result; // 构造函数有返回值直接返回
}
