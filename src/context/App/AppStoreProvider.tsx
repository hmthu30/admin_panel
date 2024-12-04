import { createContextStore } from "@/utils/createContextStore";
import { createStore } from "zustand";
import { AppMutationProvider } from "./AppMutateProvider";

export type AppState = {
  data: string;
  error: string;
};

export type AppAction = {
  setData: (data: string) => void;
  setError: (error: string) => void;
};

export type AppStore = AppState & AppAction;

const defaultAppState: AppState = {
  data: "",
  error: "",
};

const [AppStoreProvider, useAppStore] = createContextStore<AppStore, AppState>(
  (props: AppState) =>
    createStore<AppStore>()((set) => ({
      ...defaultAppState,
      ...props,
      setData: () => set((state) => ({ data: state.data })),
      setError: () => set((state) => ({ error: state.error })),
    }))
);

export { useAppStore };

export default function AppStoreProviderWithProps({
  children,
  ...props
}: React.PropsWithChildren<AppState>) {
  return (
    <AppStoreProvider {...props}>
      <AppMutationProvider>{children}</AppMutationProvider>
    </AppStoreProvider>
  );
}
