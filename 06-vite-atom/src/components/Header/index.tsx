import { HeaderContainer } from "./styled";

import LogoIgnite from "../../assets/logo-ignite.svg";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="" />
      <nav>
        <NavLink to="/doctors" title="doctors">
          <Scroll size={24} />
        </NavLink>

        <NavLink to="/doctor" title="Doctor">
          <Timer size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
