import styles from "./About.module.css";

import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
          <h2>
            About <br/> the  gym <br/> website
          </h2>
          <p>
            This project is a  <br/> simple promotional <br/> website for a gym created <br/> with HTML, CSS, JS and <br/> having crucial use  <br/>of the React library <br/> for  the front-end <br/>  among other <br/>technologies such as <br/> React-Router-Dom.
          </p>
          <Link to="/">
            <button className={styles.btn}>Home</button>
          </Link>
      </div>
    </div>
  )
}

export default About