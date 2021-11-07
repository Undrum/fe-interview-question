import { isObjectOrNull, isUndefined } from "../util/util";

export default function createProto(proto) {
    if (!isObjectOrNull(proto) || isUndefined(proto))
        throw new Error("Object prototype may only be an Object or null");

    function F() {}

    F.prototype = proto;

    return new F();
}
