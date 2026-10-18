---
title: Como que alguém cria uma conta no Breviare? 🤔
date: 2026-06-30T00:40:39
linkedin: https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7477521450556538880
---

Parafraseando Tom Scott: "Se você tem que guardar senhas, não guarde." E a frase faz tanto sentido hoje quanto quando foi dita 12 anos atrás. Quando uma aplicação recebe senhas, ela vira responsável por tudo que vem junto: hashing, salting, proteção dos dados, notificação de vazamentos, fluxo de recuperação de senha...

Então no Breviare eu optei pelo OAuth2 do Google. A aplicação nunca vê uma senha, só um token confirmando quem é o usuário e segue em frente.

Todos os problemas e preocupações ficam com o Google, que, convenhamos, é muito melhor nisso do que eu.
