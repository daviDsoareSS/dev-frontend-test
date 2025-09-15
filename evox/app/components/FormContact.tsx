"use client";

import { useState } from "react";
import axios from "axios";

import Form from 'next/form'
import Link from 'next/link';
import { email, endereço, phone, whatsapp } from '../utils/constants';

export default function FormContact() {
  const [value, setValue] = useState('');

  const [form, setForm] = useState({
    cep: "",
    rua: "",
    bairro: "",
    cidade: "",
    estado: ""
  });

  // FORMATA O CEP
  const formatCep = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, "");
    if (onlyNumbers.length <= 5) return onlyNumbers;
    return onlyNumbers.slice(0, 5) + "-" + onlyNumbers.slice(5, 8);
  };

  // ATUALIZA O CAMPO DE NUMERO
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Remove qualquer caractere que não seja um dígito (0-9)
    const numericValue = inputValue.replace(/\D/g, '');
    setValue(numericValue);
  };

  // ATUALIZA O FORM
  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formatted = formatCep(rawValue);
    setForm({ ...form, cep: formatted });

    const numericCep = formatted.replace("-", "");
    if (numericCep.length === 8) {
      fetchAddress(numericCep);
    }
  };

  // FUNÇÃO PARA BUSCAR O ENDEREÇO
  const fetchAddress = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.data.erro) {
        setForm((prev) => ({
          ...prev,
          rua: response.data.logradouro,
          bairro: response.data.bairro,
          cidade: response.data.localidade,
          estado: response.data.uf
        }));
      } else {
        alert("CEP não encontrado!");
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  };

    return (
      <>
        <div className="contact py-10 w_content flex flex-col gap-10 justify-between md:flex-row md:py-20">
          <div className="basis-1/1 md:basis-140">
            <div className="mb-4">
              <h2 className="mb-4 text-2xl font-semibold">
                Ficou alguma dúvida?
              </h2>
              <p className="text-sm text-neutral-600 mb-10">
                Estamos aqui para ajudar! Se tiver qualquer dúvida sobre nossos serviços de automação residencial, soluções inteligentes ou instalação, entre em contato. Nossa equipe irá responder rapidamente e fornecer todas as informações que você precisa para tornar sua casa mais conectada e segura.
              </p>
              <Form action="/">
                <div className="flex flex-col gap-5">
                  <div className="flex gap-4 justify-between items-center">

                    {/* PRIMEIRO NOME */}
                    <div className="w-full">
                      <label className="text-xs font-semibold block mb-2" htmlFor="name">
                        Primeiro nome <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input 
                        id="name" 
                        className="input_style" 
                        placeholder="Digite seu primeiro nome" 
                        type="text"
                        required
                        autoComplete="given-name"
                      />
                    </div>

                    {/* SOBRENOME */}
                    <div className="w-full">
                      <label className="text-xs font-semibold block mb-2" htmlFor="lastname">Sobrenome</label>
                      <input 
                        id="lastname" 
                        className="input_style" 
                        placeholder="Digite seu sobrenome" 
                        type="text"
                        autoComplete="family-name"  
                      />
                    </div>
                  </div>


                  {/* EMAIL */}
                  <div>
                    <label className="text-xs font-semibold block mb-2" htmlFor="email">
                      E-mail <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input 
                      id="email"
                      className="input_style" 
                      placeholder="Digite seu e-mail" 
                      type="email"
                      required
                      autoComplete="email"  
                    />
                  </div>
                  
                  {/* SERVIÇO DE INTERESSE */}
                  <div>
                    <label className="text-xs font-semibold block mb-2" htmlFor="service">
                      Serviço de interesse <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <select 
                      className="input_style" 
                      name="service" 
                      id="service" 
                      defaultValue="select_service"
                    >
                      <option value="select_service" disabled>Selecione o serviço</option>
                      <option value="">Iluminação inteligente</option>
                      <option value="">Segurança e monitoramento</option>
                      <option value="">Energia sustentável</option>
                    </select>
                  </div>
                  
                  {/* ENDEREÇO */}
                  <div>
                    <label className="text-xs font-semibold block mb-2" htmlFor="cep">
                      CEP <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      className="input_style"
                      type="text"
                      id="cep"
                      name="cep"
                      placeholder="CEP"
                      value={form.cep}
                      onChange={handleCepChange}
                      maxLength={9}
                      required
                      autoComplete="postal-code"
                    />
                  </div>
                  <div className="flex gap-4 justify-between items-center">
                    <div className="w-full">
                      <label className="text-xs font-semibold block mb-2" htmlFor="rua">
                        Rua <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        className="input_style"
                        type="text"
                        id="rua"
                        name="rua"
                        placeholder="Rua"
                        value={form.rua}
                        onChange={handleCepChange}
                        required
                        autoComplete="address-line1"
                      />
                    </div>
                    <div className="w-full">
                      <label className="text-xs font-semibold block mb-2" htmlFor="bairro">
                        Bairro <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        className="input_style"
                        type="text"
                        id="bairro"
                        name="bairro"
                        placeholder="Bairro"
                        value={form.bairro}
                        onChange={handleCepChange}
                        required
                        autoComplete="address-level2"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 justify-between items-center">
                    <div>
                      <label className="text-xs font-semibold block mb-2" htmlFor="cidade">
                        Cidade <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        className="input_style"
                        type="text"
                        id="cidade"
                        name="cidade"
                        placeholder="Cidade"
                        value={form.cidade}
                        onChange={handleCepChange}
                        required
                        autoComplete="address-level2"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold block mb-2" htmlFor="estado">
                        Estado <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        className="input_style"
                        type="text"
                        id="estado"
                        name="estado"
                        placeholder="Estado"
                        value={form.estado}
                        onChange={handleCepChange}
                        required
                        autoComplete="address-level1"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold block mb-2" htmlFor="numero">
                        Número <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        className="input_style"
                        type="text"
                        id="numero"
                        name="numero"
                        placeholder="Número"
                        value={value}
                        onChange={handleInputChange}
                        required
                        autoComplete="address-line2"
                      />
                    </div>
                  </div>

                  {/* MENSAGEM */}
                  <div>
                    <label className="text-xs font-semibold block mb-2" htmlFor="message">
                      Mensagem <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea 
                      className="input_style py-3!" 
                      name="" 
                      id="message" 
                      rows={7} 
                      placeholder='Escreva sua mensagem aqui'
                    ></textarea>
                  </div>
                </div>

                {/* TERMOS */}
                <div className="flex items-start gap-2 my-6">
                  <input 
                    type="checkbox" 
                    name="terms" 
                    id="terms" 
                    required
                  />
                  <label className='text-xs' htmlFor="terms">
                      Li e concordo com os termos e condições do serviço, compreendendo que meus dados poderão ser utilizados para contato, envio de informações, ofertas personalizadas e melhorias no atendimento. Estou ciente de que posso solicitar a atualização ou exclusão dos meus dados a qualquer momento.
                  </label>
                </div>
                <button 
                  className="bg-(--color_primary) cursor-pointer rounded-lg py-3 px-6 text-sm text-white" 
                  type="submit"
                >
                  Enviar mensagem
                </button>
              </Form>
            </div>
          </div>

          {/* BOX WIDGETS */}
          <div className="basis-120 border-t-5 border-(--color_secondary) py-8 pb-16 h-fit block md:border-l-5 md:border-t-0 md:p-8">
            <div className="mb-10">
              <h3 className="text-xl font-medium mb-2">
                Entre em contato
              </h3>
              <p className='text-neutral-600 text-sm leading-6'>
                Fale conosco pelos canais abaixo e nossa equipe terá prazer em ajudar você a tornar sua casa mais conectada e segura.
              </p>
            </div>
            <ul className='flex flex-wrap flex-col gap-10'>
              {/* ENDEREÇO */}
              <li>
                <Link 
                  className='group flex items-center gap-4' href="/" target="_blank"
                  aria-label="Endereço"
                >
                  <span className='rounded-full w-11 h-11 flex items-center justify-center bg-(--color_primary) text-white transition-colors duration-500 group-hover:bg-(--color_secondary)'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                    </svg>
                  </span>
                  <div className="flex flex-col gap-1">
                    <h4 className='text-base font-medium mb-1'>Endereço</h4>
                    <p className='text-neutral-600 text-sm'>
                      {endereço}
                    </p>
                  </div>
                </Link>
              </li>

              {/* TELEFONE */}
              <li>
                <Link 
                  className='group flex items-center gap-4' href={whatsapp} target="_blank"
                  aria-label="Ir para o WhatsApp"
                >
                  <span className='rounded-full w-11 h-11 flex items-center justify-center bg-(--color_primary) text-white transition-colors duration-500 group-hover:bg-(--color_secondary)'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </span>
                  <div className="flex flex-col gap-1">
                    <h4 className='text-base font-medium mb-1'>Telefone</h4>
                    <p className='text-neutral-600 text-sm'>
                      {phone}
                    </p>
                  </div>
                </Link>
              </li>

              {/* EMAIL */}
              <li>
                <Link 
                  className='group flex items-center gap-4' href={`mailto:${email}`} target="_blank"
                  aria-label="Ir para o email"
                >
                  <span className='rounded-full w-11 h-11 flex items-center justify-center bg-(--color_primary) text-white transition-colors duration-500 group-hover:bg-(--color_secondary)'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <div className="flex flex-col gap-1">
                    <h4 className='text-base font-medium mb-1'>E-mail</h4>
                    <p className='text-neutral-600 text-sm'>
                      {email}
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    )
}