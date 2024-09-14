import { postRouter } from "~/server/api/routers/post";
import { spotifyRouter } from "~/server/api/routers/spotify";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
  spotify: spotifyRouter, // Add the spotifyRouter here
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);