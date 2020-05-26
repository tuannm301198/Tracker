import firebase from '../firebase';

const db = firebase.firestore();

export const getAgent = async () => {
  const data = await db.collection("agent").get();
  const response = [];
      data.forEach(doc => {
        response.push({ ...doc.data(), id: doc.id });
  });
  return {
    data: response,
    success: true,
  };
}
