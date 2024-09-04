import { ROUTES } from "@src/shared/constants";
import { Link } from "react-router-dom";

export const AboutPage = () => (
  <div>
    <Link to={ROUTES.HOME}>Home</Link>
    <div> About Page</div>
  </div>
);
