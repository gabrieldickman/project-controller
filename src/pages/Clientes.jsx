import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Card from "../components/Card"
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid'
import { useState, useEffect } from 'react'

import styles from '../modules/Clientes.module.css'


export default function Clientes(){

  const[clientes, setClientes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/clientes').then(response => response.json()).then(setClientes);
  },[])

  return(
    <div className={styles.container}>
      <Navbar />
      <div className={styles.main}>
        <Header pageTitle={"Clientes"}/>
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
            data={clientes}
          >
            <Column className={styles.column} field="nome" title="Cliente" width="auto" />
            <Column className={styles.column} field="cpf-cnpj" title="CPF / CNPJ" width="auto" />
            <Column className={styles.column} field="email" title="E-mail" width="auto" />
            <Column className={styles.column} field="fone" title="Telefone" width="auto" />
          </Grid>
      </div>
    </div>
  )
}