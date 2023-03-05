
import './App.css';
import React from "react";
import Emojis from './components/EmojiSearch';
import Tictoe from './components/Tictoe';
import Problem3 from './components/Problem3';
import Main from './components/Main';
import Table from './components/Table';
import EmojiSearch from './components/EmojiSearch';
const initialData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    groups: ['Instructor'],
    status: 'Active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    groups: ['Student'],
    status: 'Inactive',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bobjohnson@example.com',
    groups: ['Admin', 'Instructor'],
    status: 'Active',
  },
  // Add more data as needed
];

function App() {
  
  return (
    <>
  <EmojiSearch/>
  <Tictoe/>
  <Problem3/>
 <Main/>
  <Table data={initialData} />
    </>

  )
}

export default App;
