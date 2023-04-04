import { useOne } from "@pankod/refine-core/";
import { useParams } from "@pankod/refine-react-router-v6";
import { Profile } from "components";

const AgentProfile = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: id as string,
  });
  const AgentProfile = data?.data ?? [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <Profile
      type="Agent"
      name={AgentProfile.name}
      email={AgentProfile.email}
      avatar={AgentProfile.avatar}
      properties={AgentProfile.allProperties}
    />
  );
};

export default AgentProfile;
