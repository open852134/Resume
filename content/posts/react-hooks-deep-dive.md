---
title: "React Hooks Deep Dive: useEffect Cleanup"
date: "2024-02-20"
excerpt: "A practical look at how and why to return cleanup functions from useEffect, with real-world examples."
tags: ["react", "hooks", "javascript"]
---

## Why Cleanup Matters

When you subscribe to something inside `useEffect` — an event listener, a WebSocket, a timer — you need to tear it down when the component unmounts or before the effect re-runs. Without cleanup, you accumulate leaked listeners and stale references.

```tsx
useEffect(() => {
  const handler = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  };
  window.addEventListener("keydown", handler);
  return () => window.removeEventListener("keydown", handler);
}, [onClose]);
```

The returned function runs **before** the next effect execution and on unmount.

## Common Pitfall: Stale Closures

If your cleanup function references a value that changes, make sure it's listed in the dependency array, or use a ref.

```tsx
const callbackRef = useRef(onClose);
useEffect(() => { callbackRef.current = onClose; });

useEffect(() => {
  const handler = (e: KeyboardEvent) => {
    if (e.key === "Escape") callbackRef.current();
  };
  window.addEventListener("keydown", handler);
  return () => window.removeEventListener("keydown", handler);
}, []); // safe: always reads the latest via ref
```

## AbortController for Fetch

For async data fetching, use `AbortController` to cancel in-flight requests:

```tsx
useEffect(() => {
  const controller = new AbortController();
  fetch("/api/data", { signal: controller.signal })
    .then((res) => res.json())
    .then(setData)
    .catch((err) => {
      if (err.name !== "AbortError") console.error(err);
    });
  return () => controller.abort();
}, []);
```

This keeps your UI consistent and avoids setting state on unmounted components.

## Summary

- Always return a cleanup function when you subscribe to anything
- Watch out for stale closures in cleanup functions
- Use `AbortController` for fetch-based effects
