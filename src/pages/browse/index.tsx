import { Component } from "react";
import { profiles } from "services/profiles";
import { Helmet } from "react-helmet-async";
import { buttons, main } from "services/browse";
import { Popular, High, Watched } from "components/cards";
import Footer from "components/footer";

interface Avatar {
  user: number;
  preload: number;
  setPreload: any;
}

export default class Browse extends Component<Avatar> {
  state = {
    random: 0,
  };

  componentDidMount = () => {
    const numberRandom = Math.floor(Math.random() * 3);
    this.setState({ random: numberRandom });
  };

  render() {
    const user = this.props.user;
    const userPreload = this.props.preload;
    const avatar = profiles[user - 1]?.avatar;
    const { bg, logo } = main[this.state.random];
    const { play, info } = buttons[0];

    setTimeout(() => {
      this.props.setPreload(this.props.user);
    }, 5300);

    return (
      <>
        <Helmet>
          <title>Início - Netflix</title>
          <meta name="description" content="Início - Netflix" />
        </Helmet>
        {userPreload !== user ? (
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
