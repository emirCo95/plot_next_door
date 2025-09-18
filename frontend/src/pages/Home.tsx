import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="h-[100vh] bg-gradient-to-b from-white to-cosmic-latte flex items-center justify-center">
      <div className="w-[500px] mx-auto text-center p-2 bg-white/70 rounded-2xl shadow-lg">
        <p className="flex text-center text-charcoal font-chewy text-lg md:text-xl lg:text-2xl justify-center items-center gap-2">
          Announcing our latest features. <a href="">Read More</a>
          <ArrowRight />
        </p>
      </div>
    </div>
  );
};

export default Home;
