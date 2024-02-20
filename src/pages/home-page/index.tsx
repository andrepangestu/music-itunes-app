import { useNavigate } from "react-router-dom";
import FormSearch from "../../components/FormSearch";
import Logo from "../../components/Logo";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen relative flex flex-col"
      style={{
        backgroundImage: "linear-gradient(153deg, #712bda, #a45deb 100%)",
      }}
    >
      <div className="flex-1 flex w-full justify-center items-center">
        <div>
          <Logo />
        </div>
      </div>
      <div className="flex">
        <FormSearch
          onSubmit={(search) => navigate(`/result?search=${search}`)}
        />
      </div>
    </div>
  );
};

export default HomePage;
