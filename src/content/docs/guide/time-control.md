---
title: Time control
description: The most common time control systems in the world of Go.
---

Almost all Go tournaments are played using clocks that limit the length of the game. There are various time control systems, and the choice of a given system is up to the tournament organizer or referee. In principle, the choice of time control system should not affect the game itself; in practice, however, there are different tactics for "using your time" within a given system.

The choice of a particular system may be driven by the rank of the tournament, its schedule, the popularity of the system in the country where the tournament is held, or the availability of clocks that support it.

Below is a list of the most common time control systems used when playing Go.

## Fischer

The *Fischer* time control has two parameters: *base time* and *bonus*.

A player's clock starts at the *base time* and, after each completed move, is increased by the *bonus*.

:::note[Example]
The settings are 45 minutes of base time and a 15-second bonus. After the game starts, the player with the black stones spends 1 minute thinking about their move, reducing their available time to `44:00`; once the move is finished, however, the player's clock is increased by the *bonus* — in this case 15 seconds. The player therefore ends their first move with `44:15`.
:::

:::tip[Tactic]
When you are sure of your move, it is better to make it right away, especially when little time is left on the clock. By playing obvious moves quickly, you can bank a lot of extra time to spend on harder moves.
:::

## Byo-yomi

The *byo-yomi* time control has three parameters: *base time*, *number of periods*, and *period length*.

Once a player has used up all of their *base time*, the first extra period begins, lasting as long as the *period length* dictates. If the player finishes their move before the *period length* runs out, that period's time is reset and the period can be used again — the number of available periods is not reduced. If the entire *period length* is used up, the next extra period begins. The *number of periods* determines how many periods a player has at their disposal.

:::note[Example]
The settings are 60 minutes of base time and 3 extra periods of 30 seconds each. After using up all 60 minutes of base time, the player enters their first extra period, lasting 30 seconds. Their next move takes only 15 seconds, so when it is their turn again they will still have 3 periods of 30 seconds available and can still use the full 30 seconds of the first extra period. Unfortunately, the following move takes the player 45 seconds, so the player has now "lost" 1 extra period and only 2 extra periods remain.
:::

:::tip[Tactic]
Once you have used up your base time and are relying on the extra periods, it is best to use them to the very end and finish your move just before the period expires. Since the period's time resets every time, it does not matter whether you use only 1 second of it on an easy move or use it in full — the remaining period time can be used to think through your next moves.
:::
