import { values } from 'lodash';



export const selectAllPhoto = (photo) => values(photo.entities);
export const selectAllUsers = (users) => values(users.entities);
