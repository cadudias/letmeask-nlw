 import { useContext } from 'react'
 import { AuthContext } from '../contexts/AuthContext'

 // usado pra importar o contexto
 export function useAuth() {
  const value = useContext(AuthContext)

  return value
 }