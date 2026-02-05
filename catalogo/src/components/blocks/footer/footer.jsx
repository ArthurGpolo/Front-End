export default function Footer() {
  return (<>
<div className="geral shadow"  style={{backgroundColor:"#FFFFCC", justifyContent:"center", alignItems:"center"}}>
<div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center mt-5" style={{minHeight:100}}>
    <p className="col-md-4 mb-0 text-muted d-flex">© 2026 Company, Leva<p2 style={{color:"#1c8cfcff"}}>Tudo</p2></p>
    <a
      href="/"
      className="col-md-4 d-flex flex-wrap align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
    >
      <svg className="bi me-2" width={40} height={32}>
        <use xlinkHref="#bootstrap" />
      </svg>
    </a>
    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item">
        <a href="#" className="nav-link px-2 text-muted">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link px-2 text-muted">
          Features
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link px-2 text-muted">
          Produtos
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link px-2 text-muted">
          FAQs
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link px-2 text-muted">
          Sobre
        </a>
      </li>
    </ul>
  </footer>
</div>
</div>

  </>)
}