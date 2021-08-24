import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ShowPosts } from './ShowPosts';

let url_post = 'https://jsonplaceholder.typicode.com/posts';

const loadPosts = () => {
//funkcija za dobavljanje postova klikom na POSTS
  //za ucitavane koristimo FETCH koji prima URL ka endpointu za dobavljanje postova
  //asinhrona metoda - moze da se pauzira u toku izvrsavanja => vraca PROMISE (objekat), nemam odmah podatke, uskoro ce biti tu
  fetch(url_post)
    .then(response => response.json()) //kad podaci stignu izvrsice funkciju koju joj prosledimo; dobijene pdatke pretvorimo u objekat
    .then(data => {
      //data => niz postova i to moramo proslediti komponenti koja ih prikazato
      //obradimo odbijene podatke
      //1. prikazemo podatke
      let element = <ShowPosts posts={data}/> //showPosts ce imati atribut Poss i tako prosledjujemo podatke za prikaz
      let mesto = document.getElementById('displayEntity');
      ReactDOM.render(element, mesto);
    })

}


const loadTodos = () => {
//zasad ostaje prazna, ucitati TODOS
}


function App() {
  return (
    <div className="App">
      <button onClick={loadPosts} > Posts </button>
      <button onClick={loadTodos} > TODOs </button>
      <div>
        {/*ovde cemo prikazati POSTS ili TODOS, u zavisnosti od toga na [ta se klikne */}
        <div id='displayEntity'></div>
      </div>
    </div>
  );
}

export default App;
