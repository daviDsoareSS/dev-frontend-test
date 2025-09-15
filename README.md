# Evox Tecnologia que acolhe (automação residencial)
---
**Stack escolhida:** Next.js + Tailwind CSS

Justificativa: Decidi desenvolver meu projeto em **Next.js** devido à familiaridade que tenho com o framework e à sua eficiência na manipulação de SEO e pré-rendering de páginas. Além disso, utilizei a oportunidade para aprofundar meus conhecimentos em **Tailwind** na questão da responsividade.

---
## Instruções para instalação/execução

Primeiramente muito obrigado pela oportunidade de estar participando desse processo seletivo, agradeço desde já.

Para iniciar clone o projeto na sua máquina e abra ele com algum editor de código de sua preferência. Em seguida digite no terminal:

```bash
cd evox
```
Depois

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```
obs.: Caso dê algum erro relacionado ao npm, digite no terminal: **node install**.

Logo em seguida acesse o link: http://localhost:3000

---
## Principais práticas de SEO aplicadas

- Meta title e description;
- Open graph e Twitter cards;
- Link canonical;
- Sitemap;
- Uso de h1, h2, h3;
- Textos alternativos em imagens e links;
- Responsividade;

---
## API Utilizada (ViaCep)

Foi utilizado o hook do React chamado **useState** para controlar o estado do formulário e do valor do CEP. Criei uma função **formatCep** para padronizar o CEP no formato XXXXX-XXX. No evento **onChange** do input, formatei o CEP e, quando ele atinge 8 dígitos, faço uma requisição GET para a API do ViaCEP usando **Axios**. Se o retorno não contém erro, atualizo os campos do formulário (rua, bairro, cidade, estado) com os dados recebidos. Caso o CEP não seja encontrado, é exibido um alerta.

---