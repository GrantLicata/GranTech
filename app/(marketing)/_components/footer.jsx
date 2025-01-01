export const Footer = () => {
  return (
    <div className="flex sm:justify-between items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <p className="text-muted-foreground text-sm font-medium text-center sm:text-left w-full">
        © 2023 Storynote, Inc.
      </p>
      <div className="md:ml-auto w-full justify-between hidden sm:flex sm:justify-end items-center gap-x-2 text-muted-foreground"></div>
    </div>
  );
};
