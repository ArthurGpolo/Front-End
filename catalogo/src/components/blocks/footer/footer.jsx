export default function Footer() {
  return (
    <footer
      className="shadow mt-5"
      style={{ backgroundColor: "#FFFFCC" }}
    >
      <div className="container py-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center">

          {/* Texto */}
          <div className="col-md-4 text-muted">
            © {new Date().getFullYear()} Company,{" "}
            <span style={{ color: "#1c8cfc" }}>LevaTudo</span>
          </div>

          {/* Logo (opcional) */}
          <a
            href="/"
            className="col-md-4 d-flex justify-content-center text-decoration-none"
            aria-label="Página inicial"
          >
            <svg className="bi" width="40" height="32" role="img">
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>

          {/* Navegação */}
          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-muted">Home</a>
            </li>
            <li className="nav-item">
              <a href="/features" className="nav-link px-2 text-muted">Features</a>
            </li>
            <li className="nav-item">
              <a href="/produtos" className="nav-link px-2 text-muted">Produtos</a>
            </li>
            <li className="nav-item">
              <a href="/faq" className="nav-link px-2 text-muted">FAQs</a>
            </li>
            <li className="nav-item">
              <a href="/sobre" className="nav-link px-2 text-muted">Sobre</a>
            </li>
          </ul>

        </div>
      </div>
    </footer>
  );
}
