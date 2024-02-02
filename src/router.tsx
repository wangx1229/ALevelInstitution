import App from "./App";
import { Guidance, Institution, Schoool, Team } from "./pages";

const routers = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Schoool />,
      },
      {
        path: "guidance",
        element: <Guidance />,
      },
      {
        path: "institution",
        element: <Institution />,
      },
      {
        path: "team",
        element: <Team />,
      },
    ],
  },
];

export default routers;
