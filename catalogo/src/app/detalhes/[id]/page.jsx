'use client';

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import "./../../detalhes/[id]/detalhes.css"
import Link from "next/link";


export default function detalhes() {

    const { id } = useParams();
    const [produto, setProdutos] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function Carregar() {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await res.json();
                setProdutos(data);
                console.log(data)
            } catch (err) {
                setError(err.message);
            }
        }

        Carregar();
    }, [id]);

    return (<>


        <div className="conteiner mt-5 col-8 d-flex flex-wrap" style={{ justifyContent: "center", margin: "auto", gap: "2rem" }}>
            {produto && (
                <>
                    <div className="container mt-5">
                        <div className="f d-flex flex-wrap">
                            {/* Product Images */}
                            <img
                                src={produto.images[0]}
                                className="img-fluid rounded mb-3 product-image shadow"
                                id="mainImage"
                            />
                            {/* Product Details */}
                            <div className="col-md-6">
                                <h2 className="mb-3">{produto.title}</h2>
                                <p className="text-muted mb-4">{produto.sku}</p>
                                <div className="mb-3">
                                    <span className="h4 me-2"><strong>R$</strong> {produto.price}</span>
                                    <span className="text-muted">
                                        <s>{produto.discountPercentage}</s>
                                    </span>
                                </div>
                                <div className="y d-flex mb-2">
                                {
                                    Array.from({ length: Math.ceil(produto.rating) }).map((_, i) => (
                                        <div key={i}>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                    ))
                                }
                                {
                                    Array.from({ length: (5 - Math.ceil(produto.rating)) }).map((_, i) => (
                                        <div key={i}>
                                            <i className="bi bi-star"></i>
                                        </div>
                                    ))
                                }
                                </div>
                                <p className="mb-4">
                                    {produto.description}
                                </p>
                                <div className="mb-4">
                                    <label htmlFor="quantity" className="form-label">
                                        <strong>Quantidade:</strong>
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="quantity"
                                        defaultValue={1}
                                        min={1}
                                        style={{ width: 80 }}
                                    />
                                </div>
                                <button className="btn btn-primary btn-lg mb-3 me-2">
                                    <i className="bi bi-cart-plus" /> Adicione ao carrinho
                                </button>
                                <button className="o btn btn-outline-secondary btn-lg mb-3">
                                    <i className="u" /> <a className="v" href={`/`}>Voltar pro Menu</a>
                                </button>
                                <div className="mt-4">
                                    <div className="z mb-2"><strong>Reviews:</strong></div>
                                    {produto.reviews.map((rev, i) => {
                                        return (<div key={i}>


                                            <h6>{rev.reviewerName}</h6>
                                            <div className="d-flex gap-2">
                                                <p>{rev.rating}</p>
                                                <div className="d-flex">
                                                    {
                                                        Array.from({ length: rev.rating }).map((_, i) => (
                                                            <div key={i}>
                                                                <i className="bi bi-star-fill"></i>
                                                            </div>
                                                        ))
                                                    }
                                                    {
                                                        Array.from({ length: (5 - rev.rating) }).map((_, i) => (
                                                            <div key={i}>
                                                                <i className="bi bi-star"></i>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <p>{rev.comment}</p>

                                        </div>)
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            )}
        </div>

    </>)
}