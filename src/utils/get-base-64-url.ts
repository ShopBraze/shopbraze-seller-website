export async function getBase64Image(imageUrl: string) {
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}


getBase64Image("https://res.cloudinary.com/dwr2iupak/image/upload/v1735723628/cross-banner-default-image_1_pf58rf.png").then((data) => {
  console.log(data)
})