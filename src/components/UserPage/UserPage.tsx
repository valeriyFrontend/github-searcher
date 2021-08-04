import { useParams } from "react-router-dom";

const UserPage = ({ data, repositories }: { data: any; repositories: any }) => {
  const { id }: { id: string } = useParams();
  console.log(id);

  return <h1>User page</h1>;
};

export default UserPage;
