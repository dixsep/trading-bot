# trading-bot

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.29. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

# Description

Aim of this project is to  check whether we can make profit in a centralized exchange using some strategy. This strategy excludes the fees and immediately places order in the 

exchange whenever a profit is expected.

# Strategy

Taking advantage of the Highly liquid exchanges to make profit in the low liquid exchanges

Ex : SOL_INR : Low liquid exchange

Strategy : USDT_INR -> SOL_USDT , These are highyly liquid 

If we want to convert INR to SOL , We proceed by : INR to USDT and then USDT to SOL.

Similarly for SOL to INR.
