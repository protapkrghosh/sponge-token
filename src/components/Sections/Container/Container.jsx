const Container = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto xl:px-24 lg:px-16 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
