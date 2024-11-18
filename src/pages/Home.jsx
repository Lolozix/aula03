import { useState, useEffect } from "react";
import ListaProdutos from "styles/listaProdutos.module.css";

export default function App() {
    
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const receberListaProdutos = async () => {
            try {
                const resposta = await fetch('https://fakestoreapi.com/products');
                const dados = awaitresposta.json();
                setLista(dados);
            } catch {
                alert('Ocorreu um erro na comunicação com o servidor!');
            }
        }
        receberListaProdutos();
    }, []);

    if (lista.length === 0) {
        return <h1>Caregando...</h1>
    }

    const ordenAz = () => {
        const listaOrdenada = [...lista].sort((a, b) => a.title.localeCompare(b.title));
        setLista(listaOrdenada);
    }

    return (
        <>
            <h1>Lista de Produtos</h1>
            <button> onClick={() => ordenAz()}</button>
            <ListaProdutos produtos={lista} />
        </>
    );
}