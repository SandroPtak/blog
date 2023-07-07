import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

function CreatePost() {

    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db, "posts");

    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(
            postsCollectionRef,
            {
                title: title,
                postText: postText,
                author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
            }
        );
        navigate("/pagina-inicial")
    };

    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Crie seu post</h1>
                <div className="inputGp">
                    <label>Título</label>
                    <input
                        placeholder="Título"
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="inputGp">
                    <label>Post:</label>
                    <textarea
                        placeholder="Digite aqui"
                        onChange={(e) => { setPostText(e.target.value) }}
                    />
                </div>
                <button onClick={createPost}>Enviar</button>
            </div>
        </div>
    )
}

export default CreatePost;