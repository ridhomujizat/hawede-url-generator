import React from "react";
import logo from "./logo.png";
import "./App.css";

function App() {
  const [undangan, setUndangan] = React.useState("");
  const [untuk, setUntuk] = React.useState("");

  React.useEffect(() => {
    const url = new URLSearchParams(window.location.search);
    const myParam = url.get("undangan") || "";
    setUndangan(myParam);
  }, []);

  const generetLink = () => {
    const param = untuk.replaceAll(" ", "+").replaceAll("&", "%26");
    const link = `https://undangan.hawede.id/${undangan}?for=${param}`;

    return link;
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {undangan !== "" ? (
          <>
            <p>Undangan untuk: {undangan}</p>
            <input
              placeholder="input nama yang diundang"
              value={untuk}
              onChange={(e) => {
                setUntuk(e.target.value);
              }}
            />
            <div style={{ width: "50%" }}>
              {untuk !== "" ? (
                <>
                  <p className="link">{generetLink()}</p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(generetLink());
                    }}
                  >
                    Copy Link
                  </button>
                </>
              ) : (
                <p className="link">input nama yang diundang terlebih dahulu</p>
              )}
            </div>
          </>
        ) : (
          <p className="link">
            Tambah code undangan di belakang url contoh url/?undangan=saya%26dia
          </p>
        )}
      </header>
    </div>
  );
}

export default App;
