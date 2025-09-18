import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-[100vh] bg-gradient-to-b from-white to-cosmic-latte flex flex-col gap-4 items-center justify-center">
      <div className="w-[500px] mx-auto text-center p-2 bg-white/70 rounded-2xl shadow-lg">
        <p className="flex text-center text-charcoal font-chewy text-lg md:text-xl lg:text-2xl justify-center items-center gap-2">
          Announcing our latest features.{' '}
          <a className="text-pnd-green" href="">
            Read More
          </a>
          <ArrowRight className="text-pnd-green" />
        </p>
      </div>
      <div className="w-[300px] md:w-[600px] mx-auto text-center p-2 mt-6">
        <h1 className="text-3xl md:text-6xl text-charcoal font-semibold">
          Grow What You Love, Without the Hard Work
        </h1>
      </div>
      <div className="w-[300px] md:w-[600px] mx-auto text-center p-2 mt-6 text-charcoal font-sans text-md md:text-lg lg:text-xl">
        <p>
          Reserve fresh crops from local farms, track their growth online, and
          enjoy farm-to-table produce — no green thumb required.
        </p>
      </div>
      <div className="flex gap-4 mt-6">
        <Button
          variant="outline"
          className="px-8 py-4 rounded-full text-sm md:text-md lg:text-lg cursor-pointer bg-white/70 text-charcoal hover:bg-white/90 hover:scale-105 transition-all duration-200"
        >
          <Link to="/farms">Browse Farms</Link>
        </Button>
        <Button
          variant="outline"
          className="px-8 py-4 rounded-full text-sm md:text-md lg:text-lg cursor-pointer bg-white/70 text-charcoal hover:bg-white/90 hover:scale-105 transition-all duration-200"
        >
          <Link to="/register">Sign Up Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
