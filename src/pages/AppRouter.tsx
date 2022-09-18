import { memo } from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "./not-found/NotFound";
import Apply from "./apply/Apply";
import HowItWorks from "./how-it-works/HowItWorks";
import AboutUs from "./about-us/AboutUs";
import Blog from "./blog/Blog";
import Home from "./home/Home";
import Partner from "./partner/Partner";
import PartnerOffer from "./partner/partner-offer/PartnerOffer";
import PartnerRegister from "./partner/partner-register/PartnerRegister";
import PartnerLogin from "./partner/partner-login/PartnerLogin";
import RegisteredPartners from "./partner/registered-partners/RegisteredPartners";

const AppRouter = memo(() => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "apply",
      element: <Apply />
    },
    {
      path: "how-it-works",
      element: <HowItWorks />
    },
    {
      path: "about-us",
      element: <AboutUs />
    },
    {
      path: "blog",
      element: <Blog />
    },
    {
      path: "partner",
      element: <Partner />,
      children: [
        {
          path: "partner-offer",
          element: <PartnerOffer />,
        },
        {
          path: "partner-register",
          element: <PartnerRegister />,
        },
        {
          path: "partner-login",
          element: <PartnerLogin />,
        },
        {
          path: "registered-partners",
          element: <RegisteredPartners />,
        },
      ]
    },

    {
      path: "*",
      element: <NotFound />
    },
  ])
  return element
})

export default AppRouter;
