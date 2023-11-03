/* Rotas de Autenticação --- arq. que cria as rotas de autenticação;
                            só é interessante o usuário acessar elas, quando NÃO estiver logado na aplicação
                            é um arq. separado de "Rotas da Aplicação", pra evitar que o usuário acesse os dados enquanto não estiver logado */


import { Routes, Route, Navigate } from "react-router-dom"

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'


export function AuthRoutes() {

  const user = localStorage.getItem("@rocketnotes:user")
    /* comando pra pegar o usuário direto do "localStorage";
       pois pra funcionar aqui, user não pode vir do Context (como ainda está em Auth, vai dar "user" sempre nulo) */
  
  return(
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      { !user && <Route path="*" element={<Navigate to="/" />} /> }
    </Routes>
  )
}

/* <Route path="*"/> --- Route Fallback;
                         essa rota (path="*") serve pra direcionar as rotas que não levam a nenhum lugar, até "element"
                         Navigate --- Component que direciona a pág. pra algum endereço (através da prop "to") */

/* {!user && ...} --- comando pra dizer que essa Route Fallback só será renderizada se o "user" for nulo;
                      serve pra não deixar a pág. ir pra SignIn ("to=/") do Auth, se já estiver logada no usuário */
