import React from "react";
import { motion } from "framer-motion";

export type TabPaneProps = {
  currentTab: {
    value: string;
    label: string;
    icon: string;
    description: string;
    subDescription: string;
  };
};

export default function TabPane({ currentTab }: TabPaneProps) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="tab-pane fade show"
        id="personal"
        role="tabpanel"
        aria-labelledby="personal-tab"
      >
        <div className="row">
          <h3 className="tab-title col-md-12 mb-5"> {currentTab.label} </h3>

          <div
            className="col-md-5 service-desc ms-7"
            style={{
              marginLeft: "10rem",
            }}
          >
            <h4 className="tab-desc">{currentTab.description}</h4>
          </div>

          <div className="col-md-5 left-section">
            <h4 className="tab-desc">{currentTab.subDescription}</h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
