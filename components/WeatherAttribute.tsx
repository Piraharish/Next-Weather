const WeatherAttribute = ({
  icon,
  label,
  value,
}: {
  icon?: JSX.Element;
  label: string;
  value: string;
}) => {
  return (
    <>
      {icon ? (
        <div className="p-4 items-center text-center text-sm flex flex-col gap-2 border border-dotted w-full max-h-28 bg-gradient-to-br from-zinc-950/10 to-yellow-900/5 rounded-md shadow-sm shadow-transparent transition-all ease-in-out duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-yellow-900/5 hover:via-yellow-950/5 hover:to-zinc-950/10">
          {icon}
          <p className="capitalize text-base">
            <span className="text-muted-foreground mr-1">{label}:</span> {value}
          </p>
        </div>
      ) : (
        <p className="capitalize text-base">
          <span className="text-muted-foreground mr-1">{label}:</span> {value}
        </p>
      )}
    </>
  );
};

export default WeatherAttribute;
