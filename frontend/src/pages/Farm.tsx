import Spinner from '@/components/Spinner';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFarm } from '@/hooks/useFarm';
import { useState } from 'react';
import { type Farm } from '@/api/farm';
const Farm = () => {
  const { farm, loading } = useFarm();
  const [data, setData] = useState<Farm | null>(farm || null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setData((prev) => (prev ? { ...prev, [name]: value } : prev));
  }

  console.log(data);

  if (loading) {
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="h-[100vh] w-full grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b from-white to-cosmic-latte">
      <div className="w-1/2 mx-auto flex flex-col items-start justify-center p-8">
        <Label className="pb-4" htmlFor="name">
          Farm Name
        </Label>
        <Input
          name="name"
          id="name"
          type="text"
          defaultValue={farm?.name || ''}
          onChange={handleChange}
          className="mb-4"
        />
      </div>
      <div className="flex flex-col items-center justify-center p-8"></div>
    </div>
  );
};

export default Farm;
