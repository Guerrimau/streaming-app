import { applyFiltersToContent } from "../../../../pages/homepage/utilities/apply-filters-to-content";

test("Should return only the movie", () => {
    const activeFilters = {
        sortBy: "None",
        type: "Movie"
    }
    const [firstContent] = applyFiltersToContent(mockContent, activeFilters);
    expect(firstContent).toEqual(mockContent[0]);
});

test("Should return the oldest content first", () => {
    const activeFilters = {
        sortBy: "Year",
        type: "All"
    }
    const [firstContent] = applyFiltersToContent(mockContent, activeFilters);
    expect(firstContent).toEqual(mockContent[1]);
});

const mockContent = [
    {
        "title": "The Hunger Games: Mockingjay - Part 2",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "movie",
        "images": {
            "Poster Art": {
                "url": "https://streamcoimg-a.akamaihd.net/000/109/8333/1098333-PosterArt-c72002fd42ec6f2cfc53004a59b432be.jpg",
                "width": 1000,
                "height": 1500
            }
        },
        "releaseYear": 2015
    },
    {
        "title": "Frasier",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "programType": "series",
        "images": {
            "Poster Art": {
                "url": "https://streamcoimg-a.akamaihd.net/000/120/27/12027-PosterArt-3f8c0625d76d30c9a583c647e4c29c67.jpg",
                "width": 1000,
                "height": 1500
            }
        },
        "releaseYear": 1994
    },
];