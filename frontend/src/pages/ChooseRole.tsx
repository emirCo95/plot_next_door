import farmer from '@/assets/farmer.jpg';
import customer from '@/assets/customer.jpg';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
          <Link to="/customer-register">Register as Customer</Link>
        </Button>
      </div>
      <div className="w-1/2 m-auto rounded-2xl">
        <img className="w-full h-full rounded-2xl" src={farmer} alt="farmer" />
        <Button variant={'outline'} className="w-full mt-4">
          <Link to="/farmer-register">Register as Farmer</Link>
        </Button>
      </div>
    </div>
  );
};

export default ChooseRole;
