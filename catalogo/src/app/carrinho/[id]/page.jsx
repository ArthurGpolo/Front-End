'use client'

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import "./carrinho.css"

export default function Carrinho() {

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
    }, [id])

    return (
        <>
        {produto && (
            <>
            <div className="container mt-5">
                <div className="row">
                    {/* Shopping Cart Items */}
                    <div className="col-md-8">
                        <h3>Meu carrinho</h3>
                        {/* Cart Item 1 */}
                        <div className="cart-item">
                            <div className="d-flex">
                                <img
                                    src={produto.images[0]}
                                    alt="Product"
                                    className="product-img me-3"
                                />
                                <div>
                                    <h6>{produto.title}</h6>
                                    <p className="mb-0">1 item</p>
                                </div>
                            </div>
                            <span>{produto.price}</span>
                        </div>
                    </div>

                    {/* Cart Summary */}
                            <div className="col-md-4">
                                <div className="cart-summary">
                                    <h5>Sumário</h5>
                                    <ul className="list-unstyled">
                                        <li className="d-flex justify-content-between">
                                            <span>Subtotal:</span>
                                            <span>R${produto.price}</span>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <span>Desconto:</span>
                                            <span>{produto.discountPercentage}%</span>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <span className="total-price">Total:</span>
                                            <span className="total-price">{produto.price}</span>
                                        </li>
                                    </ul>
                                    <button className="btn btn-checkout" disabled="">
                                        Finalizar Compra
                                    </button>
                                </div>
                            </div>
                </div>
            </div>
            </>)}

        </>
    );
}