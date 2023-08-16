export default function Navbar() {
  return (
    <div className="bg-red-400 text-white w-48 h-screen">
        
      <div className="flex flex-col text-center text-xl font-mono">
      <div className="mt-4 mb-4 p-2 font-bold">FrutaControl</div>
        <button className="mt-8 mb-4 p-2 ">
          <i className="">Cadastro</i>
        </button>
        <button className="mb-4 p-2">
          <i className="">Procurar</i>
        </button>
        <button className="mb-4 p-2">
          <i className="fas fa-home">Finanças</i>
        </button>
      </div>
    </div>
  );
}
