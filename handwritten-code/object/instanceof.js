import { isNull } from "../util/util";

export default function instanceofOP(lo, ro) {
    if (isNull(lo))
        throw new Error("Right-hand side of 'instanceof' is not callable");

    if (isNull(ro))
        throw new Error("Right-hand side of 'instanceof' is not an object");

    const roProto = Object.getPrototypeOf(ro.prototype);
    let loProto = Object.getPrototypeOf(lo);

    while (loProto) {
        if (loProto === roProto) return true;

        loProto = Object.getPrototypeOf(loProto);
    }

    return false;
}