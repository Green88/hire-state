export const serializeCompany = (company) => {
    const { _id, size_max, size_min, known_members, ...rest} = company;
    const companySize = [Number(company.size_min), Number(company.size_max)];
    const knownMembers = company.known_members.split(',').map(i => i.trim());
    return {
        ...rest,
        size: companySize,
        known_members: knownMembers,
    };
};

export const deserializeCompany = (company) => {
    const { size = [], known_members = [], ...rest } = company;
    return {
        ...rest,
        size_min: size[0] || 0,
        size_max: size[1] || 0,
        known_members: known_members.join(', '),
    };
};