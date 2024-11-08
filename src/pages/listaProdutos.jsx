import React from "react";
import styles from "styles/listaProdutos.module.css";

export default function ListaProdutos({ produtos }) {
    if (produtos.length === 0) {
        return <h1>Carregando...</h1>;    
    }

    return (
        <>
            <ul className={styles.bloco}>
                {produtos.map(produto => (
                    <li key={produto.id} className={styles.item}>
                        <h2>{produto.title}</h2>
                        <p>{produto.description}</p>
                        <p>Preço: R${produto.price}</p>
                        <img src={produto.image} alt={produto.title} width={100} />
                    </li>
                ))}
            </ul>
        </>
    );
}
