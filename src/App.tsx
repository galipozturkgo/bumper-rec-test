import AppRouter from "pages/AppRouter";
import Layout from "base/components/layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {

  return <Router>
    <Layout>
      <AppRouter />
    </Layout>
  </Router >;
};

export default App;
