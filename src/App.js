import { useEffect } from "react";
import Input from "./components/Input";
import People from "./components/People";
import {useSettingsStore} from "./store";

function App() {
  const toggleDarkMode = useSettingsStore(state=>state.toggleDarkMode);
  const dark = useSettingsStore(state=>state.dark);

  useEffect(() => {
    if(dark){
      document.querySelector('body').classList.add('dark');
    }else{
      document.querySelector('body').classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className="background">
    <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    <h1>People</h1>
    <Input/>
    <People/>
    </div>
  );
}

export default App;
