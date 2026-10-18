---
title: Algumas semanas atrás eu tinha um problema, aí eu tive vários problemas, agora tenho uma dashboard 😀
date: 2026-06-06T14:29:49
linkedin: https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7469032808603148288
---

Eu queria monitorar meu homelab e expor esses dados para a internet. A solução normal seria um serviço hosteado localmente coletando métricas, lidando com os dados e expondo eles para o mundo.

Mas isso não funcionaria, além do hardware ser limitado, eu não consigo garantir que ele vai sempre estar acessível pela internet por causa de mudanças de DNS ou faltas de energia na região.

Então pensei em inverter esse modelo, um script que coleta esses dados e envia eles para um banco de dados na nuvem. MongoDB foi escolhido por ser NoSQL e oferecer coleções indexadas por tempo, perfeitas para os dados incrementais e pouco modificados. Isso resolveu o problema de disponibilidade porém criou o do volume de dados.

Um documento por minuto rapidamente se torna 43.200 documentos por mês, uma granularidade de dados desnecessária. A solução pra isso foram pipelines de agregação e triggers agendados (nativos do MongoDB Atlas) que permitem a criação de documentos que representam uma hora ou dia inteiro, emulando o que sistemas de observabilidade de produção como Datadog e Prometheus fazem.

A peça final foi visualizar tudo isso. Uma aplicação Next.js que interage com a database e mostra as entradas recentes em cada fatia (minuto, hora, dia) para cada host conectado ao sistema.

O resultado final está bem longe da minha primeira ideia, e eu devo isso à uma limitação de infraestrutura que me ensinou muita coisa.

Inclusive o projeto tem nome agora: Vigilis, latim para "aquele que vigia". link no meu portfólio
