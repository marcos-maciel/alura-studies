import Cronom from '../components/Cronom';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';
import { InfoProvider } from '../contexts/GlobalContext';

function App() {
  return (
    <InfoProvider>
      <div className={style.AppStyle}>
        <Form />
        <List />
        <Cronom />
      </div>
    </InfoProvider>
  );
}

export default App;
