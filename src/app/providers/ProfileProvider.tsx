import * as React from "react";

import { User } from "../api/auth";

export const ProfileContext = React.createContext<User | undefined>(undefined);
ProfileContext.displayName = "ProfileContext";

export const SetProfileContext = React.createContext<
  React.Dispatch<React.SetStateAction<User | undefined>>
>((p) => {});
SetProfileContext.displayName = "SetProfileContext";

export default function ProfileProvider(props: React.PropsWithChildren<{}>) {
  const [profile, setProfile] = React.useState<User>();

  return (
    <ProfileContext.Provider value={profile}>
      <SetProfileContext.Provider value={setProfile}>
        {props.children}
      </SetProfileContext.Provider>
    </ProfileContext.Provider>
  );
}

export const useProfile = () => {
  const profile = React.useContext(ProfileContext);

  return profile;
};

export const useSetProfile = () => {
  const setProfile = React.useContext(SetProfileContext);

  return setProfile;
};
