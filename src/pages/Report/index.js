import styles from './index.css';
import CreateTaskForm1 from '../../components/CreateTaskForm/CreateTaskForm1'
const Report = () => {
  return (
    <div>
      <div className={styles.reportwelcome}/>
      <h2 style={{textAlign:'center'}}>Welcome to Report</h2>
      <CreateTaskForm1 />
    </div>
  );
}
export default Report;