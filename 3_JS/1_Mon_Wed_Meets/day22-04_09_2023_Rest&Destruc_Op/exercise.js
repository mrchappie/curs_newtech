// Implementati functia buildUrl care intoarce un string sub forma unui URL
// alcatuit din domeniu, cale si parametri.

function buildUrl(...params) {
  let url = 'https://';

  for (let i = 0; i < params.length; ) {
    const param = params[i];
    if (i === 0) {
      url += param;
      i++;
    } else if (i === 1) {
      url += `/${param}`;
      i++;
    } else {
      if (i === 2) {
        url += '?';
      }
      url += `${param}=${params[i + 1]}${
        i + 1 != params.length - 1 ? '&' : ''
      }`;
      i += 2;
    }
  }

  console.log(url);
}

buildUrl('www.google.com');
// https://www.google.com

buildUrl('www.mysite.com', 'folder1/folder2/images');
// https://www.mysite.com/folder1/folder2/images

buildUrl(
  'www.mysite.com',
  'folder1/folder2/images',
  'imageName',
  'cuteCat',
  'imageType',
  'jpeg',
  'imageCategory',
  'animals'
);
// https://www.mysite.com/folder1/folder2/images?imageName=cuteCat&imageType=jpeg

const x = (...params) => params.length;
console.log(x(1, 2, 3, 4, 5, 6));
