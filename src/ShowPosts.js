// kreiramo komponent koja prikazuje sve postove na ekranu
// kreiramo ReactElement kojicu prikazati pomocu <ShowPosts />

import {ShowPost} from "./ShowPost";

// props => objekat koji ima prosledjene atribute, <ShowPosts posts={data} /> => props = {posts: data}
export function ShowPosts (props) {
    let postsArray = props.posts;


    // svaki post cemo prikazati u posebnom divu, sto znaci da cemo ovde imati niz divova
    let jsx_elements = postsArray.map((p) => <ShowPost  post={p} />)

    return <div>{jsx_elements}</div>;
}