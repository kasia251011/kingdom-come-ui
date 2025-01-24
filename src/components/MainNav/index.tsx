const navLabels = [
  "INWENTARZ",
  "Dziennik",
  "Mapa",
  "Gracz",
  "Pomocnicy",
  "Kodeks",
];

const MainNav = () => {
  return (
    <div className="flex  justify-around">
      {navLabels.map((label, index) => (
        <p key={index}>{label}</p>
      ))}
    </div>
  );
};

export default MainNav;
