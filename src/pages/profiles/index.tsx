import { Component } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "reducer/maps";
import { ReduxType } from "reducer/types";
import { profiles } from "services/profiles";
import { Link } from "react-router-dom";

class Profiles extends Component<ReduxType> {
  constructor(props: ReduxType) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id: number): void {
    this.props.setUser({ user: id });
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

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
