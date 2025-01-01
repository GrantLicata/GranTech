export const Heading = () => {
  return (
    <div className="max-w-3xl lg:max-w-7xl p-6 space-y-4 rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-[calc(2rem+1px)]">
      <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold">
        GranTech Ratings
      </h1>
      <h3 className="text-base text-md md:text-xl font-light text-muted-foreground sm:px-14 pt-4 pb-8">
        Your trusted source for unbiased tech product reviews and ratings.
        Simplify your tech choices with expert insights and community-driven
        feedback, all in one place.{" "}
      </h3>
    </div>
  );
};
