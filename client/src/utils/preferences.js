export const serializePref = (pref) => {
    const { _id, size_max, size_min, ...rest} = pref;
    const companySize = [Number(pref.size_min), Number(pref.size_max)];
    return {
        ...rest,
        company_size: companySize,
    };
};

export const deserializePref = (pref) => {
    const { _id, company_size = [], ...rest } = pref;
    return {
        ...rest,
        size_min: company_size[0] || 0,
        size_max: company_size[1] || 0,
    };
};