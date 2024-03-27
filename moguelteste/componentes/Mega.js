import React from 'react'; 
import { Button, Text, TextInput, View, StyleSheet} from 'react-native' 
import MegaNumero from './MegaNumero';

export default class Mega extends React.Component { 
    state = {   qtdNumeros: this.props.qtdNumeros,
                numeros: [] 
            } 
            alterarQtdNumeros(qtde){ 
                this.setState({qtdNumeros: qtde}) 
            } 
            gerarNumeroNaoContido = nums => {
                const novo = parseInt(Math.random()*60)+1
                return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
            }
            gerarNumeros = () => {
                const {qtdNumeros} = this.state
                const numeros = []
                for( let i=0;i<qtdNumeros;i++){
                    numeros.push(this.gerarNumeroNaoContido(numeros))
                }
                numeros.sort((a,b) => a-b)
                this.setState({numeros})
            }
            exibirNumeros = () =>{
                const nums = this.state.numeros
                return nums.map(n => {
                    return <MegaNumero key={n} num={n}></MegaNumero>
                })
            }

            render(){ 
                return( 
                <> 
                    <Text > Gerador de Mega-Sena {this.state.qtdNumeros} 
                    </Text> 
                    <TextInput 
                    keyboardType={'numeric'} 
                    style={{borderBottomWidth: 1}} 
                    placeholder='Qtde de Números' 
                    value={this.state.qtdNumeros} 
                    onChangeText={ qtde => this.alterarQtdNumeros(qtde)} /> 
                    <Button
                    title='Gerar Números'
                    onPress={this.gerarNumeros}
                    />
                    <View style={style.numeros}>
                        {this.exibirNumeros()}
                    </View>
                </> 
                )
            }
        }
        const style = StyleSheet.create({
            numeros:{
                marginTop: 20,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }
        })