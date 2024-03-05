import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Card from "../components/Card"
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid'
import { useState, useEffect } from 'react'

import styles from '../modules/Dashboard.module.css'

export default function Dashboard(){

  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/projetos').then(response => response.json()).then(setProjetos);
  }, []) 

  return(
    <div className={styles.container}>
      <Navbar />
      <div className={styles.main}>
        <Header pageTitle={"Dashboard"}/>
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
            data={projetos}
          >
            <Column className={styles.column} field="tipo de obra" title="Projeto" width="auto" />
            <Column className={styles.column} field="cliente" title="Cliente" width="auto" />
            <Column className={styles.column} field="valor" title="Valor do Projeto" width="auto" />
            <Column className={styles.column} field="status" title="Status" width="auto" />
          </Grid>
      </div>
    </div>
  )
}

