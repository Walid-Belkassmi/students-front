import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const student = { name: name }

    const request = await fetch('http://localhost:5000/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(student)
    })

    const response = await request.json()

    if (request.status === 201) {
      navigate(`/success/${response.name}`)
    } else {
      setError(response)
    }
  }

 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='name'
          type='text'
          value={name}
          onChange={handleNameChange}
        />
        <button type='submit'>Create student</button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};

export default Form;
