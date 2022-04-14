import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export const useDB = (database) => {
  const [db, setDB] = useState(null);

  useEffect(() => {
    const dbRef = ref(database, 'goods');
    onValue(dbRef, (snapshot) => setDB(snapshot.val()));
  }, []);

  return db;
};
