import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();

  const handleFormSubmit = () => {
    // Aqui você pode adicionar qualquer lógica adicional antes de navegar
    navigate("/Home");
  };

  return (
    <>
      {/* LOGIN INTERFACE */}
      <div className="flex h-screen flex-col bg-green-300">
        <div className="m-auto bg-white rounded-xl grid grid-cols-2 shadow-lg">
          <form className="flex flex-col mx-auto p-8 px-12">
            <label className="text-center text-2xl font-semibold my-3 mb-6">
              Fruta-Control
            </label>
            <div className="flex flex-col">
              <label className="">Login</label>
              <input className="border-b border-gray-600 outline-none"></input>
              <label className="mt-3">Senha</label>
              <input className="border-b border-gray-600 outline-none" type="password"></input>
              <button className="bg-orange-200 mt-6 p-2 rounded-lg font-medium">
                Enviar
              </button>
            </div>
          </form>
          <div className="bg-[url('/src/Images/login_image.jpg)] bg-cover rounded-r-xl"></div>
        </div>
      </div>
    </>
  );
}
