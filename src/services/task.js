import firebase from '../firebase';

const db = firebase.firestore();

export const getTask = async () => {
  const data = await db.collection("task").get();
  const response = [];
  data.forEach(doc => {
    response.push({ ...doc.data(), id: doc.id });
  });

  return {
    data: response,
    success: true,
  };
}

export const getTaskDetail = async (id) => {
  const task = await db.collection("task").doc(id).get();
  const agent = await db.collection("agent").doc(task.data().agent).get();

  return {
    data: {
      task: task.data(),
      agent: agent.data(),
    },
    success: true,
  };
}

export const createTask = async (payload) => {
  const data = await db.collection("task").add({
    agent: payload.agent,
    date_time: new firebase.firestore.Timestamp(new Date().getTime()/1000, 0),
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

  return {
    data: data,
    success: true,
  };
}
