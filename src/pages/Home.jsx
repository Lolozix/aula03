import { useState, useEffect } from "react";
import ListaProdutos from "../pages/listaProdutos";

export default function Home() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const receberListaProdutos = async () => {
            try {
                const resposta = await fetch('https://fakestoreapi.com/products');
                const listaProdutos = await resposta.json();
                setProdutos(listaProdutos);
            }catch (erro) {
                alert("Ocorreu um erro ao receber os produtos");
            }
        };
        receberListaProdutos();
    }, []);

    return (
        <>
            <ListaProdutos produtos={produtos} />
        </>
    );
}
