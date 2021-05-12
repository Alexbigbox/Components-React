import './App.css'
import React from 'react'

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'


export default _ =>
    <div className="App">
        <h1>Fundamentos React 2</h1>

        <div className="Cards">
            <Card titulo="#13 - Mega" color="#894242">
                <Mega qtde={8}></Mega>
            </Card>

            <Card titulo="#12 Contador" color="#424242">
                <Contador numeroInicial ={100} ></Contador>
            </Card>

            <Card titulo="#11 Componente Controlado (Input)" color="#E45f5f">
                <Input></Input>
            </Card>


            <Card titulo="#10 Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 Renderização Condicional" color="#FF4C65">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }}></UsuarioInfo>
                <UsuarioInfo usuario={{ email: 'fernando@gmail.com' }}></UsuarioInfo>

            </Card>

            <Card titulo="#07 Produtos" color="#FF4C65">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 Componentes com filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana"  />
                    <FamiliaMembro nome="Clara" /> 
                </Familia>
            </Card>

            <Card titulo="#04 Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 Primeiro" color="#E94C6F">
                <Primeiro></Primeiro>
            </Card>

            <Card titulo="#02 Com Parametro" color="#588C73">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Alexander"
                    nota={9.5}
                />
            </Card>
            <Card titulo="#01 Fragmento">
                <Fragmento></Fragmento>
            </Card>
        </div>
    </div>
