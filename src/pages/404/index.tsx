import { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface Props {
  setUser: any;
  setPreload: any;
}

export default class NotFound extends Component<Props> {
  componentDidMount = () => {
    this.props.setUser(0);
    this.props.setPreload(-1);
  };

  render() {
    return (
      <>
        <Helmet>
          <title>Not Found - Netflix</title>
          <meta name="description" content="Not Found - Netflix" />
        </Helmet>
        <div className="main-error">
          <h1 className="error-title">Você se perdeu?</h1>
          <h2 className="error-text">
            Não conseguimos encontrar a página que você está procurando.
          </h2>
          <Link className="error-link" to="/profiles">
            Voltar para a página principal
          </Link>
        </div>
      </>
    );
  }
}
