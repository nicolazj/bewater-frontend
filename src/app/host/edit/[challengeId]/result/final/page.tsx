"use client";

import { segmentSchema } from "@/app/host/segment-params";
import {
  useFetchChallengeById,
  useFetchChallengeShortlist,
} from "@/services/challenge.query";
import { useFetchChallengeProjects } from "@/services/project.query";
import { FinalResult } from "./form";
import Tab from "../tab";

export default function Page({ params }: any) {
  const { challengeId } = segmentSchema.challengeId.parse(params);
  const { data: challenge } = useFetchChallengeById(challengeId);
  const { data: projects } = useFetchChallengeProjects(challengeId);
  const { data: shortlist } = useFetchChallengeShortlist(challengeId);

  if (!challenge) return null;
  if (!projects) return null;
  if (!shortlist) return null;
  return (
    <>
      <Tab />
      <FinalResult
        challenge={challenge}
        projects={projects}
        shortlist={shortlist}
      />
    </>
  );
}
