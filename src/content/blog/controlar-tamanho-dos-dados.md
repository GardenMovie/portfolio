---
title: Como controlar o tamanho dos dados e manter a informação que eles te dão? ⌛
date: 2026-04-12T17:19:28
linkedin: https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7449144169303904256
---

Quando se coleta métricas de minuto em minuto, o volume de dados cresce rápido. E o valor dessa granularidade de informação se perde com o tempo.

Por isso, para o meu projeto vou usar um padrão de rollup, que é usado em sistemas como Prometheus, InfluxDB e Datadog. A ideia é extrair os dados de um grande volume de entradas e refinar para manter só as informações relevantes.

No meu caso vou guardar dados por minuto por 7 dias, rollup por hora por 90 dias, e rollup diário guardado para sempre (ou pelo menos pelos próximos 4.000 anos até acabar o espaço do plano gratuito).
