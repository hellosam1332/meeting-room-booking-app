import React from "react";

enum STATUS {
  IDLE = "IDLE",
  PENDING = "PENDING",
  RESOLVED = "RESOLVED",
  REJECTED = "REJECTED",
}

type State<T> = {
  status: STATUS;
  data: T | null;
  error: Error | null;
};

type ActionType = STATUS;

type Action<T> = {
  type: ActionType;
  data?: T | null;
  error?: Error | null;
};

function asyncReducer<T>(
  state: State<T>,
  { type, data = null, error = null }: Action<T>
): State<T> {
  switch (type) {
    case "PENDING":
      return { status: STATUS.PENDING, data: null, error: null };
    case "RESOLVED":
      return { status: STATUS.RESOLVED, data, error: null };
    case "REJECTED":
      return { status: STATUS.REJECTED, data: null, error };
    default:
      throw new Error(`Unhandled action type: '${type}'`);
  }
}

export default function useAsync<T>(
  initialState: Partial<State<T>> = {},
  deps: Array<unknown> = [],
  deferMs = 0
) {
  const reducer = asyncReducer;
  const [state, dispatch] = React.useReducer<
    React.Reducer<State<T>, Action<T>>
  >(reducer, {
    status: STATUS.IDLE,
    data: null,
    error: null,
    ...initialState,
  });

  const run = React.useCallback(
    (promise: Promise<T>) => {
      dispatch({ type: STATUS.PENDING, data: null, error: null });
      setTimeout(() => {
        promise.then(
          (data: T) => dispatch({ type: STATUS.RESOLVED, data }),
          (error: Error) => dispatch({ type: STATUS.REJECTED, error })
        );
      }, deferMs);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [deferMs, ...deps]
  );

  const setData = React.useCallback(
    (data: T) => dispatch({ type: STATUS.RESOLVED, data, error: null }),
    []
  );

  const setError = React.useCallback(
    (error: Error) => dispatch({ type: STATUS.REJECTED, data: null, error }),
    []
  );

  return { ...state, run, setData, setError };
}
