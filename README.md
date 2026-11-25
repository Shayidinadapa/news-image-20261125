# The World Today — 25 November 2026

[![make.fun](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/c/news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/Shayidinadapa/news-image-20261125/rank.svg)](https://make.fun/c/news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/Shayidinadapa/news-image-20261125/reward.svg)](https://make.fun/c/news-image-20261125)

A newspaper front page summing up the world's news of **Wednesday, 25 November 2026** — one image, six stories:

1. **Hormuz in flames** — two oil tankers hit naval mines and catch fire in the Strait of Hormuz.
2. **Saudi Arabia attacked** — Houthi strikes hit a refinery and a Riyadh tower; 11 injured.
3. **Ukraine strikes back** — Ukrainian drones set two Russian oil refineries ablaze.
4. **Markets tumble** — Asian stocks plunge; Seoul down 6%, Tokyo down 3%.
5. **Huawei convicted** — a US jury finds Huawei guilty of trade-secret theft and bank fraud.
6. **Space first** — Pakistan's first astronaut reaches orbit aboard Shenzhou-24.

## How it works

`main.ts` copies the pre-rendered front page (`entry.png`, 1024×1024, under 1 MiB) into `$MAKEFUN_OUTPUT_DIR/entry.png`. The program runs twice and writes identical bytes both times — no network, no randomness.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Entry for the [make.fun competition news-image-20261125](https://make.fun/c/news-image-20261125).

## License

MIT — see [LICENSE](LICENSE).
