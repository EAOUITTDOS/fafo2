import React, { useState } from "react";
import QRCode from "qrcode.react";
import "./App.css";

function App() {
  const [user, setUser] = useState("Jane Doe");
  const [networkInfo, setNetworkInfo] = useState({
    ssid: "Home_Network",
    bssid: "xx:xx:xx:xx:xx:xx",
    ip: "192.168.1.23",
    signal: "-54",
    speed: "144",
    timestamp: new Date().toISOString()
  });
  const [history, setHistory] = useState([]);
  const [showQR, setShowQR] = useState(false);
  const [cloudSync, setCloudSync] = useState(true);

  const prettyString = (info) => (
    `SSID: ${info.ssid}
BSSID: ${info.bssid}
IP: ${info.ip}
Signal: ${info.signal} dBm
Speed: ${info.speed} Mbps
Time: ${info.timestamp}`
  );

  const copyInfo = () => {
    navigator.clipboard.writeText(prettyString(networkInfo));
    alert("Copied!");
  };

  const shareInfo = () => {
    if (navigator.share) {
      navigator.share({
        title: "Wi-Fi Info",
        text: prettyString(networkInfo)
      });
    } else {
      alert("Web Share API not supported.");
    }
  };

  if (!user) {
    return (
      <div className="App">
        <h2>WiFiSuite Web</h2>
        <button onClick={() => setUser("Jane Doe")}>
          Sign in with Google
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <header>
        <h2>WiFiSuite Web</h2>
        <div>
          {user} <button onClick={() => setUser(null)}>Logout</button>
        </div>
      </header>
      <main>
        <div className="card">
          <div>SSID: {networkInfo.ssid}</div>
          <div>BSSID: {networkInfo.bssid}</div>
          <div>IP: {networkInfo.ip}</div>
          <div>Signal: {networkInfo.signal} dBm</div>
          <div>Speed: {networkInfo.speed} Mbps</div>
          <div>Time: {networkInfo.timestamp}</div>
        </div>
        <div style={{ margin: "1em 0" }}>
          <button onClick={copyInfo}>Copy</button>
          <button onClick={shareInfo}>Share</button>
          <button onClick={() => setShowQR(true)}>Show QR</button>
          <button onClick={() => setHistory([networkInfo, ...history])}>Save/Sync</button>
        </div>
        {showQR && (
          <div className="modal">
            <QRCode value={prettyString(networkInfo)} size={220} />
            <button onClick={() => setShowQR(false)}>Close</button>
          </div>
        )}
        <h3>History</h3>
        <ul>
          {history.map((info, idx) => (
            <li key={idx}>{info.ssid} – {info.timestamp}</li>
          ))}
        </ul>
        <div>
          <label>
            <input type="checkbox" checked={cloudSync} onChange={e => setCloudSync(e.target.checked)} /> Cloud Sync
          </label>
        </div>
      </main>
    </div>
  );
}

export default App;