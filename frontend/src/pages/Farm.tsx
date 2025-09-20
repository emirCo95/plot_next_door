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
    <div className="h-[100vh] grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b from-white to-cosmic-latte">
      <div className="flex flex-col items-center justify-center p-8">
        {farm?.name}
      </div>
      <div className="flex flex-col items-center justify-center p-8"></div>
    </div>
  );
};

export default Farm;
