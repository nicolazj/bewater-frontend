"use client";
import { OrganizationProfile, useOrganization } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useRouter } from "next/navigation";

export default function Page() {
  let { organization, isLoaded } = useOrganization();
  const router = useRouter();
  if (isLoaded && !organization) {
    router.push("/host");
    return (
      <div>
        <p className="body-1">{"Your haven't selected a organization"} </p>
      </div>
    );
  }
  return (
    <div>
      <OrganizationProfile
        appearance={{
          baseTheme: dark,
          variables: { colorPrimary: "#00ffff" },
          elements: {
            navbar: "!hidden",
            membersPageInviteButton: "text-night",
            formButtonPrimary:
              "bg-day text-night hover:bg-[#00cccc] active:bg-[#009999] rounded-sm focus:shadow-none",
            card: "bg-night text-white p-0 gap-10 !font-secondary",
            headerSubtitle: "text-gray-500",
            // socialButtons: "hidden",
            // dividerRow: "hidden",
            formFieldInput:
              "bg-night text-white border-gray-800 rounded-sm placeholder-gray-600",
            formFieldLabel: "text-gray-500 hidden",
            formFieldLabelRow: "mb-2",
            // footer: "hidden",
            header: "text-xl gap-2",
            identityPreviewEditButton: "text-gray-500",
            formResendCodeLink:
              "text-day hover:text-[#00cccc] active:text-[#009999] rounded-none focus:shadow-none",
            // navbar: "hidden",
          },
        }}
      />
    </div>
  );
}
