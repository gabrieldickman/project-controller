import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Card from "../components/Card"
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid'
import { useState, useEffect } from 'react'

import styles from '../modules/Fornecedores.module.css'

export default function Fornecedores(){

  const [fornecedores, setFornecedores] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/fornecedores').then(response => response.json()).then(setFornecedores);
  }, []) 

  return(
    <div className={styles.container}>
      <Navbar />
      <div className={styles.main}>
        <Header pageTitle={"Fornecedores"}/>
          <div className={styles.info_cards}>
            <Card 
            cardTitle={"Recebidos"}
            valor={`R$ ${25000}`}/>
            <Card 
            cardTitle={"Projetos Iniciados"}
            valor={30}/>
            <Card 
            cardTitle={"Projetos Finalizados"}
            valor={15}/>
            <Card 
            cardTitle={"Projetos Totais"}
            valor={45}/>
          </div>
          <Grid className={styles.grid} 
            data={fornecedores}
            style={{
              maxWidth:"90rem",
              maxHeight: "400px"
          }}
          >
            <Column field="nome" title="Nome" />
            <Column field="cpf-cnpj" title="CPF / CNPJ" />
            <Column field="email" title="E-mail" />
            <Column field="fone" title="Telefone" />
          </Grid>
      </div>
    </div>
  )
}