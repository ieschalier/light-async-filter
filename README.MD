# light-async-filter

## Installation

```bash
yarn add light-async-filter
```

## Usage

```js
import asyncFilter from 'light-async-filter'

const myFilter = v =>
  new Promise((resolve, reject) =>
    setTimeout(() => (v > 2 ? resolve(v) : reject(v)), 1),
  )
const sup3 = await asyncFilter(data)(myFilter)
```
