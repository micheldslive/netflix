import { Component } from "react";
import { social, footer } from "services/footer";

export default class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <section className="footer-container">
          <div className="social-links-container">
            {social.map(({ id, name, to, icon }) => (
              <a className="social-link" href={to} key={id}>
                <img src={icon} alt={name} className="social-image" />
              </a>
            ))}
          </div>
          <div className="footer-links-container">
            <ul className="footer-links-content">
              {footer.map(({ id, name, to }) => (
                <li className="footer-list-link" key={id}>
                  <a className="footer-link" href={to}>
                    <span className="footer-link-content">{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="service-link-container">
            <button className="service-code">Código do serviço</button>
          </div>
          <div className="copyright-container">
            <span>© 1997-2021 Netflix, Inc.&nbsp;&nbsp;&lrm;</span>
            <span className="copyright-instance">
              {"{43683012-9a45-4227-b2d4-cc4358b9ebab}"}
            </span>
          </div>
        </section>
      </footer>
    );
  }
}
