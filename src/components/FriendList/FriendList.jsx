import styles from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend, index) => (
        <FriendListItem key={index} {...friend} />
      ))}
    </ul>
  );
};

export default FriendList;
