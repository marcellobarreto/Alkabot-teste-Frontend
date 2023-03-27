import Nav from '../components/nav'

export default function About() {
  return (
    <>
      <Nav />
      <div class="mt-6">
        <div class="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
          <div class="flex justify-between items-center">
            <span class="font-light text-gray-600">Post : </span>
            <a class="px-2 ml-8 lg:ml-0 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"></a>
          </div>
          <div class="mt-2">
            <a class="text-2xl text-gray-700 font-bold "></a>
          </div>
        </div>
      </div>
    </>
  )
}
