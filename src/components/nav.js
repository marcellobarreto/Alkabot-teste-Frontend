export default function Nav() {
  return (
    <>
      <nav class="bg-white px-6 py-4 shadow">
        <div class="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between">
          <div class="flex justify-between items-center">
            <div>
              <a class="text-gray-800 text-xl font-bold md:text-2xl" href="/">
                Alkabot
              </a>
            </div>
            <div></div>
          </div>
          <div class=" flex-row md:-mx-4">
            <a
              class="my-1  text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
              href="/Home"
            >
              Home
            </a>
            <a
              class="my-1 ml-6 lg:ml-0 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
              href="/Home"
            >
              Blog
            </a>
            <a
              class="my-1 ml-6 lg:ml-0 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
              href="/About"
            >
              About us
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
