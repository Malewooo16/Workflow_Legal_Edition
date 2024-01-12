import B2 from 'backblaze-b2';

interface UploadUrlResponse {
    uploadUrl: string;
    authorizationToken: string;
  }
const b2 = new B2({
    applicationKeyId: '005a22d462ac6d30000000002',
    applicationKey: 'K005QxVufmCvKPkjXG+EKm1JFAFtSvc',
});

// Authorize function
async function authorizeB2() {
    try {
        const response = await b2.authorize();
        console.log('Authorization successful:', response);
        return response; // Return the authorization response
    } catch (error) {
        console.error('Error authorizing B2:', error);
        throw error;
    }
}

// Upload function
export default async function toB2Test(fileData :File) {
    if (!fileData) return;

    try {
        // Authorize the B2 instance
        const authResponse = await authorizeB2();

        // Use your bucket ID
        const { uploadUrl, authorizationToken } = await b2.getUploadUrl({
            bucketId: '2ab2723db4c6f29a8cc60d13',
        }) as unknown as UploadUrlResponse;

        // Read the file content
        const fileContent = await readFileAsync(fileData);

        //Get file buffer
        const bufferContent = Buffer.from(fileContent)

        // Upload the file to Backblaze B2
        const response = await b2.uploadFile({
            uploadUrl,
            uploadAuthToken: authorizationToken,
            fileName: fileData.name,
            data: bufferContent,
            info: {
                // Optional file info
                // Add any additional file info here
            },
        });

        console.log('File uploaded successfully:', response);
        return response; // Return the upload response
    } catch (error) {
        console.error('Error uploading file to Backblaze B2:', error);
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