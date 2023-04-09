import React from "react";
import PropTypes from "prop-types";
type ThumbUpProps = {
  liked: boolean;
};
const ThumbUp: React.FC<ThumbUpProps> = ({ liked }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.551 5.83017C14.0928 5.29173 13.3818 5.17752 12.8131 5.14488C12.2759 5.11225 11.5333 5.12857 10.6012 5.21015C10.8224 4.23116 11.1858 2.6811 11.3279 1.91423C11.4859 1.06578 11.012 0.315222 10.2062 0.0704757C9.43206 -0.157954 8.6737 0.184691 8.40512 0.86998L8.31032 1.09841C7.88375 2.24056 6.73041 5.2591 4.85032 5.81386C4.85032 5.81386 4.85032 5.81386 4.83452 5.81386C4.51854 5.45489 4.07617 5.24278 3.57059 5.24278H1.7063C0.758356 5.24278 0 6.02597 0 7.00495V12.8952C0 13.8742 0.758356 14.6574 1.7063 14.6574H3.58639C4.09196 14.6574 4.55014 14.4289 4.86612 14.07C5.79827 14.2658 9.43206 15 11.7229 15C12.5603 15 14.2982 15 14.5036 13.042C14.5984 12.2262 14.8827 9.46873 14.9775 7.91867C15.0565 6.90706 14.9301 6.27072 14.551 5.83017ZM3.58639 13.6457H1.7063C1.29553 13.6457 0.963745 13.3031 0.963745 12.8789V6.98864C0.963745 6.56441 1.29553 6.22177 1.7063 6.22177H3.58639C3.99717 6.22177 4.32895 6.56441 4.32895 6.98864V12.8789C4.32895 13.3031 3.99717 13.6457 3.58639 13.6457ZM14.0296 7.82078C13.919 9.37084 13.6346 12.112 13.5556 12.9115C13.4766 13.6457 13.1922 13.9721 11.7229 13.9721C9.70064 13.9721 6.44603 13.352 5.2769 13.1073C5.2927 13.0257 5.2927 12.9441 5.2927 12.8625V6.98864C5.2927 6.89074 5.2769 6.79284 5.2611 6.71126C7.50457 5.92807 8.6895 2.81163 9.19507 1.45737L9.27407 1.24526C9.38466 0.951562 9.73224 0.967879 9.90603 1.03314C10.0324 1.06578 10.4432 1.22894 10.3484 1.73475C10.1746 2.71374 9.63745 4.98172 9.47945 5.66701C9.44786 5.83017 9.47945 5.99334 9.59005 6.10755C9.68484 6.22177 9.84284 6.28703 10.0008 6.27072C10.9014 6.17282 11.6439 6.12387 12.2127 6.12387C12.4023 6.12387 12.5761 6.12387 12.7183 6.14018C13.287 6.17282 13.6188 6.28703 13.7926 6.48283C14.0138 6.71126 14.077 7.1518 14.0296 7.82078Z"
      fill={liked ? "#FFFFFF" : "#E4E4E4"}
    />
  </svg>
);

export default ThumbUp;