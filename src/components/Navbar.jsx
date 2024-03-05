import styles from '../modules/Navbar.module.css'

import logo from '../assets/logo.png';

import { Link } from 'react-router-dom'

import { MdDashboard } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { LuPackage } from "react-icons/lu";

export default function Navbar(){
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
        <p>Project Management</p>
      </div>
      <ul className={styles.navbar_items}>
        <li>
          <span>
          <Link to={`/`} className={styles.icon}> <MdDashboard size={30}/> </Link> 
          <Link to={`/`} className={styles.navbar_item} > Dashboard </Link>
          </span>
        </li>
        <li>  
          <span>
            <Link to={`/projetosiniciados`} className={styles.icon}> <FaCheckCircle size={30} /> </Link>
            <Link to={`/projetosiniciados`} className={styles.navbar_item}> Projetos Iniciados </Link> 
          </span>
        </li>
        <li>  
          <span>
            <Link to={`/projetosfinalizados`} className={styles.icon}> <FaRegTimesCircle size={30} /> </Link> 
            <Link to={`/projetosfinalizados`} className={styles.navbar_item}> Projetos Finalizados </Link> 
          </span>
        </li>
        <li> 
          <span>
            <Link to={`/clientes`} className={styles.icon}> <IoMdPeople size={30} /> </Link>
            <Link to={`/clientes`} className={styles.navbar_item}> Clientes </Link> 
          </span>
        </li>
        <li>
          <span>
            <Link to={`/fornecedores`} className={styles.icon}> <LuPackage size={30} /> </Link>
            <Link to={`/fornecedores`} className={styles.navbar_item}> Fornecedores </Link> 
          </span>
        </li>
      </ul>
    </nav>
  );
}