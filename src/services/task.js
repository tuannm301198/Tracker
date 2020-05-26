import firebase from '../firebase';

const db = firebase.firestore();

export const getTask = async () => {
  const data = await db.collection("task").get();
  const response = [];
      data.forEach(doc => {
        response.push(doc.data());
  });
  return {
    data: response,
    success: true,
  };
}

export const createTask = async (payload) => {
  console.log('payload', payload);
  const data = await db.collection("task").add({
    agent: payload.agent,
    delivery: {
      address: {
        latLng: payload.delivery.latLng,
        name: payload.delivery.address,
      },
      customer: {
        name: payload.delivery.name,
        phone: payload.delivery.phone,
      },
      date: payload.delivery.date,
      order_id: payload.delivery.order_id,
      type: "DELIVERY",
      status: "READY",
    },
    order_id: payload.pickup.order_id,
    pickup: {
      address: {
        latLng: payload.pickup.latLng,
        name: payload.pickup.address,
      },
      customer: {
        name: payload.pickup.name,
        phone: payload.pickup.phone,
      },
      date: payload.pickup.date,
      order_id: payload.pickup.order_id,
      type: "PICKUP",
      status: "READY",
    },
    status: payload.status,
  });

  const response = [];
      data.forEach(doc => {
        response.push(doc.data());
  });

  return {
    data: response,
    success: true,
  };
}
