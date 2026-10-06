# `useMemo` vs `useCallback`

Both are used for **memoization**, meaning they help React avoid unnecessary work.

```javascript
import { useCallback, useMemo } from "react";
```

## Main Difference

> **`useMemo` remembers a calculated value.**  
> **`useCallback` remembers a function.**

### `useMemo`

```javascript
const result = useMemo(() => {
    return expensiveCalculation(data);
}, [data]);
```

If `data` hasn't changed, React can reuse the previously calculated result.

### `useCallback`

```javascript
const handleClick = useCallback(() => {
    console.log("Clicked");
}, []);
```

Here, `handleClick` is a function whose reference is memoized.

## Difference

| `useMemo` | `useCallback` |
|---|---|
| Memoizes a value | Memoizes a function |
| Returns the calculated result | Returns the function |
| Used for expensive calculations | Useful for stable callback references |

## Easy Way to Remember

> **`useMemo` remembers a value.**  
> **`useCallback` remembers a function.**

They are both useful because they remember **different things**.
