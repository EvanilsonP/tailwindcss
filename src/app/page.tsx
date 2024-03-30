// const Page = () => {
//   return (
//     <div>
//       <div className="text-blue-500 bg-green-500 border-2 border-white border-b-red-400 bg-blackRed">Olá, Mundo!</div>
//     </div>
//   )
// }

// export default Page;

// w -> width
// h -> height
// sm -> small
// const Page = () => {
//   return (
//     <div className="w-screen h-screen">
//       {/* <div className="bg-blue-600 w-1/3 h-full">1</div> */}
//       <div className="bg-blue-600 max-w-sm">1</div>
//       <div className="bg-blue-600 w-2/3 h-36">2</div>
//       <div className="bg-blue-600 w-3/3 h-36">3</div>
//     </div>
//   )
// }

// export default Page;

// // p padding
// // m marging
// // ml margin left / mb margin botton
// export default function Page() {
//   return (
//     <div>
//       <div className="bg-blue-600 w-36 h-36 p-2 m-2">1</div>
//       <div className="bg-blue-600 w-36 h-36">2</div>
//       <div className="bg-green-600 w-36 h-36 mt-36 ml-80">3</div>
//       <div className="bg-blue-950 w-36 h-36 my-8">4</div>
//     </div>
//   )
// }

// export default function Page() {
//   return (
//     <div className="w-screen h-screen p-5">
//       <div className="bg-gray-500  text-xl w-20 truncate">Um texto qualquer</div>
//       <div className="bg-gray-50 text-black text-xl w-20 line-clamp-3">Algum texto qlq que to usando aqui pq to na rpessa e nem to usando gramatica apropriada</div>
//     </div>
//   )
// }

// export default function Page() {
//   return (
//     <div className="w-screen h-screen p-5">
//       <div className="w-80 h-80 bg-gray-800 border-4 border-white border-l-blue-500 border-r-rose-500 rounded-full"></div>
//       <input className="w-80 outline-green-600"/>
//     </div>
//   )
// }

// exercicio botão
// export default function Page() {
//   return (
//     <div className="w-screen h-screen p-5">
//       <button className="bg-blue-500 text-white rounded-md px-5 py-2 border-none">Clique aqui</button>
//       <button className="px-5 py-2 rounded-md border border-blue-500 text-white rounded-xl">Clique aqui</button>
//     </div>
//   )
// }

// exercicio alerta
export default function Page() {
  return(
    <div className="w-screen h-screen p-5">
      <div className="bg-yellow-100 text-yellow-500 border-l-4 border-yellow-700 p-3">
        Você não tem mais acesso.
       <a className="underline ml-1 cursor-pointer">Faça o upgrade da sua conta.</a>
       </div>
    </div>
  )
}