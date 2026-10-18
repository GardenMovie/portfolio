---
title: Finalmente escrevi código para o projeto de monitoramento. 🙌
date: 2026-05-02T15:39:43
linkedin: https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7456366824155185152
---

Após definir a arquitetura do projeto nos últimos posts, comecei a desenvolver o script que coleta os dados para o projeto de monitoramento

O Schema já mudou algumas vezes, e vai continuar mudando, mas a estrutura geral já foi decidida.

timestamp (BSON Date) - Tipo nativo do MongoDB, index e expiração por TTL funcionam out of the box.

metadata - Informação que vai ser mantida nos rollups, no momento guarda o Host que enviou os dados, permitindo o uso de múltiplas máquinas.

fields - Pares de chave e valor (CPU, RAM, disco, etc), são os dados que vão ser agregados nas pipelines.

Primeira camada foi feita, agora vou focar em:

- Lidar com erros
- Queue para POSTs que falham
- Pipelines de agregação

O código está no meu GitHub (heweyMonitor)
