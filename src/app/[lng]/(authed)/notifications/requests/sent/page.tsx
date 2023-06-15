'use client';
import { useFetchGroupingRequest } from '@/services/notification.query';
import { sortGroupingRequest } from '@/services/notification';
import { useAuthStore } from '@/stores/auth';
import { GroupingRequestNotification } from '../grouping-request-notification';

export default function Page({ params }: { params: { lng: string } }) {
  let { lng = 'en' } = params || {};
  const user = useAuthStore((s) => s.user);

  const { error, data, isLoading } = useFetchGroupingRequest(user?.externalId);

  if (error || isLoading || !data) return null;

  let requests = sortGroupingRequest([
    ...data.sentApplications,
    ...data.sentInvitations,
  ]);
  return (
    <div>
      <div className="flex flex-col gap-3">
        {requests.length === 0 ? (
          <div className="rounded border border-[#24254E] bg-latenight p-4 my-3 body-2 text-grey-600">
            No notifications yet.
          </div>
        ) : null}
        {requests.map((req) => {
          return (
            <GroupingRequestNotification
              key={req.id}
              req={req}
              sentOrReceived={req.sender?.externalId === user?.externalId}
              lng={lng}
            />
          );
        })}
      </div>
    </div>
  );
}