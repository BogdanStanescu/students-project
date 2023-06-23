import { noAuthProcedure, router } from '../../server/trpc';

export const studentRouter = router({
  all: noAuthProcedure.query(async (req) => {
    const students = req.ctx.prisma.student.findMany();

    return students;
  }),
});
