import Spinner from '@/components/Spinner';
import { useFarm } from '@/hooks/useFarm';
const Farm = () => {
  const { farm, loading } = useFarm();

  if (loading) {
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="h-[100vh] flex items-center justify-center">
      {farm?.name}
    </div>
  );
};

export default Farm;
