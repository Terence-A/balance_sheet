const PersonalNotes = () => {
  return (
    <section className="w-[68%] print:w-[80%] mt-3  mx-auto">
      <h2 className="text-sm  font-extrabold">PERSONAL NOTES: </h2>
      <input
        type="text"
        className="w-full border-b border-b-stone-900 text-sm p-1 print:p-0 italic "
      />
    </section>
  );
};

export default PersonalNotes;
