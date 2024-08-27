import { useState } from 'react'

import './styles.css'

import { Card, CardProps } from '../../components/Card'

export default function Home() {
  const [studentName, setStudentName] = useState<string>('')
  const [students, setStudents] = useState<CardProps[]>([])

  function handleAddStudent() {
  if (studentName === "") return alert('O nome não pode estar vazio.')

    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    setStudents((prevState) => [...prevState, newStudent])
  }

  return (
    <div className='container'>
      <header>
        <h1>Lista de presença</h1>

        <div>
          <strong>Saulo Carvalho</strong>
          <img src="https://github.com/SauloCarvalho300.png" alt="foto do perfil" />
        </div>
      </header>

      <input
        type="text"
        placeholder='digite o nome ...'
        onChange={(event) => setStudentName(event.target.value)}
      />

      <button onClick={handleAddStudent}>Adicionar</button>

      {
        students.map((student) => {
          return (
            <Card key={student.time} name={student.name} time={student.time} />
          )
        })
      }

    </div>
  )
}