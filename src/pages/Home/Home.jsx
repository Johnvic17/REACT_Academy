import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
         <div>
           <h1 className={styles.title}>Get in <br/> shape <br/> today!</h1>
         </div>
         <div>
              <a href="https://github.com/Johnvic17"><input type="button" value="ENTER NOW ⟶" className={styles.btn}/></a>
         </div>
    </div>
    
  );
}

export default Home