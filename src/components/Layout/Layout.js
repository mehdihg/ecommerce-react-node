import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import SocialMedia from "../SocialMedia/SocialMedia";

const Layout = ({ children }) => {
  const [collection, setCollection] = useState(false);
  return (
    <div>
      <Navigation />
      {children}
      <SocialMedia collection={collection} setCollection={setCollection} />
    </div>
  );
};
export default Layout;
