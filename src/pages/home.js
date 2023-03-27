import Post from './post'
import Users from './users'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <div id="app" class="font-roboto bg-gray-100">
        <Nav />

        <div class="px-6 py-8">
          <div class="flex justify-between container mx-auto">
            <div class="w-full lg:w-8/12">
              <div class="flex items-center justify-between">
                <h1 class="text-xl font-bold text-gray-700 md:text-2xl">
                  Postagens
                </h1>
              </div>
              <Post />
            </div>
            <div class="-mx-8 w-4/12 hidden lg:block">
              <div class="px-8">
                <h1 class="mb-4 text-xl font-bold text-gray-700">Usuários</h1>
                <Users />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
