---
title: O "Two Sum" de system design? 🧐
date: 2026-06-01T19:18:55
linkedin: https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7467293623882219521
---

Recentemente li que um encurtador de urls ensina system design como o Two Sum do leetcode ensina algoritmos, o problema é simples, o valor se encontra nas maneiras de implementar ele.

Logo, decidi fazer um encurtador de url para testar a teoria.

A primeira decisão: qual vai ser a resposta do meu servidor para o usuário?

- 301 Moved permanently - O navegador guarda a resposta no cache e nunca mais pergunta
- 302 Found - O navegador sempre pergunta ao servidor, permitindo o rastreamento de cliques e expiração de links.

Eu escolhi a resposta 302, os dados valem o custo computacional

E a próxima decisão? Como gerar um código curto, evitando colisões.
