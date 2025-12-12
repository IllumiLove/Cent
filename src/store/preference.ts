import { create, type StateCreator } from "zustand";
import {
    createJSONStorage,
    type PersistOptions,
    persist,
} from "zustand/middleware";
import type { LocaleName } from "@/locale/utils";

type State = {
    locale: LocaleName;
    autoLocateWhenAddBill?: boolean;
    enterAddBillWhenReduceMotionChanged?: boolean;
    readClipboardWhenReduceMotionChanged?: boolean;
    smartPredict?: boolean;
    multiplyKey?: string;
    /** @deprecated */
    quickEntryWithReLayr?: boolean;
    /** @deprecated */
    reLayrPort?: string;
    /** @deprecated */
    reLayrKey?: string;
};
type Store = State;

type Persist<S> = (
    config: StateCreator<S>,
    options: PersistOptions<S>,
) => StateCreator<S>;

export const usePreferenceStore = create<Store>()(
    (persist as Persist<Store>)(
        () => {
            return {
                // 預設使用中文，後續切換會持久化
                locale: "zh",
                autoLocateWhenAddBill: false,
                readClipboardWhenReduceMotionChanged: false,
                smartPredict: false,
                reLayrKey: "cent",
                reLayrPort: "2525",
            };
        },
        {
            name: "preference-store",
            storage: createJSONStorage(() => localStorage),
            // 升級版本時強制將語言重置為中文，確保默認繁體/中文生效
            version: 1,
            migrate: async (
                persistedState: unknown,
                _version: number,
            ): Promise<Store> => {
                // 無論舊版本為何，升級時統一改為 zh
                const state = (persistedState ?? {}) as Partial<Store>;
                return {
                    ...state,
                    locale: "zh" as LocaleName,
                } as Store;
            },
        },
    ),
);

export const usePreference = <K extends keyof Store>(
    key: K,
): [Store[K], (value: Store[K]) => void] => {
    const value = usePreferenceStore((state) => state[key]);
    const setValue = (val: Store[K]) => {
        usePreferenceStore.setState({ [key]: val } as Partial<Store>);
    };
    return [value, setValue];
};
