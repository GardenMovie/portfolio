---
title: Falhe em se preparar e prepare-se para falhar. ⚔️
date: 2026-04-02T03:13:02
linkedin: https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7445307276401434624
---

Comecei a desenvolver um projeto de monitoramento do meu homelab. Tinha tudo planejado, IP local reservado com o DHCP e usar o DuckDNS para garantir o acesso externo, coleta e serviço de dados em um só lugar.

Mas quando olhei um pouco mais a fundo encontrei alguns problemas. Eu não consigo garantir que meu homelab estará disponível o tempo todo, nem que o DuckDNS vai ter um uptime bom e as alternativas que encontrei acarretariam em custos para o projeto.

Após alguns minutos de pânico achando que o projeto tinha acabado mesmo antes de começar. Eu decidi diminuir as responsabilidades do hardware mais instável.

Em vez de gerar e servir os dados, ele agora só vai exportar, quando puder, para uma database externa.

Com essa organização posso garantir que os dados passados estarão disponíveis para o frontend e o sistema inteiro fica mais resistente.
