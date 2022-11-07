import { inject } from "vue";

export function useContent() {
    const content = inject<any>("content");

    return content;
}