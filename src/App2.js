import React, { useEffect, useState } from 'react';

export const App = () => {
  // set up local state for generating the download link
  const [downloadLink, setDownloadLink] = useState('');
  const [stringBlob, setStringBlob] = useState('');

  // function for generating file and set download link
  const makeTextFile = () => {
    // This creates the file.
    // In my case, I have an array, and each item in
    // the array should be on a new line, which is why
    // I use .join('\n') here.
    const data = new Blob([stringBlob], { type: 'text/plain' });

    // this part avoids memory leaks
    if (downloadLink !== '') window.URL.revokeObjectURL(downloadLink);

    // update the download link state
    setDownloadLink(window.URL.createObjectURL(data));
    console.log(downloadLink);
  };

  // Call the function if list changes
  useEffect(() => {
    makeTextFile();
  }, [stringBlob]);

  return (
    <>
      <input type="text" onChange={(e) => setStringBlob(e.target.value)} />
      <a
        // this attribute sets the filename
        download="test.txt"
        // link to the download URL
        href={downloadLink}
      >
        download
      </a>
    </>
  );
};

export default App;
