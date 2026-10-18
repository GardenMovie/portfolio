---
title: Como gerar um código curto evitando colisões? 🎲
date: 2026-06-06T14:12:43
linkedin: https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7469028502474969088
---

Quando estava modelando a parte dos links do projeto, foquei em códigos fáceis de lembrar. O resultado foram dois tipos de links com propósitos diferentes, códigos e vanity links.

Os códigos precisavam ser pequenos e preferencialmente limitados a letras maiúsculas e minúsculas. O algoritmo escolhido foi o base52 (modificação do base64) com output de 6 digitos, O resultado se mantém nos requisitos com baixa colisão, levando em conta a escala do projeto, devido as 52^6 (19 bilhões) de combinações possíveis.

Já os vanity links são ligados ao nome da conta do usuário. Para evitar abusos esse link vai ter um limite de trocas, por enquanto 5 por mês.

No próximo post vou falar sobre a validação de urls antes de serem processadas.

Inclusive, agora o projeto tem nome: Breviare, do latim, significa abreviar, achei bastante adequado.
