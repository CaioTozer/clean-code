async function registerNewUser(data) {
  const { email, name, avatar } = data;

  if (!avatar) return { error: "avatar is required" };

  if (!name) return { error: "name is required" };

  const existsUserWithEmail = getUserByEmail(email);

  if (existsUserWithEmail) {
    return { error: "email already used" };
  }

  const JPG_avatar = convertImageToJPG(avatar);

  const user = await createNewUser({ email, name, avatar: JPG_avatar });

  return { user };
}
