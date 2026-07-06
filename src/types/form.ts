export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
