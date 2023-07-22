import{ useState } from 'react'

const SingleFileUploader = () => {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])  
    }
  }

  const handleUpload = () => {

  }

  return (
    <>
      <div>
        <label htmlFor='file' className="sr-only">
          Choose a file
        </label>
        <input type="file" id="file" onChange={handleFileChange} />
      </div>

      {file && (
        <section>
          File details:
          <ul>
            <li>Name: {file.name}</li>
            <li>Name: {file.type}</li>
            <li>Name: {file.size} bytes</li>
          </ul>
        </section>
      )}

      {file && <button onChange={handleUpload}>Upload a file</button>}
    </>
  )
}

export default SingleFileUploader