import { HeaderContainer } from "./styled";

import LogoIgnite from "../../assets/logo-ignite.svg";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="" />
      <nav>
        <NavLink to="" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Historíco">
          <Scroll size={24} />
        </NavLink>
        <NavLink to="/test" title="Test">
          <Timer size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
