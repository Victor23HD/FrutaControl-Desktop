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
       <div className='bg-green-200 flex absolute items-center justify-center h-screen w-screen '>
        <div className='flex-col bg-white rounded-lg flex items-center justify-center shadow-lg p-6 '>
          <div className='font-semibold text-xl mb-6'>
            FrutaControl
          </div>

          <form className="flex flex-col items-center outline-none">
            <label className='text-lg font-sans'>
              Usuário
              <input className='block border-b border-gray-500 mb-6 outline-none' type="text" name="name" placeholder='Digite seu e-mail'/>
            </label>
            <label className='text-lg font-sans'>
              Senha
              <input className='block border-b border-gray-500 mb-8 outline-none' type="password" name="password" placeholder='Digite sua senha'/>
            </label>
            <input onClick={handleFormSubmit} className='bg-green-400 p-2 px-3 rounded-lg font-sans' type="submit" value="Enviar" />
          </form> 
        </div>
      </div>
    </>
  );
}
