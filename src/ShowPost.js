// definisemo prikaz jednog posta
import './ShowPost.css'

// <ShowPost post={p}/>
export function ShowPost (props) {
    let post = props.post; //ovaj post treba da prikazemo

    let jsx_element = (
        <div className='post_container'>
            <p> TITLE {post.title} </p>
            <p> ID: {post.id} </p>
            <p> USER ID: {post.userId} </p>
            <p> BODY: {post.body} </p>
        </div>)
        return jsx_element;
       
} 