import { studentRouter } from '../modules/students/student';
import { router } from './trpc';

export const appRouter = router({
  students: studentRouter,
});

export type AppRouter = typeof appRouter;
