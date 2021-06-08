const copy = (origin) => {
    const ret = {};
    let val;
    for (const key in origin) {
        if (origin.hasOwnProperty(key)) {
            val = origin[key];

            if (val instanceof Array) {
                for (let i = 0; i < val.length; i += 1) {
                    ret[key] = copy(val[i]);
                }
            } else if (typeof val === 'object') {
                ret[key] = copy(val);
            } else {
                ret[key] = val;
            }
        }
    }
    return ret;
}