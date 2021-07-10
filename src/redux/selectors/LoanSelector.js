export const personalLoanTypes = (types) => {
    return types.filter(l => l.type == 'personal');
}

export const educationalLoanTypes = (types) => {
    return types.filter(l => l.type == 'educational');
}

export const getLoanTypeById = (id, types) => {
    if (!id) return {};
    return types.find(l => l.id == id);
}
