import farmer from '@/assets/farmer.jpg';
import customer from '@/assets/customer.jpg';
import { Button } from '@/components/ui/button';

const ChooseRole = () => {
  return (
    <div className="h-[100vh] bg-gradient-to-b from-white to-cosmic-latte grid grid-cols-1 md:grid-cols-2">
      <div className="w-1/2 m-auto rounded-2xl">
        <img
          className="w-full h-full rounded-2xl"
          src={customer}
          alt="customer"
        />
        <Button variant={'outline'} className="w-full mt-4">
          <a href="/customer-register">Register as Customer</a>
        </Button>
      </div>
      <div className="w-1/2 m-auto rounded-2xl">
        <img className="w-full h-full rounded-2xl" src={farmer} alt="farmer" />
        <Button variant={'outline'} className="w-full mt-4">
          <a href="/farmer-register">Register as Farmer</a>
        </Button>
      </div>
    </div>
  );
};

export default ChooseRole;
