import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {

    const gerarIdade = () => parseInt(Math.random() * (20)) + 40
    return (
        <div>
           <div>Filho</div>
           <button onClick={
               function (e) {
                   props.quandoClicar('João', gerarIdade(), true)
               }
            }>
               Fornecer Informações
            </button>
        </div>
    )
}