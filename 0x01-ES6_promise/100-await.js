import { uploadPhoto, createUser } from 'util';

export default async function asyncUploadUser() {
  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
