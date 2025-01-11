const calculateWeeks = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = end - start;
    const weeks = Math.ceil(diff / (1000 * 60 * 60 * 24 * 7));
    return weeks;
}

export const getValues = (startDate) => {
    const start = new Date(startDate);
    const end = new Date(start);
    end.setFullYear(start.getFullYear() + 95);
    return [calculateWeeks(start, end), calculateWeeks(start, new Date())];
}
export const calculateYear = (date, addYears) => {
    const newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() + addYears);
    return newDate.getFullYear();
}
export const loadArray = (values) => {
    const arr = [];
    for (let i = 0; i < values[0]; i++) {
        if (i < values[1]) {
            arr.push(1);
        } else {
            arr.push(0);
        }
    }
    return arr;
}


export default getValues;