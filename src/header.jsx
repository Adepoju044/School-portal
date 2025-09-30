function Header() {
  return (
    <div className="flex justify-center items-center p-4">
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
