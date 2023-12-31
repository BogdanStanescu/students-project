/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from 'apps/backend/src/server/trpc';
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

export const trpc = createTRPCReact<AppRouter>();

export type TRPCInputs = inferRouterInputs<AppRouter>;
export type TRPCOutputs = inferRouterOutputs<AppRouter>;
