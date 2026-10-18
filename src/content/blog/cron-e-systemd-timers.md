---
title: Cron é clássico, mas nem sempre resolve todos os problemas. ⏰
date: 2026-03-04T18:18:02
linkedin: https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7435025781593911297
---

Recentemente configurei um backup semanal usando Git para os meus vaults no Obsidian. Um setup simples:

- Vaults sincronizam usando Syncthing
- Cada vault é um Git repo.
- Uma vez por semana o sistema deve rodar add, commit e push pro repo no Github.

Qual foi meu primeiro instinto?

"Vou usar cron"

Afinal de contas Cron é \*A\* solução para esse tipo de problema não é?

No meu caso não, o problema é que o Cron assume que a máquina vai estar ligada no momento em que o job deve rodar, caso contrário aquela semana seria perdida.

Após pesquisar um pouco cheguei nos timers do systemd. A opção "persistent=true" era exatamente o que eu estava procurando.

Com um timer persistente eu garanto que o job vai rodar, caso a máquina esteja desligada no momento que ele está agendado para acontecer, ele vai ser executado no próximo boot, sem dor de cabeça.

Talvez até mais importante do que resolver meu problema, eu fui lembrado que a ferramenta que estamos acostumados nem sempre vai ser a melhor.

E aí, tem alguma task repetitiva que um systemd.timer resolveria?
