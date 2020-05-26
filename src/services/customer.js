import firebase from '../firebase';

const db = firebase.firestore();

export const getCustomer = async () => {
  const data = await db.collection("customer").get();
  const response = [];
      data.forEach(doc => {
        response.push(doc.data());
  });
  return {
    data: response,
    success: true,
  };
}
