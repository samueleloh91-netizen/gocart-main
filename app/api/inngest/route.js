import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import {
  syncUserCreations,
  syncUserDeletion,
  syncUserUpdation,
} from "@/inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreations,
    syncUserDeletion,
    syncUserUpdation,
  ],
});
