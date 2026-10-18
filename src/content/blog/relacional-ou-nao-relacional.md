---
title: Relacional ou não relacional. eis a questão 🤔
date: 2026-04-02T23:06:26
linkedin: https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7445607605521002496
---

Ano passado cursei Modelagem de Bancos de Dados na UFABC, aprendi tanto sobre bases de dados relacionais e não relacionais e gostei bastante do assunto. Naturalmente para monitorar meu homelab, preciso de algum lugar para guardar essas métricas.

Dados de métricas de servidor são naturalmente organizados por tempo e raramente precisam de relacionamentos complexos entre eles. Uma database relacional até funcionaria, mas eu estaria usando a ferramenta errada para o trabalho.

Por isso escolhi usar o MongoDB Atlas, o plano gratuito é mais do que o suficiente para os meus objetivos e me permite trabalhar com time-series collections, que é otimizado para use-cases como o meu com compressão automática de dados e queries eficientes para janelas de tempo.

No próximo post do projeto vou falar sobre como aggregation pipelines nativas podem ser usadas para controlar o volume de dados.
