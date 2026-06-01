import logo from "./assets/react-logo.png";

function Nav() {
  return (
    <>
      <div className="nav-container">
        <nav>
          <img src={logo} width={60} alt="react logo" />
          <h1> ReactFacts</h1>
        </nav>
      </div>
    </>
  );
}

export default Nav;