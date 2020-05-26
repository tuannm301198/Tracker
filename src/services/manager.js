import firebase from '../firebase';

const db = firebase.firestore();

export const getManager = async () => {
  const data = await db.collection("manager").get();
  const response = [];
      data.forEach(doc => {
        response.push(doc.data());
  });
  return {
    data: response,
    success: true,
  };
}
