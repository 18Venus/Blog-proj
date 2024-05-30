import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const Edit = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/blogs/${id}`)
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        setTitle(data.title);
        setBody(data.body);
        setAuthor(data.author);
      })
      .catch(err => {
        console.error(err);
        history.push('/'); // Redirect to home if there's an error
      });
  }, [id, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      history.push('/');
    });
  }

  return (
    <div className="create">
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          rows="15"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Update Blog</button>
      </form>
    </div>
  );
}

export default Edit;
