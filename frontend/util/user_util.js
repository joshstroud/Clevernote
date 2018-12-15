export const getUsernameFromUser = (user) => {
  return user.email.substring(
    0,
    user.email.indexOf("@")
  );
}