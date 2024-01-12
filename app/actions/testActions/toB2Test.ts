import B2 from 'backblaze-b2';
import AWS from "aws-sdk"


const b2Credentials = {
  accessKeyId: '005a22d462ac6d30000000002',
  secretAccessKey: 'WMA-KEY',
  endpoint: 'https://s3.us-east-005.backblazeb2.com', // Update the endpoint based on your B2 region
};

const s3 = new AWS.S3(b2Credentials);



// Upload function
export default async function toB2Test(fileData: File) {
  if (!fileData) return;

  try {
    // Read the file content
    const fileContent = await readFileAsync(fileData);

    // Get file buffer
    const bufferContent = Buffer.from(fileContent);

    // Set the parameters for the S3 upload
    const params = {
      Bucket: 'WMA-File-Test', // Replace with your S3 bucket name
      Key: fileData.name,
      Body: bufferContent,
    };

    // Upload the file to S3-compatible storage
    const response = await s3.upload(params).promise();

    console.log('File uploaded successfully:', response.Location);
    return response; // Return the upload response
  } catch (error) {
    console.error('Error uploading file to S3-compatible storage:', error);
    throw error;
  }
}

// Helper function to read file content asynchronously
function readFileAsync(file: File): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      if (event.target && event.target.result instanceof ArrayBuffer) {
        resolve(event.target.result);
      } else {
        reject(new Error('Failed to read file content.'));
      }
    };

    reader.readAsArrayBuffer(file);
  });
}