import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '5750fae78c7b32bd30f80bbfaac31b1a2f921181', queries,  });
export default client;
  