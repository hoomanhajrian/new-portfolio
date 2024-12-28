"use client";
import { Viewer } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';


const Resume = () => {
  return (
    <div style={{ backgroundColor: '#2566e8', width: '100%' }}>
      <Button href='/resume.pdf' download sx={{
        margin: '1rem', borderRadius: '15px', '&:hover': {
          backgroundColor: '#fff',
        }
      }} variant='contained' color='success'><DownloadIcon /> Download Resume</Button>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div
          style={{
            border: '5px solid #2566e8',
            height: '90vh',
          }}
        >
          <Viewer fileUrl="/resume.pdf" />
        </div>
      </Worker>
    </div>
  )
};

export default Resume;
