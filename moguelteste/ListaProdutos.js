import { Text } from "react-native";
export default props => {
    function carregaLista(){
        return props.lista.map(p =>{
            return <Text key={p.id}> {p.id} - {p.nome} - Valor:{p.preco}</Text>
        })
    }
    return(
        <>
            <Text>
                Lista de Produtos
            </Text>
            {carregaLista()}
            {props.lista.map(p =>{
            return <Text key={p.id}> {p.id} - {p.nome} - Valor:{p.preco}</Text>
        })}
        </>
    )
}