export const objToString = (obj) => {
    let toString = "";
    for (const k of Object.keys(obj)) {
        if (typeof obj[k] == "string" || typeof obj[k] == "number") {
            toString += ", " + obj[k];
        } else {
            toString += ", " + objToString(obj[k]);
        }
    }
    return toString.replace(", ", "").replaceAll("\n", " ");
};