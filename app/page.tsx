import ProfileView from "../components/profileView";
import { defaultProfile } from "../data/defaultProfile";

export default function Home() {
  return <ProfileView profile={defaultProfile} />;
}