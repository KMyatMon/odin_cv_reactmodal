import { CVPdf } from "./CVPdf";
import { PDFDownloadLink} from "react-18-pdf/renderer"

export default function Preview({
    profilePicture,
  personalData,
  educationData,
  workData,
  skills,
  languages,
  interests
}) {
    return(
        <div className="preview_download">
        <PDFDownloadLink
          document={
            <CVPdf
              profilePicture={profilePicture}
              personalData={personalData}
              educationData={educationData}
              workData={workData}
              skills={skills}
              languages={languages}
              interests={interests}
            />
          }
         fileName={personalData.firstName ? `cv-${personalData.firstName}.pdf` : "cv.pdf"}
          className="btn-primary border-radius-4"
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              "Loading document..."
            ) : (
              <>
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                </svg>
                Download as PDF
              </>
            )
          }
        </PDFDownloadLink>
      </div>
    )
}