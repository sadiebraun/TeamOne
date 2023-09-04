import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    loginBox: {
      width: 500,
      height: 400,
      marginLeft: "calc((100% - 500px) / 2)",
      marginTop: "calc((100% - 900px) / 2)",
      border: "1px solid #ccc",
      borderRadius: "0.4rem",
      padding: 24
    }
  },
  {
    name: "LandingPage"
  }
);

export default useStyles;
