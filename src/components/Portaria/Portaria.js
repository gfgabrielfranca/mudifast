import React from 'react';
import './Portaria.css';
import { Document, Page } from 'react-pdf';

const Portaria = () => {

  return (
    <div className="Portaria">
      <Document
        file="somefile.pdf"
        onLoadSuccess={this.onDocumentLoad}>
        <Page pageNumber={pageNumber} />
        </Document>
    </div>
  );
}

export default Portaria;
