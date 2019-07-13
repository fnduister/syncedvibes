import { useEffect } from "react";
import { withRouter } from "react-router";

const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
      const maxHeight = window.innerHeight;
    window.scrollTo(0, maxHeight);
  }, [pathname]);

  return children;
};

export default withRouter(ScrollToTop);
