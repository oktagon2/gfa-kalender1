# gfa-kalender1

## Problem: Dem Kalender fehlen die Tage
### Strategie um die Tage aufzufüllen
- Erstes Datum berechnen. Vom ersten Datum des Monats geht man rückwärts bis zum Montag. Beispiel: 1. Oktober 2023 ist kein Montag. Also geht man eins zurück. 30. Septembter 2023 ist auch kein Montag. Also geht man nochmals eins zurück. Und so weiter. Irgendwann kommt man zum 25. September und stellt fest, dass das ein Montag ist. Also ist das erste Datum im Kalender für den Oktober 2023 der 25.09.2023
- Letztes Datum berechnen. Vom letzten Datum des Monats geht man vorwärts bis zum Sonntag. Beispiel: Das geht jetzt genau so, wie oben, nur umgekehrt. 31. Oktober 2023 ist kein Sonntag. Also geht man eins weiter. 1. November 2023 ist auch kein Sonntag. Also geht man nochmals eins weiter. Und so weiter. Irgendwann kommt man zum 5. November und stellt fest, dass das ein Sonntag ist. Also ist das letzte Datum im Kalender für den Oktober 2023 der 5.11.2023.
- Jetzt kann man den Kalender auffüllen mit den Tageszahlen vom ersten Datum bis zum letzten Datum. Für das Beispiel heisst das: 25.09.2023 bis und mit 5.11.2023. Dabei muss man beachten, dass man bei jedem Montag zuerst eine neue Zeile hinzufügen muss.

