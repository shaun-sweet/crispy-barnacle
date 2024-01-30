import { useGetCurrentUser, useGetFriends } from "@/hooks";

export const ListFriends = () => {
  const { data: currentUser } = useGetCurrentUser();
  const { data: friends = [] } = useGetFriends(currentUser?.id);

  return (
    <ul>
      {friends?.map((friend) => (
        <li key={friend.id} className="mt-1">
          {friend.firstName} {friend.lastName}
        </li>
      ))}
    </ul>
  );
};
