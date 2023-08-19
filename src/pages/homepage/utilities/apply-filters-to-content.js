
const sortFunctions = {
    "Year": compareReleaseYear,
    "Name": compareTitle
}

export const applyFiltersToContent = (content = [], activeFilters) => {
    const { sortBy, type } = activeFilters;
    let typeFiltered = [];
    let sortFiltered = [];

    if (type === "All") {
        typeFiltered = [...content];
    } else {
        typeFiltered = content.filter(item => item.programType === type.toLowerCase());
    }

    if (sortBy === "None") {
        sortFiltered = [...typeFiltered];
    } else {
        sortFiltered = typeFiltered.sort(sortFunctions[sortBy]);
    }

    return sortFiltered;
}

function compareReleaseYear(a, b) {
    return a.releaseYear - b.releaseYear;
}

function compareTitle(a, b) {
    const tituloA = a.title.toUpperCase();
    const tituloB = b.title.toUpperCase();

    if (tituloA < tituloB) {
        return -1;
    }
    if (tituloA > tituloB) {
        return 1;
    }
    return 0;
}
