import { auth } from "@clerk/nextjs";

import { db } from "./db";

const DAY_IN_MS = 86_400_000;

export const checkSubscribtion = async () => {
  const { orgId } = auth();

  if (!orgId) return false;

  const orgSubscribtion = await db.orgSubscribtion.findUnique({
    where: { orgId },
    select: {
      stripeSubscribtionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  });

  if (!orgSubscribtion) return false;

  const isValid =
    orgSubscribtion.stripePriceId &&
    orgSubscribtion.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now();

  return !!isValid;
};
