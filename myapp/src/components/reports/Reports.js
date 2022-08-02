import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "./Reports.module.css";
import Current from "./Current";
import Hourly from "./Hourly";
import Daily from "./Daily";

const Reports = () => {
  return (
    <Router>
      <div className={styles.reports}>
        <Routes>
          <Route path="/current" element={<Current />} />
          <Route path="/hourly" element={<Hourly />} />
          <Route path="/daily" element={<Daily />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Reports;
