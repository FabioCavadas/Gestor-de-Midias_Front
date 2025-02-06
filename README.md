# gestor-de-midias-front

### Estrutura do projeto
```
src/
├── assets/
├── components/
│   ├── Header.vue   
│   └── MediaGallery.vue
├── router/
│   └── index.js
└── services/
│   ├── api.js   axios/baseURL/interceptors
│   └── auth.js  gerenciamento do token     
└── views/
│   ├── Login.vue
│   └── Register.vue
├── App.vue
├── main.js
	
```

### Criar a pasta para o projeto
```
mkdir Gestor-de-Midias-Front
```

### Criar projeto com Vue.js 2 e Vue CLI:
```
npm install -g @vue/cli
vue create gestor-de-midias-front
```

### Passos para instalação do vueCli:

https://cli.vuejs.org/guide/installation.html

### Ao final da instalação será apresentado a msg:
🎉  Successfully created project gestor_de_midias_front.
👉  Get started with the following commands:

### Acessar a pasta raiz do Projeto:
```
cd gestor-de-mídias-front
```
### Rodar o projeto Vue.js
```
npm run serve
```
iniciará o servidor do Vue.js na porta padrão http://localhost:8080.

### Removendo dependências do eslint:
```
npm uninstall @vue/cli-plugin-eslint eslint-plugin-vue @babel/eslint-parser
```
### Instalar Axios
```
npm install axios
```
### Instalar o Vue router
```
npm install vue-router@3 - compatível com o vue.js2
```
Compatível com o vue.js2.

### Próximos passos, criação dos components, router, services e views.

