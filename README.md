![image](https://www.figma.com/file/V4KBfNgh5Ig838bT7kfuKU/Untitled?type=design&node-id=53-10&mode=design&t=o2FasUxgzxNZkSmA-4)

# PROJECT CONTROLLER
Sistema de Controle de Projeto de Obras

## 📌 Introdução
O sistema em questão foi criado com a ideia de ser uma ferramenta para auxiliar no controle de projetos de obras de construção. <br>
A ideia do sistema é ajudar a ter controle de projetos iniciados e concluídos, clientes e fornecedores cadastrados. <br>

### ⚙️ Pré-requisitos para rodar o sistema

- Necessário ter instalado o Node >= v20.5.0. <br>
- Necessário ter o GIT instalado na máquina local. <br>
- Necessário uma IDE ou um Editor de Código de sua preferência. <br>
- Necessário a v10.5.0 do npm. <br>

### 💻 Tecnologias e ferramentas utilizadas:

**Front-End:**

- ReactJS
- JavaScript
- Modules CSS
- Kendo UI
- json-server
- npm

### 🛠️ Guia de Instalação

Para executar o projeto na sua máquina, são necessários alguns passos.

Antes de tudo, entre no diretório da sua máquina onde deseja clonar o projeto e execute o comando através do terminal:

``
git clone https://github.com/gabrieldickman/project-controller.git
``

Após feito isso, entre na pasta do projeto e execute a instalação das dependências através do terminal:

``
npm install react-router-dom
``
``
npm install react-icons
``
``
npm install json-server
``
``
npm install --save @progress/kendo-react-grid @progress/kendo-data-query @progress/kendo-react-data-tools @progress/kendo-react-inputs @progress/kendo-react-intl @progress/kendo-react-dropdowns @progress/kendo-react-dateinputs @progress/kendo-drawing @progress/kendo-react-animation @progress/kendo-licensing @progress/kendo-react-buttons @progress/kendo-react-treeview @progress/kendo-react-popup @progress/kendo-svg-icons
``
``
npm install --save @progress/kendo-theme-default
``

Após finalizar a instalação das dependências, navegue até a pasta src/api através do terminal para inciar o json-server e execute o comando.
``
npx json-server -p 5000 db.json
``
``
NOTA: Você pode usar a porta de sua preferência, contanto que não seja a mesma do React que por padrão é 3000
``
Após iniar o json-server, execute o comando:
``
npm start
``
O projeto abrirá no navegador, mas caso não abra, ele estará acessivel em http://localhost:3000.
