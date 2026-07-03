---
title: Kontrola czasu
description: Najpopularniejsze systemy kontroli czasu w świecie Go.
---

Prawie wszystkie turnieje Go rozgrywane są z wykorzystaniem zegarów ograniczających długość gry. Istnieją różne systemy kontroli czasu, a wybór danego systemu zależy od organizatora lub sędziego turnieju. W założeniu wybór danego systemu kontroli czasu nie powinien wpływać na rozgrywkę, jednak w praktyce istnieją różne taktyki jak "korzystać z czasu" w danym systemie.

Wybór danego systemu może być podyktowany rangą turnieju, harmonogramem turnieju, popularnością danego systemu w kraju rozgrywania turnieju czy też dostępnością zegarów wspierających dany system.

Poniżej znajduje się lista najpopularniejszych systemów kontroli czasu wykorzystywanych podczas gry w Go.

# Fisher

System kontroli *Fisher* posiada dwa parametry: *czas podstawowy* oraz *bonus*. 

Czas gracza startuje od wartości *czasu podstawowego* i po zakończeniu każdego ruchu jest zwiększany o *bonus*.

:::note[Przykład]
Ustawienia to 45 minut czasu podstawowego i 15 sekund bonusu. Po wystartowaniu gry gracz grający kolorem czarnym zastanawiał się 1 minutę nad swym ruchem, przez co zmniejszył swój dostępny czas do `44:00`, jednak po zakończeniu ruchu czas gracza powiększa się o *bonus* - w tym wypadku 15 sekund. Gracz kończy zatem swój pierwszy ruch z czasem `44:15`.  
:::

:::tip[Taktyka]
Gdy jesteśmy pewni swojego ruchu lepiej wykonać go od razu, w szczególności gdy na zegarze zostało mało czasu. Dzięki temu grając szybko oczywiste ruchy możemy zgromadzić sobie dużo dodatkowego czasu, który wykorzystamy na ruchy trudniejsze.
:::

# Byo-yomi

System kontroli *byo-yomi* posiada trzy parametry: *czas podstawowy*, *liczba okresów* oraz *czas trwania okresu*. 

Gdy gracz wykorzysta już cały *czas podstawowy*, rozpoczyna się pierwszy, dodatkowy okres trwający tyle ile mówi *czas trwania okresu*. Jeżeli gracz zakończy swój ruch przed końcem *czasu trwania okresu*, to czas tego okresu jest resetowany i okres ten będzie mógł być wykorzystany ponownie - liczba dostępnych okresów nie zostaje zmniejszona. W przypadku wykorzystania całego *czasu trwania okresu* następuje rozpoczęcie kolejnego dodatkowego okresu. *Liczba okresów* określa ile okresów ma do dyspozycji gracz.

:::note[Przykład]
Ustawienia to 60 minut czasu podstawowego oraz 3 dodatkowe okresy po 30 sekund. Po wykorzystaniu całych 60 minut czasu podstawowego, gracz wchodzi w swój pierwszy okres dodatkowy trwający 30 sekund. Kolejny ruch trwał tylko 15 sekund, więc gdy przyjdzie znowu kolej tego gracza to nadal będzie miał dostępne 3 okresy po 30 sekund i ciągle będzie mógł wykorzystać całe 30 sekund pierwszego dodatkowego okresu. Niestety następny ruch zajął graczowi 45 sekund, zatem gracz "stracił" już 1 dodatkowy okres i pozostały mu tylko 2 dodatkowe okresy do wykorzystania.
:::

:::tip[Taktyka]
Gdy wykorzystamy już swój czas podstawowy i korzystamy już z dodatkowych okresów najlepiej wykorzystywać je do samego końca i kończyć swój ruch tuż przed końcem okresu. Przez to, że czas okresu resetuje się za każdym razem, to nie ma znaczenia czy wykorzystamy z niego tylko 1 sekundę na łatwy ruch, czy też wykorzystamy go w całości - pozostały czas okresu możemy wykorzystać, aby przemyśleć kolejne ruchy. 
:::