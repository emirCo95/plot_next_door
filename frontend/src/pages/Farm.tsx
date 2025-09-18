import { useFarm } from '@/hooks/useFarm';
const Farm = () => {
  const { farm, loading } = useFarm();
  console.log(farm, loading);
  return <div>Farm</div>;
};

export default Farm;
