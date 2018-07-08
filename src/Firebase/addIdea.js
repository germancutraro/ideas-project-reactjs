import { db } from './index';

export default (userInfo, idea) => {
  db.ref('ideas').push({
    ...userInfo,
    idea
  })
  .then(() => console.log('Added!'))
  .catch(err => console.log(err));
};