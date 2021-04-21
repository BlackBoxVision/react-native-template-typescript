import Storage from '@react-native-async-storage/async-storage';

// You must replace the prefix 'react-native-app' by app name
const SESSION = '@react-native-app/auth';
const ONBOARDING = '@react-native-app/onboarding';

export const getSession = async () => {
  const sessionData = await Storage.getItem(SESSION);

  if (!sessionData) {
    throw 'no session';
  }

  return JSON.parse(sessionData);
};

export const hasSession = async () => {
  try {
    const session = await getSession();
    return !!session;
  } catch (err) {
    console.info('hasSession err ', err);
    return false;
  }
};

export const setSession = async (session: any) =>
  await Storage.setItem(SESSION, JSON.stringify(session));

export const removeSession = async () => await Storage.removeItem(SESSION);

export const hasOnboarding = async () => await Storage.getItem(ONBOARDING);

export const setHasOnboarding = async () =>
  await Storage.setItem(ONBOARDING, JSON.stringify(true));
