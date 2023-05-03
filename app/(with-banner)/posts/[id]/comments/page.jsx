
const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
    .then(response => response.json())
}
export default async function Comments ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)
  return (
    <ul style={{ background: '#d5d5d5' }}>
      {comments.map(comment => (
        <li key={comment.id} style={{ padding: '1rem' }}>
          <h5>{comment.name}</h5>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}
