import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import { syncUserCreations, syncUserDeletion, syncUserUpdation } from "@/inngest/fuctions";



// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
    
   
  ],
});