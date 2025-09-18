import { useFarm } from '@/hooks/useFarm';
const Farm = () => {
  const { farm, loading } = useFarm();
  console.log(farm, loading);
  return (
    <div className="h-[100vh] flex items-center justify-center">
      {farm?.name}
    </div>
  );
};

export default Farm;
