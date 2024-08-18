import { ControlledFormData, UncontrolledFormData } from '@/utils';

import { FormEntry } from '@store/formsEntries/types';

export const formDataToFormEntry = async (
  formData: ControlledFormData | UncontrolledFormData,
): Promise<FormEntry> => {
  const reader = new FileReader();
  const picture = formData.picture;
  reader.readAsDataURL(picture instanceof File ? picture : picture[0]);

  return {
    ...formData,
    picture: await new Promise((resolve) => {
      reader.onloadend = () => {
        resolve(typeof reader.result === 'string' ? reader.result : '');
      };
    }),
  };
};
