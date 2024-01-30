import { ListFriends } from "@/components/ListFriends";
import { useGetCurrentUser } from "@/hooks";
import { useMemo } from "react";

export const Profile = () => {
  const { data: currentUser } = useGetCurrentUser();

  const fullName = useMemo(() => {
    if (!currentUser) return "";
    return `${currentUser.firstName} ${currentUser.lastName}`;
  }, [currentUser]);

  return (
    <div>
      Welcome {fullName}!<h1 className="text-2xl">Friends</h1>
      <ListFriends />
    </div>
  );
};
