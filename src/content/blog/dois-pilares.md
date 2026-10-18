---
title: Os dois pilares do meu projeto. 🏗️
date: 2026-05-12T12:00:03
linkedin: https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7459935419686719488
---

Alguns posts atrás mencionei a minha estratégia de rollup para manter o volume de dados baixo porém manter as informações. Isso é possível por causa de duas features disponíveis no MongoDB.

O primeiro são TTL indexes (Time-To-Live), baseado no timestamp do documento e um limite, por exemplo 86400 segundos, a base de dados apaga todas entradas criadas a mais de um dia atrás. Cada coleção tem o seu para determinar quanto tempo guardar seus documentos.

O segundo são as aggregation pipelines, Ela analisa todos os documentos de uma coleção e, no meu caso, agrupa eles por hora ou por dia. Após isso ela funciona como uma linha de processamento de dados, resultando nos reports de hora em hora e de dia em dia.

Juntas essas duas features me permitem usar o padrão de rollup, criando os dados agregados e limitando o volume de dados em cada estágio.
