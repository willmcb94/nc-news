import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { UserContext } from './contexts.js/UserContext';






function App() {
  const [user, setUser] = useState('')

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </UserContext.Provider>
  );
}

export default App;
