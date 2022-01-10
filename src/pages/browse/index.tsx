import { Component } from "react";
import { profiles } from "services/profiles";
import { Helmet } from "react-helmet-async";
import { ReduxType } from "reducer/types";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "reducer/maps";
import { buttons, main } from "services/browse";
import { Popular, High, Watched } from "components/cards";
import Footer from "components/footer";

class Browse extends Component<ReduxType> {
  componentDidMount = () => {
    const { user } = this.props.state,
      numberRandom = Math.floor(Math.random() * 3);

    this.props.setRandom({ random: numberRandom });
    
    setTimeout(() => {
      this.props.setPreload({ preload: user });
    }, 5300);
  };

  render() {
    const { user, preload, random } = this.props.state,
      avatar = profiles[(user as number) - 1]?.avatar,
      { bg, logo } = main[random as number],
      { play, info } = buttons;

    return (
      <>
        <Helmet>
          <title>Início - Netflix</title>
          <meta name="description" content="Início - Netflix" />
        </Helmet>
        {preload !== user ? (
          <div className="preloader-bg">
            <section className="main-content">
              <div className="profiles-container preloader">
                <div className="profiles">
                  <div className="profile-content">
                    <div className="profile">
                      <div className="user-avatar">
                        <img src={avatar} alt="" className="avatar" />
                      </div>
                      <span
                        className="icon-spinner spinner"
                        aria-hidden="true"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          ""
        )}

        <div className="top-wrapper">
          <img className="image-top" src={bg} alt="" />
          <section className="main-content">
            <aside className="top-aside">
              <img className="image-logo" src={logo} alt="" />
              <div className="aside-link">
                <a href="/" className="btn-play">
                  <div className="play">
                    <img src={play} alt="" />
                  </div>
                  Assistir
                </a>
                <a href="/" className="btn-info">
                  <div className="info">
                    <img src={info} alt="" />
                  </div>
                  Mais informações
                </a>
              </div>
            </aside>
          </section>
          <div className="overlay"></div>
        </div>
        <div className="card-container">
          <section>
            <Popular />
            <High />
            <Watched />
          </section>
        </div>
        <Footer />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);