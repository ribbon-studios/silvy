import { DependencyList, Dispatch, SetStateAction, useEffect, useState } from 'react';

export function useCachedState<T>(supplier: () => T, dependencies: DependencyList): [T, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState<T>(supplier());

    useEffect(() => setValue(supplier()), dependencies);

    return [value, setValue];
}

export function useReadOnlyCachedState<T>(supplier: () => T, dependencies: DependencyList): T {
    const [value] = useCachedState(supplier, dependencies);

    return value;
}