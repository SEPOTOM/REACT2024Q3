import { FormData } from '@/utils';
import { FormEntry } from '@store/formsEntries/types';

export const formDataToFormEntry = async (
  formData: FormData,
): Promise<FormEntry> => {
  const reader = new FileReader();
  reader.readAsDataURL(formData.picture[0]);

  return {
    ...formData,
    picture: await new Promise((resolve) => {
      reader.onloadend = () => {
        resolve(typeof reader.result === 'string' ? reader.result : '');
      };
    }),
  };
};
