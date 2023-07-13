import { createCanvas } from 'canvas';


export const generatePhotoMontage = async (image1, image2) => {
    const canvas = createCanvas(image1.width + image2.width, Math.max(image1.height, image2.height));
    const context = canvas.getContext('2d');
  
    // Draw the first image on the left side of the canvas
    context.drawImage(image1, 0, 0);
  
    // Draw the second image on the right side of the canvas
    context.drawImage(image2, image1.width, 0);
  
    // Convert the canvas to a base64 encoded data URL
    const montageDataURL = canvas.toDataURL('image/png');
    return montageDataURL;
  };
  