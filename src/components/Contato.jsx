import React from 'react';
import emailjs from 'emailjs-com';

const Contato = () => {
  const sendEmail = (e) => {
    e.preventDefault(); // Prevenir o comportamento padrão de submissão do formulário

    emailjs.sendForm('gabrielemail_service', 'template_ri59uve', e.target, 'a9TJPbwSl6OtqQdgz')
      .then((result) => {
          console.log(result.text);
          alert('Mensagem enviada com sucesso!');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          alert('Falha ao enviar mensagem, tente novamente.');
      });
  };

  return (
    <div className="flex justify-center my-5 h-full sm:h-[70vh] items-center" id='contato'>
        <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around">
                    <h1 className="text-4xl sm:text-5xl text-white">
                        Vamos fazer um projeto juntos? <span>Fale comigo!</span>
                    </h1>
                    <p className="text-normal text-lg sm:text-xl font-medium text-gray-400 mt-2">
                        Envie uma mensagem para o meu e-mail.
                    </p>
                </div>
                
                <form className="p-6 flex flex-col justify-center max-w-[700px]" onSubmit={sendEmail}>
                    <div className="flex flex-col">
                        <input type="text" name="name" id="name" placeholder="Nome Completo" className="w-100 mt-2 p-3 rounded-lg bg-gray-800 border-gray-700 text-white" />
                    </div>

                    <div className="flex flex-col">
                        <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-700 text-white" />
                    </div>

                    <div className="flex flex-col">
                        <textarea name="mensagem" id="mensagem" placeholder="Sua mensagem" className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-700 text-white"></textarea>
                    </div>

                    <button type="submit" className="bg-primary-color text-white py-3 px-6 rounded-lg mt-3">
                        Enviar
                    </button>        
                </form>
            </div>
        </div>
    </div>
  );
}

export default Contato;
