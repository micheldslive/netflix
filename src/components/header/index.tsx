import { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { mapDispatchToProps, mapStateToProps } from "reducer/maps";
import { ReduxType } from "reducer/types";
import { menu } from "services/header";
import { profiles } from "services/profiles";

class Header extends Component<ReduxType> {
  constructor(props: ReduxType) {
    super(props);
    this.userClick = this.userClick.bind(this);
    this.preClick = this.preClick.bind(this);
  }

  userClick(id: number): void {
    this.props.setUser({ user: id });
  }
  preClick(): void {
    this.props.setPreload({preload: -1});
    this.props.setUser({user: 0});
  }

  render() {

    const { user, preload } = this.props.state,
      currentAvatar = profiles[user as number - 1]?.avatar;

    return (
      <header className="header-content">
        <section className="header-container">
          <div className="nav-primary">
            <NavLink
              className="netflix-logo icon-logoUpdate"
              to="/profiles"
              exact
              activeClassName="active"
            />
            <div className="nav-menu-content">
              {preload === user ? 
                <span className="nav-menu-link">
                  Navegar <span className="arrow-nav"></span>
                </span>
               : ""
              }
              <nav className="nav-menu">
                {preload === user
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
          {preload === user ?
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
