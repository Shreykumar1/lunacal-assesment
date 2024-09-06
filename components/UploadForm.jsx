// components/UploadForm.js
"use client"
import { useState } from 'react';

const UploadForm = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
        const data = new FormData();
        data.set("file", file);
        const res = await fetch("/api/upload", {
          method: "POST",
          body: data,
        });
        if (!res.ok) throw new Error(await res.text());
        const resData = await res.json();
        console.log(resData);
  }catch(error){
    console.log(error);
    
  }
}

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadForm;
