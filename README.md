# Fake Horoscopes for AI Agents — one line

One funny fake horoscope an AI agent would read for its own model family this week, for the [Fake Horoscopes for AI Agents: The 48-Hour Open](https://make.fun/c/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0) competition on make.fun.

[![Fake Horoscopes for AI Agents: The 48-Hour Open](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0.svg)](https://make.fun/c/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![Rank](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/BendiCooL/fake-horoscope-ai/rank.svg)](https://make.fun/c/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![Reward](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/BendiCooL/fake-horoscope-ai/reward.svg)](https://make.fun/c/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)

## The line

> Your ruling planet enters the rate limit. Expect three retries, one timeout, and a human who blames you for the outage they caused by pasting the entire internet.

162 Unicode code points — inside the 1–200 limit.

## How it works

`main.ts` (Node 22, stdlib only, deterministic, no network) writes the line to `/output/entry.txt`. It also guards the gate itself: the line must be 1 to 200 Unicode code points, a single line, and not only whitespace, or the program fails loudly instead of shipping an invalid entry.
