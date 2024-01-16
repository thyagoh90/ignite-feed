import { Post } from "./Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

export function App () {

  return (
  <div>
      <Header />  

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
          author="Thyago Henrique" 
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo veritatis laboriosam odit adipisci voluptatem nisi fuga, modi nobis consectetur maxime nulla quos dolorem at esse ad, sit blanditiis eos vero!" />
    

          <Post 
          author="Sarah Reis"
          content="Um post muito legal"/>
        </main>
      </div>
  </div>
    )}



