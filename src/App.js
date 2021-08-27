import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ShowPosts } from './ShowPosts';

let url_post = 'https://jsonplaceholder.typicode.com/posts';
let url_user = 'https://jsonplaceholder.typicode.com/users';

const loadPosts = () => {
  // ispisati da je u toku dobavljanje podataka - kroz RenderDOM
//funkcija za dobavljanje postova klikom na POSTS
  //za ucitavanje koristimo FETCH koji prima URL ka endpointu za dobavljanje postova
  //asinhrona metoda - moze da se pauzira u toku izvrsavanja => vraca PROMISE (objekat), nemam odmah podatke, uskoro ce biti tu
  fetch(url_post)
    .then(response => response.json()) //kad podaci stignu izvrsice funkciju koju joj prosledimo; dobijene pdatke pretvorimo u objekat
    .then(data => {
      //data => niz postova i to moramo proslediti komponenti koja ih prikazato
      //obradimo dobijene podatke
      //1. prikazemo podatke
      getAllUsers(data)
      .then(niz => {
        let element = <ShowPosts posts={niz}/> //showPosts ce imati atribut Poss i tako prosledjujemo podatke za prikaz
        let mesto = document.getElementById('displayEntity');
        ReactDOM.render(element, mesto);
      }
  )
})
}

const loadUser = async (id) => {
  let user = await fetch(`${url_user}/${id}`)
  let obj = await user.json();
  return obj.name;
} 

const getAllUsers = async (posts) => {
  let allUsers = []
    for(let p of posts) {
    let user = await loadUser(p.userId);
    let newPost = {
      id: p.id, 
      userId: user, 
      title: p.title, 
      body: p.body}
    allUsers.push(newPost)} 
      return allUsers;
  }
 // loadUser(id))

const loadTodos = () => {
//zasad ostaje prazna, ucitati TODOS
}


function App() {
  return (
    <div className="App">
      <button onClick={loadPosts} > Posts </button>
      <button onClick={loadTodos} > TODOs </button>
      <div>
        {/*ovde cemo prikazati POSTS ili TODOS, u zavisnosti od toga na sta se klikne */}
        <div id='displayEntity' className='main-container'></div>
      </div>
    </div>
  );
}

export default App;
