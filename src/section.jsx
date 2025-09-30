export default function Section() {
  return (
    <div>
      <p className="font-bold text-2xl">List Of Students</p>
      <div>
        <div
          className="hidden bg-gray-300 md:flex gap-40 w-[95%] h-[30px] text-center font-bold"
          style={{ marginTop: "15px" }}
        >
          <p>Name</p>
          <p>Email</p>
        </div>
      </div>
    </div>
  );
}
