import Cronom from '../components/Cronom';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Form/>
      <List/>
      <Cronom/>
    </div>
  );
}

export default App;
