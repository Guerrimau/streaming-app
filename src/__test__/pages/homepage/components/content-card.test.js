import { render, screen } from "@testing-library/react";
import { ContentCard } from "../../../../pages/homepage/components/content-card";

const mockData = {
    title: "Movie Title",
    releaseYear: "2099",
    programType: "Movie",
    images: {
        "Poster Art": { url: "" }
    }
}

test("Should render given conent", () => {
    render(<ContentCard data={mockData} />);
    const title = screen.getByText(mockData.title);
    expect(title).toBeInTheDocument();
    const contentDetails = screen.getByText(`${mockData.releaseYear} - ${mockData.programType}`);
    expect(contentDetails).toBeInTheDocument();
});

