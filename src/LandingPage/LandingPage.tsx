import React, { useEffect } from "react";

const LandingPage = ({ scopedT: t, shopifyFetch }) => {
  useEffect(() => {
    console.info("fetch shopify data on load");
    shopifyFetch();
  }, []);

  return <div>{t("INTRO")}</div>;
};

export default LandingPage;
