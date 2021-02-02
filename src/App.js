import { Routes } from './routes/Routes'
import { NavigationBar } from './components/navigationbar/NavigationBar'
import './shared/global/css/Global.css'
import { UserProvider } from './shared/global/provider/UserProvider'



function App() {
  return (
    <UserProvider>
    <Routes>
        <NavigationBar />
    </Routes>
    </UserProvider>
  );
}

export default App;
