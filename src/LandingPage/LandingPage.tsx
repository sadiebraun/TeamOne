import React, { useEffect, useState } from "react";

const LandingPage = ({ scopedT: t, shopifyFetch }) => {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const query = `
      query {
        shop {
          name
        }
      }
    `;

    shopifyFetch({ query }).then(res => setName(res.data.shop.name));
  }, []);

  return <div>{t("INTRO", { name })}</div>;
};

export default LandingPage;
