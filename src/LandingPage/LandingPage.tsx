import React, { useEffect, useState } from "react";

import useStyles from "./LandingPage.styles";

const LandingPage = ({ scopedT: t, shopifyFetch }) => {
  const [name, setName] = useState<string>("");
  const classes = useStyles();

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

  return true ? (
    <div className={classes.loginBox}>
      <div>
        {name}
      </div>
      <img src="https://factor-us-development.myshopify.com/cdn/shop/files/favicon_factor.webp?v=1673837643&width=50" />
      <div>
        {t("LOGIN_TITLE")}
      </div>
      <div>
        {t("LOGIN_PROMPT")}
      </div>
    </div>) : <div>logged in</div>
};

export default LandingPage;
