import App from "./App";
import { Language, OverView, Team, WhyUs } from "./pages";

const routers = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <OverView />,
      },
      {
        path: "whyUs",
        element: <WhyUs />,
      },
      {
        path: "language",
        element: <Language />,
      },
      {
        path: "team",
        element: <Team />,
      },
    ],
  },
];

export default routers;
