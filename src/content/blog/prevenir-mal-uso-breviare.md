---
title: Como previno o mal uso do Breviare 🛡️
date: 2026-06-13T23:56:41
linkedin: https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7471712177570381825
---

Um encurtador de URL sem a validação das entradas pode virar uma ferramenta de distribuição de malware, phishing e spam. Como o código esconde o endereço real é necessário avaliar os links antes de encurtar, para isso escolhi uma pipeline de 3 camadas:

**1 - Regex**

Valida se a URL tem formato válido e se ela aponta para outro código dentro do próprio sistema. Isso evita ciclos em que um código redireciona para outro, que redireciona para ...

**2 - Blocklist local**

Verifica se a URL está na TIF (Threat Intelligence Feeds) blocklist do Hagezi, atualizada diariamente com um cron job. Um lookup no banco de dados, sem chamadas externas

**3 - Google Safe Browsing API**

Último passo, e o mais custoso em tempo e poder computacional, a URL é enviada para a Safe Browsing API do google.

A lógica é usar checks mais caros somente quando necessário para a validação, 90% dos links maliciosos nunca chegam na API do Google.
