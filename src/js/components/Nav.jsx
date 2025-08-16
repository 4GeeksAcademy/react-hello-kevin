export default function NavBar(){
    return(
           <nav className="navbar navbar-expand-lg bg-secondary" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand" href="#">Juegamania</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link active" href="#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
    );
}