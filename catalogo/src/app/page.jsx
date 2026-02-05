"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Home({id}) {

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

    <div className="conteiner mt-5 col-8 d-flex flex-wrap" style={{ justifyContent: "center", margin: "auto", gap: "2.3rem" }}>
      {produtos && produtos.map((produto) => (
        <div className="card shadow col-6" key={produto.id} style={{ width: "18rem", justifyContent: "center"}}>
          <img src={produto.images[0]} className="card-img-top" alt="..." />
          <div className="card-body p-3" style={{backgroundColor:"#ffffcc88"}}>
            <div className="titulo" style={{height:65}}>
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