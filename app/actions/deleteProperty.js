'use server';
import cloudinary from '@/config/cloudinary';
import connectDb from '@/config/database';
import Property from '@/models/Property';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';

async function deleteProperty(propertyId) {
  const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.userId) {
    throw new Error('User not authenticated');
  }
  const { userId } = sessionUser;
  await connectDb();
  const property = await Property.findById(propertyId);
  if (!property) {
    throw new Error('Property not found');
  }
  // verify ownership of property
  if (property.owner.toString() !== userId) {
    throw new Error('User not authorized to delete this property');
  }
  // Extract public IDs from image Urls
  const publicIds = property.images.map((imageUrl) => {
    const parts = imageUrl.split('/');
    const publicId = parts.at(-1).split('.').at(0);
    return publicId;
  });
  // Delete images from Cloudinary
  if (publicIds.length > 0) {
    for (let publicId of publicIds) {
      await cloudinary.uploader.destroy('propertyrental/' + publicId);
    }
  }

  // Delete property from database
  await Property.deleteOne();

  revalidatePath('/', 'layout');
}
export default deleteProperty;
