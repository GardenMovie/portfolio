---
title: Afinal o que é comprimir um arquivo? 🗃️
date: 2026-07-21T02:26:11
linkedin: https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7485158154448715776
---

Durante a matéria de Algoritmos e Estruturas de Dados II na UFABC, eu e meu grupo estudamos o comportamento de dois algoritmos de compressão: Huffman e LZW (Lempel-Ziv-Welch). Nosso objetivo era entender qual algoritmo é mais adequado para cada tipo de dado, e por quê.

Os dois operam no nível de bytes dos arquivos (sem fazer distinção entre uma foto ou um texto, por exemplo). O huffman usa a frequência dos símbolos para criar um dicionário, já o LZW constrói o dicionário enquanto lê, substituindo trechos repetidos.

Rodamos os dois em 5 datasets, cobrindo o espectro inteiro de redundância, O LZW venceu onde havia repetição de sequências e o Huffman onde não havia repetição, somente frequência.

Isso já era esperado, os dois não são equivalentes, na verdade em compressores como o DEFLATE (zip, gzip, PNG) os dois são utilizados em conjunto. Os nossos resultados mostram, na prática, as duas metades de um compressor real e não uma "briga" para ver quem é melhor.

Agradeço aos integrantes do grupo: Artur Teles Barbosa, Bruno Zujenas Ribeiro, Enzo Fujita, Felipe Ultramari Domingues, Lucas Roberto, Pedro Henrique

Link do repositório: <https://lnkd.in/evnt9-TC>
