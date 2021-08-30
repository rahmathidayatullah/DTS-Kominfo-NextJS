import "../styles/globals.css";
import "../styles/styleCustomUtilities.css";
import "react-datepicker/dist/react-datepicker.css";

import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
