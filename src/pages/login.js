export default function Login() {
  return (
    <>
      <body class="antialiased bg-gray-200 text-gray-900 font-sans">
        <div class="flex items-center h-screen w-full">
          <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
            <span class="block w-full text-xl uppercase font-bold mb-4">
              Login
              <p class="text-sm text-red-500">
                Login não esta autenticando <br /> (clique em LOGIN para
                continuar)
              </p>
            </span>
            <form class="mb-4" action="/home">
              <div class="mb-4 md:w-full">
                <label for="email" class="block text-xs mb-1">
                  Username or Email
                </label>
                <input
                  class="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Username or Email"
                />
              </div>
              <div class="mb-6 md:w-full">
                <label for="password" class="block text-xs mb-1">
                  Password
                </label>
                <input
                  class="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <button
                class="bg-indigo-900 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
                style={{ backgroundColor: '#376c74' }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </body>
    </>
  )
}
