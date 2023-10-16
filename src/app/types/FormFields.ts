export default interface FormFields {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  zip: string;
  services?: string[];
  referralSource?: string[];
  message: string;
}
