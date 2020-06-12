import fs from 'fs';

const file = fs.readFileSync(`${__dirname}/public/manifest.json`);

const getManifest = () => {
  try {
    return JSON.parse(file);
  } catch (error) {
    console.error(error);
  }
};

export default getManifest;
