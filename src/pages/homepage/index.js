import React from "react";
import { SpotlightContent } from "./components/spotlight-content";
import { ContentOverview } from "./components/content-overview";
import { AppBar } from "../../components/app-bar";

export const HomePage = () => {
  return (
    <main>
        <AppBar />
        <SpotlightContent />
        <ContentOverview />
    </main>
  )
}
