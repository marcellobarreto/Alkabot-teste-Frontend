import { postsGet, postsGetId } from '../service/api'
import { useEffect, useState } from 'react'

export default function Post() {
  const [postsPaginar, setPostsPaginar] = useState([])
  const [comments, setComments] = useState([])
  const [postsCount, setPostsCount] = useState([])
  const [posts, setPosts] = useState([])
  const [paginacao, setPaginacao] = useState(0)
  const [previous, setPrevious] = useState(true)
  const [next, setNext] = useState(false)

  useEffect(() => {
    postsGet().then(result => {
      setPostsPaginar(result.data)
      const paginar = result.data.length / 10
      var qtd = []
      for (let index = 0; index < paginar; index++) {
        qtd.push({ index: index + 1, value: index })
      }
      setPostsCount(qtd)
      setPosts(result.data.slice(0, 10))
    })
  }, [])

  function avancar(_count, nextOrPrevious) {
    if (nextOrPrevious == 'previous') {
      setPosts(postsPaginar.slice(paginacao * 10 - 10, paginacao * 10))
      setPaginacao(paginacao - 1)
    } else if (nextOrPrevious == 'next') {
      setPosts(postsPaginar.slice(paginacao * 10 + 10, paginacao * 10 + 20))
      setPaginacao(paginacao + 1)
    } else {
      setPosts(postsPaginar.slice(_count * 10, _count * 10 + 10))
      setPaginacao(_count)
    }
    // console.log(paginacao, _count)
    // if(paginacao <= 1|| _count <= 0){
    //   setPrevious(true)
    // }else if (paginacao >= 10 || _count >= 9){
    //   setNext(true)
    // }else{
    //   setPrevious(false)
    //   setNext(false)
    // }
  }

  function coment(id) {
    if (id != null) {
      postsGetId(id).then(result => {
        setComments(result.data)
      })
    } else {
      setComments([])
    }
  }

  return (
    <>
      {posts.map(item => (
        <div class="mt-6">
          <div class="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
            <div class="flex justify-between items-center">
              <span class="font-light text-gray-600">Post : {item.id}</span>
              <a class="px-2 ml-8 lg:ml-0 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">
                {item.title}
              </a>
            </div>
            <div class="mt-2">
              <a class="text-2xl text-gray-700 font-bold ">{item.body}</a>
            </div>
            <div class="flex justify-between items-center mt-4">
              <button
                class="text-xs rounded-full px-4 lg:px-12 py-2 text-white  md:text-lg"
                style={{ backgroundColor: '#376c74' }}
                onClick={() => {
                  coment(item.id)
                }}
              >
                {item.id} - Abrir Comentarios
              </button>
              <button
                class="text-xs rounded-full px-4 lg:px-12 py-2 text-white  md:text-lg"
                style={{ backgroundColor: '#376c74' }}
                onClick={() => {
                  coment(null)
                }}
              >
                Fechar Comentarios
              </button>
            </div>
          </div>
          {comments.map(itens => {
            switch (item.id) {
              case itens.postId:
                return (
                  <div class="mt-6" v-for="post in posts">
                    <div class="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
                      <div class="mt-2">
                        <a class="">
                          <b>{itens.name}</b>
                          <br />
                          <br />
                        </a>
                        <a class="">{itens.body}</a>
                      </div>
                    </div>
                  </div>
                )
              default:
                return ''
            }
          })}
        </div>
      ))}

      <div class=" py-6 ">
        <ul class="flex justify-center">
          {/* <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg"> */}
          <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
            <button
              type="button"
              class="flex items-center font-bold"
              onClick={() => avancar(null, 'previous')}
              // disabled={previous}
            >
              previous
            </button>
          </li>
          {postsCount.map(item => (
            <li
              onClick={() => avancar(item.value)}
              className={
                paginacao == item.value
                  ? 'hidden  lg:block mx-1 px-3 py-2 bg-gray-700 text-gray-200  rounded-lg'
                  : 'hidden  lg:block mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg'
              }
            >
              <a class="font-bold">{item.index}</a>
            </li>
          ))}
          <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
            <button
              type="button"
              class="flex items-center font-bold"
              onClick={() => avancar(null, 'next')}
              // disabled={next}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}
