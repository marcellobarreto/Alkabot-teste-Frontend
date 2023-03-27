import { userGet, userGetId } from '../service/api'
import { useEffect, useState } from 'react'

export default function Users() {
  const [userPaginar, setUserPaginar] = useState([])
  const [user, setUser] = useState([])
  const [setUsers] = useState([])
  const [idUser, setIdUser] = useState([])

  useEffect(() => {
    userGet().then(result => {
      setUserPaginar(result.data)
      const paginar = result.data.length / 10
      var qtd = []
      for (let index = 0; index < paginar; index++) {
        qtd.push({ index: index + 1, value: index })
      }

      setUsers(result.data.slice(0, 20))
    })
  }, [])
  function perfil(id) {
    if(id != idUser){
      setIdUser(id)
      userGetId(id).then(result => {
        setUser([result.data])
      })
    } else {
      setIdUser(null)
      setUser([])
    }
  }

  return (
    <div class="flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md">
      <ul class="-mx-4">
        {userPaginar.map(item => (
          <>
            <li class="flex items-center">
              <p>
                <a
                  class="text-gray-700 font-bold mx-1 hover:text-gray-500"
                  onClick={() => perfil(item.id)}
                  href="#"
                >
                  {item.name}
                </a>
                <span class="text-gray-700 text-sm font-light">
                  {item.username}
                </span>
              </p>
            </li>
            {user.map(itens => {
              switch (item.id) {
                case itens.id:
                  return (
                    <div class="-mt-4">
                      <div class="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
                        <div>
                          <a class="">
                            <b>Área de atuação:</b> {itens.company.bs}
                          </a>
                          <br />
                          <a class="">
                            <b>Website:</b> {itens.website}
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                default:
                  return ''
              }
            })}
          </>
        ))}
      </ul>
    </div>
  )
}
