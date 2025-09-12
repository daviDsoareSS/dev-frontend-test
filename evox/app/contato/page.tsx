export const metadata = {
  title: 'Contato',
  description: '',
};

import Form from 'next/form'
import Link from 'next/link';
import { email, endereço, phone } from '../utils/constants';
import Breadcrumb from '../components/Breadcrumb';

export default function Contato() {
    return (
      <section>
        <Breadcrumb 
          title_page="Contato"
          banner="/assets/images/hero1.webp"
        />
        <div className="py-20 w_content flex flex-wrap justify-between">
          <div className="basis-140">
            <div className="mb-4">
              <h2 className="mb-2 text-2xl font-semibold">Ficou alguma dúvida?</h2>
              <p className="text-sm text-neutral-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet fugit aut saepe debitis maxime velit laborum distinctio molestiae accusantium sapiente, at quos, eos necessitatibus! Dicta est voluptas quaerat quo?
              </p>
              <Form action="/">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-wrap gap-2">
                  </div>
                  <div >
                    <label className="text-xs font-semibold block mb-2" htmlFor="name">Primeiro nome</label>
                    <input id="name" className="input_style" placeholder="Digite seu primeiro nome" type="text"/>
                  </div>
                  <div >
                    <label className="text-xs font-semibold block mb-2" htmlFor="lastname">Sobrenome</label>
                    <input id="lastname" className="input_style" placeholder="Digite seu sobrenome" type="text"/>
                  </div>
                  <div>
                    <label className="text-xs font-semibold block mb-2" htmlFor="name">E-mail</label>
                    <input className="input_style" placeholder="Digite seu e-mail" type="email"/>
                  </div>
                  <div>
                    <label className="text-xs font-semibold block mb-2" htmlFor="message">Mensagem</label>
                    <textarea className="input_style py-3!" name="" id="message" rows={7} placeholder='Escreva sua mensagem aqui'></textarea>
                  </div>
                </div>
                <div className="flex items-start gap-2 my-6">
                  <input type="checkbox" name="terms" id="terms" />
                  <label className='text-xs' htmlFor="terms">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ea qui aut esse illo cumque, eos vitae autem officiis tempore saepe ad quisquam omnis debitis et facilis, optio delectus? Natus!
                  </label>
                </div>
                <button className="bg-(--color_primary) cursor-pointer rounded-lg py-3 px-6 text-sm text-white" type="submit">Enviar mensagem</button>
              </Form>
            </div>
          </div>
          <div className="basis-120 bg-sky-50 p-10 pb-16 rounded-4xl h-fit block">
            <div className="mb-10">
              <h3 className="text-xl font-medium mb-2">Get in touch</h3>
              <p className='text-neutral-600 text-sm leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, maxime ipsum necessitatibus</p>
            </div>
            <ul className='flex flex-wrap flex-col gap-10'>
              {/* ENDEREÇO */}
              <li className='flex items-center gap-4'>
                <span className='rounded-full w-11 h-11 flex items-center justify-center bg-(--color_primary) text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                  </svg>
                </span>
                <div className="flex flex-col gap-1">
                  <h4 className='text-base font-medium mb-1'>Endereço</h4>
                  <Link 
                    className='text-neutral-600 text-sm' 
                    href=""
                  >
                    {endereço}
                  </Link>
                </div>
              </li>

              {/* TELEFONE */}
              <li className='flex items-center gap-4'>
                <span className='rounded-full w-11 h-11 flex items-center justify-center bg-(--color_primary) text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </span>
                <div className="flex flex-col gap-1">
                  <h4 className='text-base font-medium mb-1'>Telefone</h4>
                  <Link 
                    className='text-neutral-600 text-sm' 
                    href=""
                  >
                    {phone}
                  </Link>
                </div>
              </li>

              {/* EMAIL */}
              <li className='flex items-center gap-4'>
                <span className='rounded-full w-11 h-11 flex items-center justify-center bg-(--color_primary) text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>

                </span>
                <div className="flex flex-col gap-1">
                  <h4 className='text-base font-medium mb-1'>E-mail</h4>
                  <Link 
                    className='text-neutral-600 text-sm' 
                    href=""
                  >
                    {email}
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
}