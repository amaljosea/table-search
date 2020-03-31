function sort(order, key, searchData) {
    let compareFunction
    if (order === "ASC") {
        compareFunction = (a, b) => {
            if (a[key] < b[key]) {
                return -1;
            }
            if (a[key] > b[key]) {
                return 1;
            }
            return 0;
        }
    } else {
        compareFunction = (a, b) => {
            if (a[key] > b[key]) {
                return -1;
            }
            if (a[key] < b[key]) {
                return 1;
            }
            return 0;
        }
    }
    return searchData.sort(compareFunction)
}

export default sort