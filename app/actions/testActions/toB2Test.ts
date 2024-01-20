import B2 from 'backblaze-b2';
import AWS from "aws-sdk"


const b2Credentials = {
  accessKeyId: '005a22d462ac6d30000000006',
  secretAccessKey: 'K005S4WF3Aa6kcIQ5vKfFu0fPC1hyKk',
  endpoint: 'https://s3.us-east-005.backblazeb2.com',
  s3ForcePathStyle: true,
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
      Body: buffer,
      
    };

    // Upload the file to S3-compatible storage
    const response = await s3.upload(params).promise();

    console.log('File uploaded successfully:', response);

    const prismaData = await prisma.workflowTest.findUnique({
      where:{
        workflowId: workflowID,
      }
    })
    const updatedLoactionArr = [...prismaData.filesLocation, response.Location]
    const updatedFile = await prisma.workflowTest.update({
      where: {
        workflowId: workflowID,
      },
      data: {
        filesLocation: updatedLoactionArr,
      },
    });
    return {
      success: true,
      message: "Success",
      location: response.Location
      
    };
  } catch (error) {
    console.error('Error uploading file to S3-compatible storage:', error);
    throw error;
  }
}

// Helper function to read file content asynchronously
// async function readFileAsync(file: File): Promise<Buffer> {
//   const fileBuffer = await fsPromises.readFile(file.path);
//   return fileBuffer;
// }

// async function readFileAsync(file: File): Promise<Buffer> {
//   const fileBuffer = await fsPromises.readFile(file.path);
//   return fileBuffer;
// }

// async function readFileAsync(file: File): Promise<Buffer> {
//   const fileBuffer = await fsPromises.readFile(file.path);
//   return fileBuffer;
// }
