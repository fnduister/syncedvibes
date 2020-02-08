import { useEffect } from 'react';
import { withRouter } from 'react-router';

const ScrollToMainComponent = ({ children, location: { pathname } }) => {
  useEffect(() => {
    const maxHeight = window.innerHeight;
    console.log('TCL: ScrollToMainComponent -> maxHeight', maxHeight);
    window.scrollTo(0, maxHeight);
  }, [pathname]);

  return children;
};

export default withRouter(ScrollToMainComponent);
