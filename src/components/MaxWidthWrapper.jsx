import { cn } from "../utils/util";

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div
      className={cn(
        "bg-primaryBG min-h-screen h-full w-full max-w-screen-2xl px-2.5",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
