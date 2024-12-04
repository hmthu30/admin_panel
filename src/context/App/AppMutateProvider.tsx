import { createContextMutation } from "@/utils/createContextMutation";
import { useMutation } from "react-query";
import { getTokenMutation } from "./AppMutateFunctions";

const [AppMutationProvider, useAppMutation] = createContextMutation(() =>
  useMutation(getTokenMutation)
);

export { AppMutationProvider, useAppMutation };
