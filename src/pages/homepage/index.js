import React, { useEffect, useState } from "react";
import { SpotlightContent } from "./components/spotlight-content";
import { ContentOverview } from "./components/content-overview";
import { AppBar } from "../../components/app-bar";
import { api } from "../../services";

export const HomePage = () => {
    const [content, setContent] = useState([]);

    const getData = async () => {
        const response = await api.getHomePageContent();
        setContent(response.entries);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <main>
            <AppBar />
            {/* <SpotlightContent /> */}
            <ContentOverview content={content} />
        </main>
    )
}
