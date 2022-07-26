import reactCookie from "react-cookies";

const saveDataInCookie = (key: string, value: any) => {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  reactCookie.save(key, value, {
    path: "/",
    expires,
    httpOnly: false,
  });
};

export default saveDataInCookie;
