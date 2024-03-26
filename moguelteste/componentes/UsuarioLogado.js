import React from "react";
import If from "./If";
import { Text } from "react-native";
export default props => {
    const usuario = props.usuario || {}
    return(
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text>User logado</Text>
                <Text>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}