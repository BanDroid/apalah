import PocketBase from "pocketbase";
import { getSecret } from "astro:env/server";

export const pb_client = new PocketBase(getSecret("POCKETBASE_URL"));
