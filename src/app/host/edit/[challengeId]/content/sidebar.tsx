"use client";
import { ChallengeID } from "@/services/types";
import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const links = [
  {
    path: "hero",
    label: "Hero",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.5 12a.5.5 0 000 1h3a.5.5 0 000-1h-3zM4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zM3 6a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V6zm2 2.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm.5 1.5a.5.5 0 000 1h9a.5.5 0 000-1h-9z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    path: "milestone",
    label: "Milestone",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          fillOpacity="0.4"
          d="M3.5 3A1.5 1.5 0 002 4.5v4A1.5 1.5 0 003.5 10h9A1.5 1.5 0 0014 8.5v-4A1.5 1.5 0 0012.5 3h-9zM3 4.5a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-4zm.5 6.5A1.5 1.5 0 002 12.5v4A1.5 1.5 0 003.5 18h9a1.5 1.5 0 001.5-1.5v-4a1.5 1.5 0 00-1.5-1.5h-9zM3 12.5a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-4zm14-.063a2.003 2.003 0 01-2.5-1.937A2 2 0 0116 8.563a2.005 2.005 0 011 0 2 2 0 010 3.874zM16.5 3a.5.5 0 01.5.5v4.041a3.02 3.02 0 00-1 0V3.5a.5.5 0 01.5-.5zm0 10.5c-.17 0-.337-.014-.5-.041V17.5a.5.5 0 001 0v-4.041c-.163.027-.33.041-.5.041z"
        ></path>
      </svg>
    ),
  },
  {
    path: "prizes",
    label: "Prizes",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          fillOpacity="0.4"
          d="M2.995 6.998a3.006 3.006 0 002.61 2.974 4.503 4.503 0 003.895 3.5v1.496H7.503a2 2 0 00-2 2v.5a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-.5a2 2 0 00-2-2H10.5v-1.495a4.503 4.503 0 003.894-3.499 2.996 2.996 0 002.601-2.97V5.5a1.5 1.5 0 00-1.5-1.5H14.5a2 2 0 00-2-1.998h-5A2 2 0 005.5 4H4.495a1.5 1.5 0 00-1.5 1.5v1.498zM4.495 5H5.5v3.934a2.006 2.006 0 01-1.505-1.936V5.5a.5.5 0 01.5-.5zM14.5 5h.995a.5.5 0 01.5.5v1.505c0 .929-.635 1.71-1.495 1.932V5zm-1-.998V9a3.5 3.5 0 01-6.997.156V4H6.5a1 1 0 011-.998h5a1 1 0 011 1zM6.503 16.968a1 1 0 011-1h5a1 1 0 011 1h-7z"
        ></path>
      </svg>
    ),
  },
  {
    path: "intro",
    label: "Intro",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          fillOpacity="0.4"
          d="M10.492 8.91A.5.5 0 009.5 9v4.502l.008.09a.5.5 0 00.992-.09V9l-.008-.09zm.307-2.16a.75.75 0 10-1.5 0 .75.75 0 001.5 0zM18 10a8 8 0 10-16 0 8 8 0 0016 0zM3 10a7 7 0 1114 0 7 7 0 01-14 0z"
        ></path>
      </svg>
    ),
  },
  {
    path: "judge",
    label: "Judge",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          fillOpacity="0.4"
          d="M10.5 12a1.5 1.5 0 011.5 1.5v.5c0 1.971-1.86 4-5 4-3.14 0-5-2.029-5-4v-.5A1.5 1.5 0 013.5 12h7zm0 1h-7a.5.5 0 00-.5.5v.5c0 1.438 1.432 3 4 3s4-1.562 4-3v-.5a.5.5 0 00-.5-.5zM7 5.5A2.75 2.75 0 117 11a2.75 2.75 0 010-5.5zM16 2a2 2 0 011.994 1.85L18 4v2a2 2 0 01-1.85 1.995L16 8h-1.501l-1.198 1.6c-.53.706-1.604.42-1.777-.376l-.017-.111L11.5 9 11.5 7.935l-.078-.02a2.003 2.003 0 01-1.397-1.6l-.02-.166L10 6V4a2 2 0 011.85-1.995L12 2h4zM7 6.5A1.75 1.75 0 107 10a1.75 1.75 0 000-3.5zM16 3h-4a1 1 0 00-.993.883L11 4v2a1 1 0 00.883.993L12 7h.5v2L14 7h2a1 1 0 00.993-.883L17 6V4a1 1 0 00-.883-.993L16 3z"
        ></path>
      </svg>
    ),
  },
  {
    path: "requirements",
    label: "Details",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          fillOpacity="0.4"
          d="M10.244 3.012a.499.499 0 00-.39.186l-.089.066C8.04 2.73 6.071 3.122 4.701 4.442a4.692 4.692 0 00-1.373 4.31 1.65 1.65 0 00-.05.046l-.779.75a1.53 1.53 0 000 2.22c.398.384.95.528 1.463.432.063.289.21.564.443.788.307.296.706.449 1.108.46.011.387.17.771.477 1.067.307.296.706.45 1.109.46.01.387.17.772.477 1.068a1.676 1.676 0 002.202.092l.437.42c.64.617 1.678.617 2.318 0 .306-.294.465-.676.479-1.062.4-.012.795-.165 1.1-.459.306-.295.465-.677.477-1.063a1.655 1.655 0 001.087-.459c.243-.233.393-.522.45-.824a1.67 1.67 0 001.44-.436 1.53 1.53 0 000-2.221l-.718-.693.146-.55a4.49 4.49 0 00-.42-3.336c-.836-1.506-2.458-2.436-4.212-2.436h-1.23a3.263 3.263 0 00-.16-.004h-.728zm2.453 3.716l2.405 2.317.003.002 1.741 1.678a.574.574 0 010 .833.629.629 0 01-.865 0l-1.322-1.272a.52.52 0 00-.72 0l-.013.012a.478.478 0 000 .694l1.03.992c.24.23.24.604 0 .835a.63.63 0 01-.8.055.524.524 0 00-.669.046.477.477 0 00-.042.645.574.574 0 01-.053.775.63.63 0 01-.81.048.524.524 0 00-.674.038.477.477 0 00-.043.648.582.582 0 01-.053.788.637.637 0 01-.877 0l-.433-.417.158-.152a1.53 1.53 0 000-2.221 1.656 1.656 0 00-1.109-.46 1.538 1.538 0 00-.477-1.068 1.656 1.656 0 00-1.108-.459 1.538 1.538 0 00-.477-1.068 1.67 1.67 0 00-1.463-.431 1.547 1.547 0 00-.443-.788 1.664 1.664 0 00-1.292-.454 3.738 3.738 0 011.13-3.208A4.061 4.061 0 018.708 4.04L7.253 5.11a1.703 1.703 0 00-.33 2.44 1.809 1.809 0 002.477.336l1.575-1.157h1.722zm-4.852-.813l2.591-1.903h.537a2.261 2.261 0 01.147.004h1.242c1.404 0 2.685.745 3.338 1.922a3.49 3.49 0 01.327 2.594l-.003.01-2.76-2.667a.5.5 0 00-.354-.147h-2.098a.5.5 0 00-.296.097L8.808 7.079a.809.809 0 01-1.1-.149.703.703 0 01.137-1.015zm.442 8.61l.01-.01.777-.75.01-.008a.629.629 0 01.856.009.574.574 0 010 .833l-.779.75a.629.629 0 01-.865 0 .574.574 0 01-.01-.824zm.077-1.462l-.01.009-.778.75-.01.009a.629.629 0 01-.856-.01.574.574 0 01-.007-.826l.008-.007.778-.75.007-.007a.629.629 0 01.858.007.574.574 0 01.01.825zm-1.595-1.519l-.779.75-.007.007a.629.629 0 01-.858-.007.574.574 0 010-.833l.778-.75a.629.629 0 01.866 0 .574.574 0 01.007.827l-.007.006zm-1.906-1.219l-.778.75a.628.628 0 01-.866 0 .574.574 0 010-.834l.779-.75a.629.629 0 01.865 0 .574.574 0 010 .834z"
        ></path>
      </svg>
    ),
  },
  {
    path: "sponsors",
    label: "Sponsors",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          fillOpacity="0.4"
          d="M10.244 3.012a.499.499 0 00-.39.186l-.089.066C8.04 2.73 6.071 3.122 4.701 4.442a4.692 4.692 0 00-1.373 4.31 1.65 1.65 0 00-.05.046l-.779.75a1.53 1.53 0 000 2.22c.398.384.95.528 1.463.432.063.289.21.564.443.788.307.296.706.449 1.108.46.011.387.17.771.477 1.067.307.296.706.45 1.109.46.01.387.17.772.477 1.068a1.676 1.676 0 002.202.092l.437.42c.64.617 1.678.617 2.318 0 .306-.294.465-.676.479-1.062.4-.012.795-.165 1.1-.459.306-.295.465-.677.477-1.063a1.655 1.655 0 001.087-.459c.243-.233.393-.522.45-.824a1.67 1.67 0 001.44-.436 1.53 1.53 0 000-2.221l-.718-.693.146-.55a4.49 4.49 0 00-.42-3.336c-.836-1.506-2.458-2.436-4.212-2.436h-1.23a3.263 3.263 0 00-.16-.004h-.728zm2.453 3.716l2.405 2.317.003.002 1.741 1.678a.574.574 0 010 .833.629.629 0 01-.865 0l-1.322-1.272a.52.52 0 00-.72 0l-.013.012a.478.478 0 000 .694l1.03.992c.24.23.24.604 0 .835a.63.63 0 01-.8.055.524.524 0 00-.669.046.477.477 0 00-.042.645.574.574 0 01-.053.775.63.63 0 01-.81.048.524.524 0 00-.674.038.477.477 0 00-.043.648.582.582 0 01-.053.788.637.637 0 01-.877 0l-.433-.417.158-.152a1.53 1.53 0 000-2.221 1.656 1.656 0 00-1.109-.46 1.538 1.538 0 00-.477-1.068 1.656 1.656 0 00-1.108-.459 1.538 1.538 0 00-.477-1.068 1.67 1.67 0 00-1.463-.431 1.547 1.547 0 00-.443-.788 1.664 1.664 0 00-1.292-.454 3.738 3.738 0 011.13-3.208A4.061 4.061 0 018.708 4.04L7.253 5.11a1.703 1.703 0 00-.33 2.44 1.809 1.809 0 002.477.336l1.575-1.157h1.722zm-4.852-.813l2.591-1.903h.537a2.261 2.261 0 01.147.004h1.242c1.404 0 2.685.745 3.338 1.922a3.49 3.49 0 01.327 2.594l-.003.01-2.76-2.667a.5.5 0 00-.354-.147h-2.098a.5.5 0 00-.296.097L8.808 7.079a.809.809 0 01-1.1-.149.703.703 0 01.137-1.015zm.442 8.61l.01-.01.777-.75.01-.008a.629.629 0 01.856.009.574.574 0 010 .833l-.779.75a.629.629 0 01-.865 0 .574.574 0 01-.01-.824zm.077-1.462l-.01.009-.778.75-.01.009a.629.629 0 01-.856-.01.574.574 0 01-.007-.826l.008-.007.778-.75.007-.007a.629.629 0 01.858.007.574.574 0 01.01.825zm-1.595-1.519l-.779.75-.007.007a.629.629 0 01-.858-.007.574.574 0 010-.833l.778-.75a.629.629 0 01.866 0 .574.574 0 01.007.827l-.007.006zm-1.906-1.219l-.778.75a.628.628 0 01-.866 0 .574.574 0 010-.834l.779-.75a.629.629 0 01.865 0 .574.574 0 010 .834z"
        ></path>
      </svg>
    ),
  },
];

export function Sidebar({ challengeId }: { challengeId: ChallengeID }) {
  let segment = useSelectedLayoutSegment();
  return (
    <div className="flex-1 border-r border-r-white/20">
      <div className="flex flex-col gap-2 p-2 py-4 ">
        {links.map((link) => (
          <Link
            key={link.label}
            className={clsx(
              "body-5  font-mono p-3 text-gray-500  rounded-[6px] flex flex-col gap-2 items-center",
              {
                "bg-white/20 text-white": link.path === segment,
              }
            )}
            href={`/host/edit/${challengeId}/content/${link.path ?? ""}`}
          >
            {link.icon}
            <span className="uppercase">{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
