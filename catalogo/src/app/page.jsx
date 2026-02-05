"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Home({ id }) {

  const [produtos, setProdutos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function Carregar() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProdutos(data.products);
        console.log(data)
      } catch (err) {
        setError(err.message);
      }
    }

    Carregar();
  }, []);

  return (<>


    <section className="about-us py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="font-weight-bold mb-4 d-flex">Bem-vindo a Leva<div><h2 style={{ color: "#1c8cfcff" }}>Tudo</h2></div></h2>
            <p className="text-muted mb-4">
              Aqui você encontra uma grande variedade de produtos para todas as suas necessidades.
              Trabalhamos com qualidade, praticidade e preços acessíveis.
              Nossa loja online foi criada para facilitar sua experiência de compra.
              Oferecemos produtos selecionados e atendimento de confiança.
              Tudo isso com a comodidade de comprar sem sair de casa.
              Sua satisfação é a nossa prioridade.
            </p>
            <div className="row">
              <div className="col-md-6">
                <h5 className="text-primary">Nossa Missão</h5>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-check-circle me-2 text-primary" />
                    Soluções Tecnológicas
                  </li>
                  <li>
                    <i className="bi bi-check-circle me-2 text-primary" />
                    Satisfação do Consumidor
                  </li>
                  <li>
                    <i className="bi bi-check-circle me-2 text-primary" />
                    Práticas Sustentáveis
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5 className="text-primary">Nossa Visão</h5>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-bullseye me-2 text-primary" />
                    Alcançe Nacional
                  </li>
                  <li>
                    <i className="bi bi-bullseye me-2 text-primary" />
                    Referencia Comercial
                  </li>
                  <li>
                    <i className="bi bi-bullseye me-2 text-primary" />
                    Crescimento Continuo
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="https://backend.intelbras.com/sites/default/files/inline-images/case-havan-3.jpg"
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
        <div className="row mt-5" style={{ gap: 20, justifyContent: "center" }}>
          <div className="col-md-3 col-6 mb-4 shadow">
            <div className="text-center">
              <i className="bi bi-people fs-1 text-primary mb-2" />
              <h2 className="fw-bold">500+</h2>
              <p className="text-muted">Clientes</p>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4 shadow">
            <div className="text-center">
              <i className="bi bi-briefcase fs-1 text-primary mb-2" />
              <h2 className="fw-bold">1000+</h2>
              <p className="text-muted">Projetos</p>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4 shadow">
            <div className="text-center">
              <i className="bi bi-trophy fs-1 text-primary mb-2" />
              <h2 className="fw-bold">50+</h2>
              <p className="text-muted">Premios</p>
            </div>
          </div>
        </div>
      </div>
    </section>



    <div className="conteiner mt-5 col-8 d-flex flex-wrap" style={{ justifyContent: "center", margin: "auto", gap: "2.3rem" }}>
      {produtos && produtos.map((produto) => (
        <div className="card shadow col-6" key={produto.id} style={{ width: "18rem", justifyContent: "center" }}>
          <img src={produto.images[0]} className="card-img-top" alt="..." />
          <div className="card-body p-3" style={{ backgroundColor: "#ffffcc88" }}>
            <div className="titulo" style={{ height: 65 }}>
              <h5 className="card-title">{produto.title}</h5>
            </div>
            <p className="card-text">
              <strong>Categoria:</strong> {produto.category}
            </p>
            <p className="card-price"><strong>R$ {produto.price}</strong></p>
            <a href={`/detalhes/${produto.id}`} className="btn btn-primary">
              Ver detalhes
            </a>
          </div>
        </div>
      ))}
    </div>

  </>);
}