
const upLoadingImage = async (fileImage) => {
        const cloudUrl='https://api.cloudinary.com/v1_1/dzrsng18g/upload';

        const base64Response = await fetch(fileImage);
        const blobFile = await base64Response.blob();
    
        const formData=new FormData();
        formData.append("upload_preset","react-songbook-app");
        formData.append("file",blobFile);
    
     
        const response=await fetch(`${cloudUrl}`,{
            method:'POST',
            body:formData
          });
        const cloudResp=await response.json();

        return new Promise((resolve,reject) => {
          if(!response.ok){

                    reject("It can't upload image");  
          }
          resolve(cloudResp)
        });
}

export default upLoadingImage