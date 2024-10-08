import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section className="min-h-[100svh] w-full grid grid-cols-1 md:grid-cols-2 items-center gap-4 lg:gap-8 max-w-7xl m-auto">
      <div className="mt-24 lg:my-auto">
        <img
          src="/google-for-startups.svg"
          alt="Google for Startups Logo"
          className="w-48 h-auto pb-2"
        />
        <img
          src="/logo-main.png"
          alt="Startup Weekend Jaipur Logo"
          className="w-96 h-auto"
        />
        <p className="text-base md:text-lg text-foreground my-4 md:my-6">
          {`"We built a company in 54 hours, what did you do this weekend?"`}
        </p>
        <div className="flex flex-row gap-4">
          <Button className="hover:text-brand hover:bg-brand/10 rounded-full border-2 backdrop-blur-sm bg-brand text-background border-brand duration-300">
            <a href="/register">In-House</a>
            <span>
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </span>
          </Button>
          <Button className="text-brand bg-brand/10 rounded-full border-2 backdrop-blur-sm hover:bg-brand hover:text-background border-brand duration-300">
            <a href="/register">Out-House</a>
            <span>
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </span>
          </Button>
        </div>
      </div>
      <div>
        <ShuffleGrid />
      </div>
    </section>
  );
}

const shuffle = <T,>(array: T[]): T[] => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.prismic.io/swj24/Zp_y6R5LeNNTxbxV_img1.webp?auto=format,compress&w=500",
  },
  {
    id: 2,
    src: "https://images.prismic.io/swj24/Zp_y6h5LeNNTxbxW_img2.webp?auto=format,compress&w=500",
  },
  {
    id: 3,
    src: "https://images.prismic.io/swj24/Zp_y6x5LeNNTxbxX_img3.webp?auto=format,compress&w=500",
  },
  {
    id: 4,
    src: "https://images.prismic.io/swj24/Zp_y7B5LeNNTxbxY_img4.webp?auto=format,compress&w=500",
  },
  {
    id: 5,
    src: "https://images.prismic.io/swj24/Zp_y7R5LeNNTxbxZ_img5.webp?auto=format,compress&w=500",
  },
  {
    id: 6,
    src: "https://images.prismic.io/swj24/Zp_y7h5LeNNTxbxa_img6.webp?auto=format,compress&w=500",
  },
  {
    id: 7,
    src: "https://images.prismic.io/swj24/Zp_y7x5LeNNTxbxb_img7.webp?auto=format,compress&w=500",
  },
  {
    id: 8,
    src: "https://images.prismic.io/swj24/Zp_y8B5LeNNTxbxc_img8.webp?auto=format,compress&w=500",
  },
  {
    id: 9,
    src: "https://images.prismic.io/swj24/Zp_y8R5LeNNTxbxd_img9.webp?auto=format,compress&w=500",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full aspect-square"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(() => generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 lg:h-[30rem] gap-1">
      {squares}
    </div>
  );
};
