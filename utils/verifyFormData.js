const verifyFormData = (formData) => {
  const {
    time,
    firstName,
    lastName,
    email,
    phone,
    resume,
    coverLetter,
    linkedin,
    website,
    jobId,
  } = formData;
  if (
    !time ||
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !resume ||
    !coverLetter ||
    !linkedin ||
    !website ||
    !jobId
  ) {
    return false;
  }
  if (email.indexOf("@") === -1) {
    return false;
  }
  return true;
};
