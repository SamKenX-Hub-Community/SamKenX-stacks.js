---
title: FAQ's
---

#### **What are Post Conditions?**

- Any supplied post-conditions are always verified, regardless of "mode" (and abort the tx if any supplied PC evaluates to false).
- The "mode" (allow/deny) only applies to any asset (stx/ft/nft) transfer that is not mentioned in the post-conditions (can be thought of as "ALLOW-additional-asset-transfer" or "DENY-additional-asset-transfer")

Example: In deny mode, an additional asset transfer (not covered by PCs) will abort the tx. In deny mode without PCs a tx will only fail due to PCs if an asset is transferred.

Post-conditions are less a part of clarity (the language), but more a part of transactions.
Users could send the otherwise-identical transaction (Example: contract-call, executing a function on the blockchain) with OR without different post-conditions, in allow OR deny mode.
The PCs are managed by the user/wallet/app that's creating the tx; so they are a bit different from the other "safety" features of clarity (Example: asserts, try, https://book.clarity-lang.org/ch06-00-control-flow.html) 

#### **How to fix the regenerator-runtime?**

If using @stacks/connect with vite, rollup, svelte, or vue a package `regenerator-runtime` needs to be manually added to successfully build the project.

(Fix is in progress)

#### **How to fix the BigInt or how to fix if BigInt doesn’t support X?**

BigInt’s work in all modern browsers, but some bundlers try to optimize them incorrectly. If you are targeting browsers that are too outdated, BigInts might fail.
To solve this set your project `browserslist` to the following [package.json](https://github.com/hirosystems/stacks.js-starters/blob/efb93261b59494f4eb34a7cb5db5d82a84bd3b7c/templates/template-react/package.json#L34-L40)
