  <p align="center">
<img align="center" alt="Trakto" src="https://www.trakto.io/wp-content/uploads/2019/11/logotipo1.png" />
</p>


Imagine que você trabalha em uma software house que foi contratada para desenvolver um sistema para uma creche escolar.
Nesta creche você foi escalado como fullstack para o projeto para resolver um problema da empresa quanto a organização de alunos em sala de aulas.
Seguem abaixo as definições levantadas junto com os analistas:

1. O sistema deve ser feito usando o framework Angular 7+;
2. Realizar login com Firebase Authentication;
3. Realizar persistência dos registros utilizando o Firebase Firestore;
4. Disponibilizar o código em um repositório aberto no Github;
5. O sistema deve contar com uma tela de login e registro onde os usuários são professores que irão informar o e-mail e senha;
6. Implementar testes unitários para as features propostas;

## 🚀 Como Iniciar

Antes de Iniciar, devemos instalar as dependências então rode o comando:
```
$ npm install
```

Antes de Iniciar, devemos preencher as credenciais do firebase no arquivo environment.ts:

```
  firebase: {
    apiKey: "<your-key>",
    authDomain: "<your-project-authdomain>",
    databaseURL: "<your-database-URL>",
    projectId: "<your-project-id>",
    storageBucket: "<your-storage-bucket>",
    messagingSenderId: "<your-messaging-sender-id>",
  },
  ```
Para iniciar o sistema em desenvolvimento, rode o comando:

```
$ npm start
```


## :wrench: Tecnologias utilizadas

-  [Angular](https://angular.io/)
-  [Angular Fire](https://github.com/angular/angularfire)
-  [Angular Material](https://material.angular.io/)
-  [Angular flexLayout](https://github.com/angular/flex-layout)
-  [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

---

feito com ♥ por Joédyson Bezerra :wave: [Entra em contato!](https://www.linkedin.com/in/joedyson-bezerra/)

[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
