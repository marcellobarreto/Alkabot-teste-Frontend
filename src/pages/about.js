import Nav from '../components/nav'
import Footer from '../components/footer'

export default function About() {
  return (
    <>
      <Nav />

      <div class="px-6 py-8 w-12">
        <div class="flex justify-between w-4 container mx-auto">
          <div class="w-full lg:w-8/12">
            <div class="flex items-center justify-between">
              <div class="mb-8">
                <p class="text-sm text-gray-600 flex items-center">
                  <svg
                    class="fill-current text-gray-500 w-3 h-3 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Teste Pratico Frontend
                </p>
                <div class="text-xl font-bold mb-2 text-gray-700 md:text-2xl">
                  CENÁRIO 1 – FRONT END
                </div>
                <p class="text-gray-700 w-72 md:w-[200%] text-base">
                  A equipe recebeu uma demanda para desenvolver um front-end
                  para uma API RESTful. No cenário proposto, a interface deve
                  exibir posts de um blog e, ao clicar em um post, os
                  comentários associados.
                </p>{' '}
                <div class="text-gray-900 mt-4 font-bold text-xl mb-2">
                  SUA TAREFA
                </div>
                <p class="text-gray-700 w-72 md:w-[200%] text-base">
                  Você ficou responsável pela demanda e sua tarefa é projetar
                  uma interface para atender as necessidades. Os seguintes
                  serviços estão disponíveis:
                  <br />
                  ● Listagem de posts:
                  <br />
                  o https://jsonplaceholder.typicode.com/posts
                  <br />
                  ● Listagem de comentários de um post:
                  <br />
                  o https://jsonplaceholder.typicode.com/posts/
                  <br />
                  [ID]/comments
                  <br />
                  ● Listagem de usuários:
                  <br />
                  o https://jsonplaceholder.typicode.com/users
                  <br />
                  ● Detalhes de um usuário:
                  <br />
                  o https://jsonplaceholder.typicode.com/users/[ID]
                  <br />
                </p>
                <div class="text-gray-900 mt-4 font-bold text-xl mb-2">
                  AVALIAÇÃO TÉCNICA DA DEMANDA
                </div>
                <p class="text-gray-700 text-base">
                  1. Funcionamento da solução.
                  <br />
                  2. Organização do código (tipos de projetos, diretórios, nome
                  dos arquivos, etc...).
                  <br />
                  3. Organização do repositório no GitHub.
                  <br />
                  4. Coerência com a tarefa proposta.
                  <br />
                  5. Usabilidade.
                  <br />
                  6. Responsividade.
                  <br />
                  7. Uso de tecnologias/frameworks de mercado.
                </p>{' '}
                <div class="text-gray-900  mt-4 font-bold text-xl mb-2">
                  INFORMAÇÕES ADICIONAIS
                </div>
                <p class="text-gray-700 md:w-[200%] text-base">
                  1. Você deverá utilizar o GitHub como repositório para seu
                  código. Nenhum código armazenado no computador local será
                  utilizado para avaliação. <br />
                  2. Ao finalizar o teste envie um e-mail para
                  trabalheconosco@alkabot.com com a URL do repositório da
                  solução. <br />
                  3. Esteja livre para realizar pesquisas, entretanto caso você
                  não tenha familiaridade com algo requerido no teste não gaste
                  tempo com a atividade. a. O teste precisa demonstrar o que
                  você conhece efetivamente.
                  <br />
                  4. Lembre-se que o projeto será clonado do repositório para
                  avaliação e execução. Deixe todas as instruções necessárias
                  para a execução do código no arquivo README.md. Em caso de
                  problemas, a avaliação será prejudicada.
                  <br />
                  5. O nosso objetivo é selecionar pessoas capazes e que
                  consigam entregar soluções profissionais utilizando o que o
                  mercado apresenta de melhor. Sendo assim, demonstre seu
                  conhecimento nos pontos que achar necessário. Utilize
                  comentários no código caso queira ressaltar algo.
                  <br />
                  6. Caso julgue interessante acrescentar alguma funcionalidade
                  não solicitada, mas que vá demonstrar algum conhecimento e que
                  agregue fique à vontade, entretanto não se preocupe em
                  demonstrar tudo o que você conhece. Nosso objetivo é entender
                  se você
                </p>
                <div class="text-gray-900 mt-4 font-bold text-xl mb-2">
                  ENTREGÁVEIS
                </div>
                <p class="text-gray-700 text-base">
                  1. URL da aplicação funcionando.
                  <br />
                  2. URL do repositório.
                  <br />
                  3. Perfil.
                  <br />
                  4. Qual é a sua expectativa de valor para contratação no
                  modelo PJ?
                  <br />
                  5. Disponibilidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
