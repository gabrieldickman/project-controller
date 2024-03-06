import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Card from "../components/Card"
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid'
import { useState, useEffect } from 'react'

import styles from '../modules/ProjetosFinalizados.module.css'

export default function ProjetosFinalizados(){

  const [projetosIniciados, setProjetosIniciados] = useState([]);

  const status = "Concluido"

  useEffect(() => {
    fetch(`http://localhost:5000/projetos?status=${status}`).then(response => response.json()).then(setProjetosIniciados);
  }, []) 
  return(
    <div className={styles.container}>
    <Navbar />
    <div className={styles.main}>
      <Header pageTitle={"Projetos Finalizados"}/>
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
          data={projetosIniciados}
          style={{
            maxWidth:"90rem",
            maxHeight: "400px"
        }}
        >
          <Column field="tipo de obra" title="Projeto" />
          <Column field="cliente" title="Cliente" />
          <Column field="valor" title="Valor do Projeto" />
          <Column field="status" title="Status" />
        </Grid>
    </div>
  </div>
  )
}