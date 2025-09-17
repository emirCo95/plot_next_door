import { ClipLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <ClipLoader />;
    </div>
  );
};

export default Spinner;
