import { AsyncLocalStorage } from "async_hooks";

const asyncLocalStorage = new AsyncLocalStorage();

export const runWithContext = (traceId, callback) => {
  asyncLocalStorage.run({ traceId }, callback);
};

export const getTraceId = () => {
  const store = asyncLocalStorage.getStore();
  return store?.traceId || null;
};