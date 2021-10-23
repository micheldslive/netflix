import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { menu } from "services/header";
import { profiles } from "services/profiles";

interface Props {
  user: number;
  setUser: any;
  preload: number;
  setPreload: any;
  scroll: boolean;
}

export default class Header extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.userClick = this.userClick.bind(this);
    this.preClick = this.preClick.bind(this);
  }

  userClick(id: number): void {
    this.props.setUser(id);
  }
  preClick(): void {
    this.props.setPreload(-1);
    this.props.setUser(0);
  }

  render() {
    const user = this.props.user,
      preloader = this.props.preload,
      currentAvatar = profiles[this.props.user - 1]?.avatar,
      scroll = this.props.scroll;

    return (
      <header className={scroll ? "header-content sticky" : "header-content"}>
        <section className="header-container">
          <div className="nav-primary">
            <NavLink
              className="netflix-logo icon-logoUpdate"
              to="/profiles"
              exact
              activeClassName="active"
            />
            <div className="nav-menu-content">
              {preloader === user ? 
                <span className="nav-menu-link">
                  Navegar <span className="arrow-nav"></span>
                </span>
               : ""
              }
              <nav className="nav-menu">
                {preloader === user
                  ? menu.map(({ id, name, to }) => 
                      <NavLink key={id} exact to={to} activeClassName="active">
                        {name}
                      </NavLink>
                    )
                  : ""
                }
              </nav>
            </div>
          </div>
          {preloader === user ?
            <div className="nav-secundary">
              <div className="nav-item">
                <div className="account-menu">
                  <div className="current-image">
                    <img src={currentAvatar} alt="" className="image" />
                    <span className="arrow-submenu"></span>
                  </div>
                  <span className="arrow-menu"></span>
                  <div className="sub-menu">
                    <ul className="profiles">
                      {profiles.map(({ id, name, avatar }) => 
                        <span key={id}>
                          {user !== id ? 
                            <li className="profile">
                              <span onClick={() => this.userClick(id)}>
                                <img src={avatar} alt="" />
                                <span>{name}</span>
                              </span>
                            </li>
                           : ""
                          }
                        </span>
                      )}
                      <li className="profile">
                        <Link to="/profiles" onClick={() => this.preClick()}>
                          <span>Trocar de perfil</span>
                        </Link>
                      </li>
                    </ul>
                    <ul className="profiles account-links">
                      <li className="link">
                        <Link to="/account">
                          <span>Conta</span>
                        </Link>
                      </li>
                      <li className="link">
                        <Link to="/ajuda">
                          <span>Centro de ajuda</span>
                        </Link>
                      </li>
                      <li className="link">
                        <Link to="/sair">
                          <span>Sair</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
           : ""
          }
        </section>
      </header>
    );
  }
}
