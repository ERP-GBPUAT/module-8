import React from "react";
import { useLocation } from "react-router-dom";

function PDFViewer() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pdfUrl = queryParams.get('url');
    return (
        <div>
          <iframe title="uploaded-file" src={pdfUrl} width="100%" height="1100px"></iframe>
        </div>
    )
}

export default PDFViewer;