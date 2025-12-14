import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "gocart" });

import { inngest } from "./client";

export const syncUserCreations = inngest.createFunction(
  { id: "sync-user-creations" },
  { event: "user/created" },
  async ({ event }) => {
    return { success: true };
  }
);

export const syncUserUpdation = inngest.createFunction(
  { id: "sync-user-updated" },
  { event: "user/updated" },
  async ({ event }) => {
    return { success: true };
  }
);

export const syncUserDeletion = inngest.createFunction(
  { id: "sync-user-deleted" },
  { event: "user/deleted" },
  async ({ event }) => {
    return { success: true };
  }
);
