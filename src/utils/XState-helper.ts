import { StateValue } from 'xstate';

export function getClassNameFromState(value: StateValue): string[] {
  if (typeof value === 'string') {
    return [value];
  }

  const firstKey = Object.keys(value)[0];
  return [firstKey, value[firstKey].toString()];
}
