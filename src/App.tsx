import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = ['Dima', 'Sveta', 'Katya', 'Viktor', 'Ignat']
  const users = [{id: 1, name: 'Dima'}, {id: 2, name: 'Andrei'}, {id: 3, name: 'Vika'}, {id: 4, name: 'Pasha'}, {id: 5, name: 'Dasha'}]

  const liElements = users.map(u => <li key={u.id}>{u.name}</li>)
    return (
    <div className="App">
      <ul>
        {liElements}
      </ul>
    </div>
  );
}

export default App;
