import Typography from "@/components/ui/Typography";
import clsx from "clsx";
import Lottie from "lottie-react";

type Props = {
  children: React.ReactNode;
  animation: any;
  reverse?: boolean;
  title: string;
};

const StickyBlock = ({
  children,
  animation,
  title,
  reverse = false,
}: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center my-36">
      <div className={clsx(reverse && "order-2", "w-2/5")}>
        <Lottie
          animationData={animation}
          loop={true}
          className="sticky top-1/4 w-3/4 order-1 md:order-2 m-auto"
        />
      </div>
      <div className={clsx(reverse && "order-1", "w-3/5 flex flex-col gap-8")}>
        <Typography variant="h3" component="h3" weight="bold" font="title">
          {title}
        </Typography>
        {children}
      </div>
    </div>
  );
};

export default StickyBlock;
