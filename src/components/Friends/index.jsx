import { useQuery } from "@tanstack/react-query";
//import black from "../../assets/icons/black.jpeg";
import styles from "./friends.module.scss";
import { getMyFriendsFetch } from "../../api/friendsApi";
import { Friend } from "./Friend";
//import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { deleteApplication } from "../../redux/slices/friends";

export const Friends = () => {
  //const dispatch = useDispatch();
  const applications = useSelector((state) => state.friends.application);
  console.log(applications);
  const { data: friends } = useQuery({
    queryKey: ["getMyfriends"],
    queryFn: async () => {
      const res = await getMyFriendsFetch();
      if (res.ok) {
        const responce = await res.json();
        return responce;
      }
    },
  });

  //console.log("friends", friends);
  //console.log("applications", applications);

  //useEffect(() => {
  //  let friendId = [];
  //  for (let friend in friends) {
  //    friendId.push(friend.id);
  //  }

  //}, [applications, dispatch, friends]);

  return (
    <div className={styles.friends}>
      <div className={styles.friends_top}>
        <p>Друзья</p>
        <span>{friends ? friends.length : 0}</span>
      </div>
      <div className={styles.friends_bottom_line}></div>
      {friends &&
        friends.map((friend) => <Friend key={friend.id} friend={friend} />)}
    </div>
  );
};
