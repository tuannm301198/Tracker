import firebase from '../firebase';

const db = firebase.firestore();

export const login = async (values) => {
  const data = await db.collection("manager")
    .where('email', '==', values.email)
    .where('password', '==', values.password)
    .get();
    const response = [];
    data.forEach(doc => {
      response.push(doc.data());
    });

  return {
    data: response,
    success: true,
  };
}
