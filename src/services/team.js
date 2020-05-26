import firebase from '../firebase';

const db = firebase.firestore();

export const getTeam = async () => {
  const data = await db.collection("team").get();
  const response = [];
      data.forEach(doc => {
        response.push(doc.data());
  });
  return {
    data: response,
    success: true,
  };
}
