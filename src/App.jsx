import { useState } from 'react'
import posts from './database/db'
import './App.css'

function App() {

  const [addPosts, setAddPosts] = useState(posts)
  const [newPost, setNewPost] = useState('')

  function addPost(e) {


    e.preventDefault()
    console.log(addPosts);

    setAddPosts([
      ...addPosts,
      newPost
    ])

    setNewPost('')
  }


  return (
    <>
      <div className="containter mt-3">
        <form onSubmit={addPost}>
          <div className="input-group mb-3">
            <label htmlFor="task" className='farm-label m-3'>Post</label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" value={newPost} onChange={e => setNewPost(e.target.value)} />

              <button className='btn btn-outline-secondary' type='submit'> Click ME</button>
            </div>
          </div>
        </form>

        <ul className="list-group">
          {posts.map((post, index) => <li key={index} className="list-group-item d-flex justify-content-between">

            {post}
          </li>)}
        </ul>
      </div>
    </>
  )
}

export default App
