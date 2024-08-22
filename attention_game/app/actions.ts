'use server'

export async function getImages() {
  try {
    const responce = await fetch(`${process.env.API_HOST}/image`, { cache: 'no-store' });
    return responce.json();
  } catch (error) {
    return error
  }
}
