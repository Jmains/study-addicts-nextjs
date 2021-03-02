import { PrismaClient } from "@prisma/client";

// This part is just cuz TypeScript Bein a lil bitch
declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}

let prisma: PrismaClient;

// To make sure that we don't reinstate Prisma on every render, we recommend that
// you use the singleton pattern to create/retrieve the Prisma instance:

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
