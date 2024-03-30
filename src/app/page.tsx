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

// p padding
// m marging
// ml margin left / mb margin botton
export default function Page() {
  return (
    <div>
      <div className="bg-blue-600 w-36 h-36 p-2 m-2">1</div>
      <div className="bg-blue-600 w-36 h-36">2</div>
      <div className="bg-green-600 w-36 h-36 mt-36 ml-80">3</div>
      <div className="bg-blue-950 w-36 h-36 my-8">4</div>
    </div>
  )
}