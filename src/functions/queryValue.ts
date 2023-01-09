import { LocationQueryValue } from "vue-router";

const queryValueToString = (value: LocationQueryValue | LocationQueryValue[]): string | null => {
    return !Array.isArray(value) ? value : value?.[0] ?? null;
}

export { queryValueToString };
