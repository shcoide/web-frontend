import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import Styles from "../styles/pages/Results/results.module.css";
import GC from "./results/GC";
import Interiit from "./results/Interiit";
import LiveScoreboard from './results/LiveScoreboard';

function Results() {
  document.title = "Results | TSG";
  // state variables for conditional rendering
  const [gC, setGC] = useState(true);
  const [interIIT, setInterIIT] = useState(false);
  const [liveScoreboard, setLiveScoreboard] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/results") {
      setInterIIT(false);
      setGC(true);
      setLiveScoreboard(false);
    } else if (location.pathname === "/results/gc") {
      setGC(true);
      setInterIIT(false);
      setLiveScoreboard(false);
    } else if (location.pathname === "/results/interiit") {
      setInterIIT(true);
      setGC(false);
      setLiveScoreboard(false);
    } else if (location.pathname === "/results/livescore") {
      setInterIIT(false);
      setGC(false);
      setLiveScoreboard(true);
    }
  }, [location.pathname]);

  return (
    <Layout>
      <div className={Styles.resultsSection}>
        {/* <Sidebar itemsList={resultsSidebarList} /> */}

        <div className={Styles.content}>
          {/* Conditional Rendering of routes on the basis of route */}
          {gC && <GC />}
          {interIIT && <Interiit />}
          {liveScoreboard && <LiveScoreboard />}
        </div>
      </div>
    </Layout>
  );
}

export default Results;
