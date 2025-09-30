function Header() {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center items-center">
      <div
        className="flex items-center space-x-4"
        style={{ marginTop: "25px" }}
      >
        <img
          src="/img/school-logo.png"
          alt="school-logo"
          className="w-20 h-20"
        ></img>
        <h1 className="text-4xl font-extrabold text-blue-700 inline-block">
          School Portal
        </h1>
      </div>
    </div>
  );
}

export default Header;
