import { Component } from "react";
import { Link } from "react-router-dom";
import { profiles } from "services/profiles";

interface Avatar {
  user: number;
  setUser: any;
}

export default class Profiles extends Component< Avatar > {
  constructor(props: Avatar) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id: number): void {
    this.props.setUser(id);
  }

  render() {
    return (
      <section className="main-content">
        <div className="profiles-container">
          <h1 className="title">Quem está assistindo?</h1>
          <div className="profiles">
            {profiles.map(({ id, name, avatar }) => (
              <div className="profile-content" key={id}>
                <Link className="profile" to="/browse" onClick={() => this.handleClick(id)}>
                  <div className="user-avatar">
                    <img src={avatar} alt="" className="avatar" />
                  </div>
                  <span className="user-name">{name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
