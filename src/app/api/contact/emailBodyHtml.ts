import FormFields from "../../types/FormFields";

export default ({
  address,
  name,
  email,
  phone,
  zip,
  message,
  services,
  referralSource,
}: FormFields) => `
<p>Hi ${name},<br />
<br />
Thank you for contacting HomeShine Solutions, LLC. A member of our team will be in touch shortly to provide you with your FREE QUOTE!<br/>
We do our best to respond within 24 hours.<br />
<br />
Below is a copy of your responses:<br />
<br />
Name: ${name}<br />
Email: ${email}<br />
Phone: ${phone || "[none provided]"}<br />
Address: ${address || "[none provided]"}<br />
Zip code: ${zip}<br />
Message: ${message}<br />
Services of interest: ${services ?? "[none selected]"} <br />
Referral Source(s): ${referralSource ?? "[none selected]"}<br />
<br />
If you would like to update or change any of the information you provided, please reply to this email.<br />
<br/>
Have an excellent day!<br />
<br />
-- The HomeShine Team<br />
Call: (508) 921-0275<br />
email: homeshinesolutionsllc@gmail.com</p>
`;
